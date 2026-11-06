import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/* ─────────────────────────── GARDE-FOUS ANTI-ABUS ───────────────────────────
   Le formulaire public est une cible : bots de spam, sondes, rafales.
   Défenses, dans cet ordre : limite de débit par IP, pot de miel, validation
   stricte, plafonds de longueur, échappement HTML, erreurs opaques côté client.
   Le destinataire est fixé côté serveur : jamais une adresse venue du formulaire. */

const MAX = {
  nom: 100,
  prenom: 100,
  email: 200,
  telephone: 30,
  adresse: 200,
  codePostal: 20,
  ville: 100,
  message: 5000,
};

/* Limite de débit en mémoire : 5 messages / 10 min / IP.
   Portée par instance serverless, donc best effort : elle casse les rafales
   simples ; les campagnes distribuées relèvent du captcha (Turnstile, à venir). */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      const alive = times.filter((t) => now - t < WINDOW_MS);
      if (alive.length === 0) hits.delete(key);
      else hits.set(key, alive);
    }
  }
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'inconnue';

  /* 1. Limite de débit : avant tout traitement */
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Trop de messages envoyés. Réessayez dans quelques minutes.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }

  /* 2. Pot de miel : champ invisible pour les humains. S'il est rempli, c'est un
     bot ; on répond « succès » sans rien envoyer pour ne pas l'aider à apprendre. */
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    console.warn('Contact: pot de miel déclenché, message ignoré. IP:', ip);
    return NextResponse.json({ success: true });
  }

  /* 3. Validation stricte + plafonds de longueur */
  const nom = clean(body.nom, MAX.nom);
  const prenom = clean(body.prenom, MAX.prenom);
  const email = clean(body.email, MAX.email);
  const telephone = clean(body.telephone, MAX.telephone);
  const adresse = clean(body.adresse, MAX.adresse);
  const codePostal = clean(body.codePostal, MAX.codePostal);
  const ville = clean(body.ville, MAX.ville);
  const message = clean(body.message, MAX.message);

  if (!nom || !email || !telephone || !ville) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }
  if (!/^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
  }
  if (body.rgpd !== true) {
    return NextResponse.json({ error: 'Consentement requis' }, { status: 400 });
  }

  /* 4. Échappement HTML de tout ce qui entre dans l'e-mail */
  const safe = {
    nom: escapeHtml(nom),
    prenom: escapeHtml(prenom),
    email: escapeHtml(email),
    telephone: escapeHtml(telephone),
    adresse: escapeHtml(adresse),
    codePostal: escapeHtml(codePostal),
    ville: escapeHtml(ville),
    message: escapeHtml(message),
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Contact Soscartegrise <contact@soscartegrise31.fr>',
      /* Destinataire choisi côté serveur, jamais depuis le formulaire */
      to: process.env.CONTACT_EMAIL || 'soscartegrise31@hotmail.com',
      replyTo: email,
      subject: `Nouvelle demande de contact - ${`${nom} ${prenom}`.trim().replace(/[\r\n]+/g, ' ')}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Nom</strong></td><td>${safe.nom} ${safe.prenom}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${safe.telephone}</td></tr>
          ${safe.adresse ? `<tr><td><strong>Adresse</strong></td><td>${safe.adresse}${safe.codePostal ? `, ${safe.codePostal}` : ''} ${safe.ville}</td></tr>` : `<tr><td><strong>Ville</strong></td><td>${safe.ville}</td></tr>`}
          ${safe.message ? `<tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${safe.message}</td></tr>` : ''}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    /* Jamais de détail technique côté client : on log, on répond générique */
    console.error('Resend error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
