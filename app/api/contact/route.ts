import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const { nom, prenom, email, telephone, adresse, codePostal, ville, message } = data;

  try {
    await resend.emails.send({
      from: 'Contact Soscartegrise <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'soscartegrise31@hotmail.com',
      replyTo: email,
      subject: `Nouvelle demande de contact — ${nom} ${prenom || ''}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Nom</strong></td><td>${nom} ${prenom || ''}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${telephone}</td></tr>
          ${adresse ? `<tr><td><strong>Adresse</strong></td><td>${adresse}${codePostal ? `, ${codePostal}` : ''} ${ville}</td></tr>` : `<tr><td><strong>Ville</strong></td><td>${ville}</td></tr>`}
          ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ''}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
