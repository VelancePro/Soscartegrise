import type { Metadata } from 'next';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { FiPhone, FiShield, FiClock, FiCheckCircle, FiStar } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';
import CarteGriseAccordion from '@/components/CarteGriseAccordion';

export const metadata: Metadata = {
  title: "Carte grise Saint-Gaudens — Toutes démarches | Soscartegrise",
  description: "Changement de titulaire, duplicata, changement d'adresse, carte grise étrangère... Soscartegrise traite tous vos dossiers en 10 minutes à Saint-Gaudens.",
  keywords: 'carte grise Saint-Gaudens, changement titulaire, duplicata carte grise, carte grise 31, carte grise Haute-Garonne, carte grise Comminges',
  alternates: { canonical: '/carte-grise' },
  openGraph: {
    title: "Carte grise Saint-Gaudens — Toutes démarches | Soscartegrise",
    description: "Changement de titulaire, duplicata, changement d'adresse, carte grise étrangère à Saint-Gaudens.",
  },
};

const atouts = [
  {
    icone: FiCheckCircle,
    titre: "Habilité par l'État",
    description: 'Professionnel agréé pour toutes les démarches SIV.',
  },
  {
    icone: FiClock,
    titre: 'Rapidité',
    description: 'Votre dossier traité le jour même, carte grise sous 48 à 72h.',
  },
  {
    icone: FiShield,
    titre: 'Sécurité',
    description: 'Vos données personnelles sont protégées et traitées en toute confidentialité.',
  },
  {
    icone: FiStar,
    titre: 'Note 5/5',
    description: 'Nos clients nous font confiance — 7 avis Google vérifiés.',
  },
];

export default function CarteGrisePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.soscartegrise31.fr/carte-grise#service",
        "name": "Service carte grise — certificat d'immatriculation",
        "description": "Changement de titulaire, duplicata, changement d'adresse, carte grise étrangère. Dossier traité en 10 minutes à Saint-Gaudens. Habilité par l'État.",
        "url": "https://www.soscartegrise31.fr/carte-grise",
        "provider": {
          "@id": "https://www.soscartegrise31.fr/#business"
        },
        "serviceType": "Certificat d'immatriculation",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Haute-Garonne" },
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Comminges" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Prestations carte grise",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Changement de titulaire" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Changement d'adresse" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déclaration de cession" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Demande de duplicata" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carte grise étrangère" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Immatriculation véhicule neuf" } }
          ]
        }
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.soscartegrise31.fr" },
          { "@type": "ListItem", "position": 2, "name": "Carte grise", "item": "https://www.soscartegrise31.fr/carte-grise" }
        ]
      }} />

      <PageHero
        titre="Carte grise"
        sousTitre="Toutes vos démarches de certificat d'immatriculation, gérées sur place à Saint-Gaudens."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Carte grise' },
        ]}
        couleur="bleu"
      />

      {/* Section intro */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte gauche */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Service agréé
              </span>
            </div>
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl leading-tight">
              Votre carte grise en toute simplicité
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Soscartegrise est un professionnel habilité par l&apos;État pour réaliser toutes vos
              démarches liées au certificat d&apos;immatriculation. Achat de véhicule, perte de carte
              grise, déménagement ou véhicule étranger — nous traitons votre dossier rapidement et
              en toute sécurité, à Saint-Gaudens, au cœur du Comminges en Haute-Garonne.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Plus besoin de vous battre avec les sites administratifs. Déposez votre dossier chez
              nous, nous nous occupons du reste. Vous recevez votre certificat d&apos;immatriculation
              sous 48 à 72h. Nous intervenons également pour les clients de Muret, Toulouse,
              Saint-Girons et tout le département 31.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-rouge text-white font-titre font-bold px-7 py-3.5 rounded-full hover:bg-red-700 transition-colors duration-200"
              >
                Prendre rendez-vous
              </Link>
              <a
                href="tel:0619923340"
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-titre font-bold px-7 py-3.5 rounded-full hover:border-rouge hover:text-rouge transition-colors duration-200"
              >
                <FiPhone size={16} />
                06 19 92 33 40
              </a>
            </div>
          </div>

          {/* Image droite */}
          <div className="relative h-72 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/carte-grise-service.webp"
              alt="Dossier de carte grise traité chez Soscartegrise, Saint-Gaudens (31)"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Section atouts */}
      <SectionWrapper className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((atout, i) => {
            const Icon = atout.icone;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100"
              >
                <div className="w-11 h-11 rounded-xl bg-rouge/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-rouge" size={20} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-titre font-extrabold text-gray-900 text-base">
                    {atout.titre}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{atout.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Section accordion */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl">
              Nos prestations
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Sélectionnez votre démarche pour connaître les documents nécessaires et le tarif de
              notre service.
            </p>
          </div>
          <CarteGriseAccordion />
          <p className="text-gray-400 text-xs text-center mt-6">
            * Les tarifs indiqués correspondent aux frais de service de Soscartegrise. Les taxes
            fiscales liées à l&apos;immatriculation (cheval fiscal, malus…) sont en sus et varient
            selon le véhicule et la région.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA final */}
      <SectionWrapper className="py-16 px-4 bg-rouge">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-titre font-extrabold text-white text-3xl">
            Vous avez un dossier à déposer ?
          </h2>
          <p className="text-white/80 max-w-2xl">
            Passez directement en agence à Saint-Gaudens ou contactez-nous. Nous vérifions votre
            dossier et effectuons toutes les démarches pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-rouge font-titre font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Nous contacter
            </Link>
            <a
              href="tel:0619923340"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-titre font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <FiPhone size={18} />
              06 19 92 33 40
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
