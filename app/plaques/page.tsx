import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { FiCheck, FiPhone } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: "Plaques d'immatriculation Saint-Gaudens | Soscartegrise",
  description: "Fabrication de plaques d'immatriculation aux normes SIV à Saint-Gaudens. Passez commande directement sur place chez Soscartegrise.",
  keywords: "plaques immatriculation Saint-Gaudens, fabrication plaque SIV, plaque immatriculation 31, plaque immatriculation Haute-Garonne",
  alternates: { canonical: '/plaques' },
  openGraph: {
    title: "Plaques d'immatriculation Saint-Gaudens | Soscartegrise",
    description: "Fabrication de plaques d'immatriculation aux normes SIV à Saint-Gaudens.",
  },
};

const normes = [
  {
    titre: 'Format standard',
    description: '520 mm × 110 mm pour les plaques avant et arrière, conformes à la réglementation SIV.',
  },
  {
    titre: 'Matériaux',
    description: 'Plexiglas de haute qualité, garantissant durabilité et lisibilité.',
  },
  {
    titre: 'Police d\'immatriculation',
    description: 'Caractères FE-Schrift (police européenne homologuée) en noir sur fond blanc.',
  },
  {
    titre: 'Identifiant régional',
    description: 'Logo de la région Occitanie avec les départements 31, 09 et 65 disponibles.',
  },
  {
    titre: 'Bande bleue européenne',
    description: 'Drapeau européen et code pays "F" en lettres blanches sur fond bleu à gauche.',
  },
  {
    titre: 'Certification',
    description: 'Toutes nos plaques sont fabriquées par un professionnel habilité, conformément à l\'arrêté du 9 février 2009.',
  },
];

export default function PlaquesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.soscartegrise31.fr/plaques#service",
        "name": "Fabrication de plaques d'immatriculation",
        "description": "Fabrication de plaques d'immatriculation aux normes SIV sur place en 5 minutes. 25 € la paire, rivets offerts. Saint-Gaudens, Haute-Garonne.",
        "url": "https://www.soscartegrise31.fr/plaques",
        "provider": {
          "@id": "https://www.soscartegrise31.fr/#business"
        },
        "serviceType": "Fabrication plaque d'immatriculation",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Haute-Garonne" },
          { "@type": "AdministrativeArea", "name": "Occitanie" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "25",
          "priceCurrency": "EUR",
          "description": "Paire de plaques d'immatriculation homologuées, rivets offerts, fabrication en 5 minutes"
        }
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.soscartegrise31.fr" },
          { "@type": "ListItem", "position": 2, "name": "Plaques d'immatriculation", "item": "https://www.soscartegrise31.fr/plaques" }
        ]
      }} />

      <PageHero
        titre="Plaques d'immatriculation"
        sousTitre="Fabrication sur place, aux normes SIV, lors de votre visite pour votre carte grise."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: "Plaques d'immatriculation" },
        ]}
        couleur="bleu"
      />

      {/* Section principale */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Service complet
              </span>
            </div>
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl leading-tight">
              Vos plaques fabriquées sur place
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Soscartegrise vous propose également la fabrication de vos plaques
              d&apos;immatriculation aux normes SIV. Passez commande directement sur place lors de
              votre venue pour votre carte grise.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Nos plaques sont fabriquées dans le respect total de la réglementation française et
              européenne en vigueur. Un gain de temps précieux : une seule visite suffit pour
              obtenir votre nouvelle carte grise <strong>et</strong> vos nouvelles plaques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-rouge text-white font-titre font-bold px-7 py-3.5 rounded-full hover:bg-red-700 transition-colors duration-200"
              >
                Nous contacter
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

          {/* Illustration plaque */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col items-center gap-6 border border-gray-100">
              <p className="text-gray-500 text-sm font-titre font-semibold uppercase tracking-wider">
                Exemple de plaque
              </p>
              {/* Plaque simulée */}
              <div className="flex items-center bg-white border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-xs">
                <div className="bg-bleu flex flex-col items-center justify-center px-2 py-2 text-white h-full">
                  <span className="text-yellow-300 text-lg">★</span>
                  <span className="text-white font-bold text-xs mt-1">F</span>
                </div>
                <div className="flex-1 text-center py-3">
                  <span className="font-bold text-2xl tracking-widest text-gray-900">
                    AB-123-CD
                  </span>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center px-2 py-2 text-gray-700 h-full text-xs border-l border-gray-300">
                  <span className="font-bold">31</span>
                  <span className="text-gray-400" style={{ fontSize: '8px' }}>
                    Occitanie
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs text-center">
                Format illustratif — vos plaques sont personnalisées selon votre immatriculation
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section fabrication rapide */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image gauche */}
          <div className="relative h-72 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <Image
              src="/plaque-page.jpg"
              alt="Fabrication de plaques d'immatriculation homologuées"
              fill
              className="object-contain p-6"
            />
          </div>

          {/* Texte droite */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Fabrication sur place
              </span>
            </div>
            <h2 className="font-titre font-extrabold text-gray-900 text-2xl md:text-3xl leading-tight">
              Fabrication rapide de plaques d&apos;immatriculation homologuées
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous réalisons vos plaques d&apos;immatriculation homologuées directement sur place
              avec un rendu propre, durable et parfaitement lisible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Grâce à notre équipement professionnel, la fabrication de votre paire de plaques ne
              prend que 5 minutes. Vous repartez immédiatement avec des plaques prêtes à être
              installées sur votre véhicule.
            </p>

            {/* Infos clés */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 flex-1">
                <span className="text-2xl">⏱️</span>
                <div>
                  <p className="text-xs text-gray-400 font-corps uppercase tracking-wider">Temps de fabrication</p>
                  <p className="font-titre font-extrabold text-gray-900 text-lg">5 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-rouge text-white rounded-2xl px-5 py-4 shadow-sm flex-1">
                <span className="text-2xl">💶</span>
                <div>
                  <p className="text-xs text-red-200 font-corps uppercase tracking-wider">Tarif</p>
                  <p className="font-titre font-extrabold text-white text-lg">25 € la paire</p>
                  <p className="text-red-200 text-xs">Rivets offerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section plaques roses */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte gauche */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Immatriculation provisoire
              </span>
            </div>
            <h2 className="font-titre font-extrabold text-gray-900 text-2xl md:text-3xl leading-tight">
              Plaques roses pour immatriculations provisoires
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous réalisons également la fabrication des nouvelles plaques roses destinées aux
              immatriculations provisoires, idéales pour les véhicules en attente
              d&apos;immatriculation définitive. Ces plaques respectent les formats et les exigences
              nécessaires pour circuler temporairement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Rapidité, conformité et prix attractifs : tout est pensé pour vous permettre de
              repartir sur la route en toute tranquillité.
            </p>
          </div>

          {/* Image droite */}
          <div className="relative h-64 lg:h-[360px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <Image
              src="/plaquerose.png"
              alt="Plaque rose immatriculation provisoire"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Section normes */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl">
              Normes et réglementation
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Toutes nos plaques respectent scrupuleusement la réglementation en vigueur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {normes.map((item) => (
              <div
                key={item.titre}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bleu/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-bleu" size={16} />
                  </div>
                  <h3 className="font-titre font-bold text-gray-900 text-sm">{item.titre}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Section info */}
      <SectionWrapper className="py-16 px-4 bg-bleu">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-titre font-extrabold text-white text-3xl">
            Obtenez vos plaques en une seule visite
          </h2>
          <p className="text-white/80 max-w-2xl">
            Lors de votre venue chez Soscartegrise pour votre carte grise, nous pouvons également
            fabriquer vos plaques d&apos;immatriculation sur place. Vous repartez avec tout ce qu&apos;il
            vous faut en une seule démarche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-bleu font-titre font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Prendre rendez-vous
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
