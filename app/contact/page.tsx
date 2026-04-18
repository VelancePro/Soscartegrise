'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import PageHero from '@/components/PageHero';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse?: string;
  codePostal?: string;
  ville: string;
  message: string;
  rgpd: boolean;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    }
  };

  return (
    <>
      <PageHero
        titre="Contactez-nous"
        sousTitre="Nous répondons à toutes vos questions et traitons votre dossier en 10 minutes."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]}
        couleur="rouge"
      />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="font-titre font-extrabold text-gray-900 text-2xl mb-6">
              Envoyez-nous votre demande
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-green-600" size={28} />
                </div>
                <h3 className="font-titre font-bold text-gray-900 text-xl">
                  Message envoyé !
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs
                  délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nom" className="font-titre font-semibold text-gray-700 text-sm">
                      Nom <span className="text-rouge">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      {...register('nom', { required: 'Le nom est requis' })}
                      className={`border rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors ${
                        errors.nom ? 'border-rouge' : 'border-gray-200'
                      }`}
                      placeholder="Dupont"
                    />
                    {errors.nom && (
                      <p className="text-rouge text-xs">{errors.nom.message}</p>
                    )}
                  </div>

                  {/* Prénom */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="prenom" className="font-titre font-semibold text-gray-700 text-sm">
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      {...register('prenom')}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors"
                      placeholder="Jean"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-titre font-semibold text-gray-700 text-sm">
                      Email <span className="text-rouge">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Email invalide',
                        },
                      })}
                      className={`border rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors ${
                        errors.email ? 'border-rouge' : 'border-gray-200'
                      }`}
                      placeholder="jean.dupont@email.fr"
                    />
                    {errors.email && (
                      <p className="text-rouge text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telephone" className="font-titre font-semibold text-gray-700 text-sm">
                      Téléphone <span className="text-rouge">*</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      {...register('telephone', { required: 'Le téléphone est requis' })}
                      className={`border rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors ${
                        errors.telephone ? 'border-rouge' : 'border-gray-200'
                      }`}
                      placeholder="06 XX XX XX XX"
                    />
                    {errors.telephone && (
                      <p className="text-rouge text-xs">{errors.telephone.message}</p>
                    )}
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="adresse" className="font-titre font-semibold text-gray-700 text-sm">
                    Adresse
                  </label>
                  <input
                    id="adresse"
                    type="text"
                    {...register('adresse')}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors"
                    placeholder="12 rue de la Paix"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Code postal */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="codePostal" className="font-titre font-semibold text-gray-700 text-sm">
                      Code postal
                    </label>
                    <input
                      id="codePostal"
                      type="text"
                      {...register('codePostal')}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors"
                      placeholder="31800"
                    />
                  </div>

                  {/* Ville */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ville" className="font-titre font-semibold text-gray-700 text-sm">
                      Ville <span className="text-rouge">*</span>
                    </label>
                    <input
                      id="ville"
                      type="text"
                      {...register('ville', { required: 'La ville est requise' })}
                      className={`border rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors ${
                        errors.ville ? 'border-rouge' : 'border-gray-200'
                      }`}
                      placeholder="Saint-Gaudens"
                    />
                    {errors.ville && (
                      <p className="text-rouge text-xs">{errors.ville.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-titre font-semibold text-gray-700 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-rouge/30 focus:border-rouge transition-colors resize-none"
                    placeholder="Décrivez votre besoin (changement de titulaire, duplicata, etc.)"
                  />
                </div>

                {/* RGPD */}
                <div className="flex items-start gap-3">
                  <input
                    id="rgpd"
                    type="checkbox"
                    {...register('rgpd', {
                      required: 'Vous devez accepter la politique de confidentialité',
                    })}
                    className="mt-0.5 w-4 h-4 accent-rouge flex-shrink-0"
                  />
                  <label htmlFor="rgpd" className="text-gray-600 text-xs leading-relaxed">
                    J&apos;accepte que mes données soient utilisées pour traiter ma demande
                    conformément à la{' '}
                    <a href="/politique-confidentialite" className="text-bleu underline">
                      politique de confidentialité
                    </a>
                    . <span className="text-rouge">*</span>
                  </label>
                </div>
                {errors.rgpd && (
                  <p className="text-rouge text-xs -mt-3">{errors.rgpd.message}</p>
                )}

                {error && (
                  <p className="text-rouge text-sm bg-rouge/5 border border-rouge/20 rounded-xl px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-rouge text-white font-titre font-bold px-7 py-4 rounded-xl hover:bg-red-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col gap-6">
              <h2 className="font-titre font-extrabold text-gray-900 text-2xl">
                Nos coordonnées
              </h2>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rouge/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-rouge" size={18} />
                  </div>
                  <div>
                    <p className="font-titre font-semibold text-gray-900 text-sm mb-1">Téléphone</p>
                    <a href="tel:0581666900" className="text-gray-600 text-sm hover:text-rouge transition-colors block">
                      Tél. : 05 81 666 900
                    </a>
                    <a href="tel:0619923340" className="text-gray-600 text-sm hover:text-rouge transition-colors block">
                      Port. : 06 19 92 33 40
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rouge/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-rouge" size={18} />
                  </div>
                  <div>
                    <p className="font-titre font-semibold text-gray-900 text-sm mb-1">Email</p>
                    <a
                      href="mailto:soscartegrise31@hotmail.com"
                      className="text-gray-600 text-sm hover:text-rouge transition-colors"
                    >
                      soscartegrise31@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rouge/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-rouge" size={18} />
                  </div>
                  <div>
                    <p className="font-titre font-semibold text-gray-900 text-sm mb-1">Adresse</p>
                    <address className="not-italic text-gray-600 text-sm">
                      17 Boulevard Charles de Gaulle<br />
                      31800 Saint-Gaudens
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rouge/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-rouge" size={18} />
                  </div>
                  <div>
                    <p className="font-titre font-semibold text-gray-900 text-sm mb-2">Horaires</p>
                    <div className="flex flex-col gap-1 text-gray-600 text-sm">
                      <div className="flex justify-between gap-6">
                        <span className="font-medium">Lun – Mar – Jeu – Ven</span>
                        <span>8h30–12h00 | 14h00–17h00</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="font-medium">Mercredi</span>
                        <span>8h30–12h00 (fermé l&apos;après-midi)</span>
                      </div>
                      <div className="flex justify-between gap-6 text-gray-400">
                        <span className="font-medium">Samedi – Dimanche</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="tel:0619923340"
                className="flex items-center justify-center gap-2 bg-rouge text-white font-titre font-bold px-7 py-3.5 rounded-xl hover:bg-red-700 transition-colors duration-200 mt-2"
              >
                <FiPhone size={16} />
                Appeler maintenant
              </a>
            </div>

            {/* Google Maps */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0!2d0.7208!3d43.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a96f4b1f8d8b8b%3A0x1234567890abcdef!2s17%20Boulevard%20Charles%20de%20Gaulle%2C%2031800%20Saint-Gaudens!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Soscartegrise — 17 Boulevard Charles de Gaulle, Saint-Gaudens"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
