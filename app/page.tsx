import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiShield, FiZap, FiCheckCircle, FiFileText, FiPhone, FiExternalLink, FiMapPin, FiClock } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import PointFortCard from '@/components/PointFortCard';
import { FaStar } from 'react-icons/fa';
import PrestationCard from '@/components/PrestationCard';
import AvisCarrousel from '@/components/AvisCarrousel';
import CTABanner from '@/components/CTABanner';
import DocumentCard from '@/components/DocumentCard';
import SectionWrapper from '@/components/SectionWrapper';
import BadgeFlottant from '@/components/BadgeFlottant';
import PrestationImageCard from '@/components/PrestationImageCard';
import CarteFrance from '@/components/CarteFrance';

export const metadata: Metadata = {
  title: 'Soscartegrise — Carte grise à Saint-gaudens | Habilité État',
  description:
    'Soscartegrise, votre spécialiste agréé de la carte grise à Saint-gaudens et en Haute-Garonne. Habilité par l\'État. Certificat provisoire en 48h-72h.',
  openGraph: {
    title: 'Soscartegrise — Carte grise à Saint-gaudens | Habilité État',
    description:
      'Soscartegrise, votre spécialiste agréé de la carte grise à Saint-gaudens et en Haute-Garonne.',
  },
};

const prestations = [
  {
    icone: '🔄',
    titre: 'Changement de titulaire',
    description: 'Achat ou vente d\'un véhicule ? Nous gérons le transfert de carte grise en toute simplicité.',
    href: '/prestations#changement-titulaire',
  },
  {
    icone: '📍',
    titre: 'Changement d\'adresse',
    description: 'Vous avez déménagé ? Mettez à jour votre carte grise rapidement.',
    href: '/prestations#changement-adresse',
  },
  {
    icone: '📋',
    titre: 'Déclaration de cession',
    description: 'Protégez-vous lors de la vente de votre véhicule avec notre service de déclaration.',
    href: '/prestations#declaration-cession',
  },
  {
    icone: '🔁',
    titre: 'Demande de duplicata',
    description: 'Carte grise perdue, volée ou détériorée ? Nous traitons votre demande en urgence.',
    href: '/prestations#duplicata',
  },
  {
    icone: '🌍',
    titre: 'Carte grise étrangère',
    description: 'Immatriculation de véhicule étranger en France, nous vous guidons pas à pas.',
    href: '/prestations#carte-grise-etrangere',
  },
  {
    icone: '🪪',
    titre: 'Démarches permis de conduire',
    description: 'Renouvellement, échange de permis étranger, perte ou vol — nous prenons en charge.',
    href: '/prestations#permis-conduire',
  },
];

const pointsForts = [
  {
    icone: <FiZap className="text-rouge" size={36} />,
    titre: 'Rapidité',
    texte: 'Votre dossier traité en moins de 10 minutes sur place',
  },
  {
    icone: <FiCheckCircle className="text-rouge" size={36} />,
    titre: 'Habilitation État',
    texte: 'Société agréée, vos démarches sont 100 % légales et sécurisées',
  },
  {
    icone: <FiShield className="text-rouge" size={36} />,
    titre: 'Écoute',
    texte: 'Un interlocuteur dédié, des réponses claires à chaque étape',
  },
  {
    icone: <FiFileText className="text-rouge" size={36} />,
    titre: 'Proximité',
    texte: 'Basé à Saint-Gaudens, nous connaissons les spécificités locales',
  },
];

const documents = [
  {
    titre: 'Certificat de cession',
    cerfa: 'CERFA 15776*01',
    fichier: '/docs/carte-grise-Cession.pdf',
    fallbackUrl: 'https://www.service-public.fr/particuliers/vosdroits/R11555',
  },
  {
    titre: "Demande de certificat d'immatriculation",
    cerfa: 'CERFA 13750*07',
    fichier: '/docs/carte-grise-CERFA_DEMANDE_D_IMMATRICULATION.pdf',
    fallbackUrl: 'https://www.service-public.fr/particuliers/vosdroits/R11993',
  },
  {
    titre: 'Mandat',
    cerfa: 'CERFA 13757*03',
    fichier: '/docs/carte-grise-Mandat.pdf',
    fallbackUrl: 'https://www.service-public.fr/particuliers/vosdroits/R39696',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/enseigne.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        {/* Gradient overlay — sombre à gauche, léger à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* Badge flottant — droite, un peu plus bas */}
        <BadgeFlottant />

        {/* Contenu — aligné en bas à gauche */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 md:pb-24 pt-40">

          {/* Badge habilitation */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-titre font-semibold px-4 py-2 rounded-full mb-6">
            <FiShield size={13} className="text-yellow-300" />
            Habilité par l&apos;État
          </div>

          {/* Titre massif */}
          <h1 className="font-titre font-extrabold leading-none mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="text-bleu">SOS </span>
              <span className="text-white">CARTE </span>
              <span className="text-rouge">GRISE</span>
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-white/80 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            Évitez la préfecture. Recevez votre certificat d&apos;immatriculation en 48h à 72h,
            dossier traité en 10 minutes sur place.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-rouge text-white font-titre font-bold px-8 py-4 rounded-xl text-base hover:bg-red-700 transition-all duration-200 shadow-xl hover:shadow-rouge/30 hover:-translate-y-0.5"
            >
              <FiPhone size={18} />
              Contactez-nous
            </Link>
            <Link
              href="/prestations"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-titre font-bold px-8 py-4 rounded-xl text-base hover:bg-white hover:text-gray-900 transition-all duration-200 backdrop-blur-sm"
            >
              Nos prestations
            </Link>
          </div>

          {/* Badges bas */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { icone: '✅', texte: 'Habilité État' },
              { icone: '📄', texte: 'Cerfa inclus' },
              { icone: '⭐', texte: '5/5 sur Google' },
            ].map((badge) => (
              <div
                key={badge.texte}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-corps font-medium px-4 py-2 rounded-full"
              >
                <span>{badge.icone}</span>
                <span>{badge.texte}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — PRÉSENTATION ===== */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl leading-tight">
              SERVICE CARTE GRISE
            </h2>
            <p className="font-titre font-semibold text-rouge text-xl md:text-2xl">
              Simple, rapide, sécurisé
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous prenons en charge toutes les démarches de carte grise : immatriculation de
              véhicule neuf, d&apos;occasion ou de collection, changement de titulaire, modification
              d&apos;adresse, demande de duplicata ou encore déclaration de cession. Habilité et
              agréé par l&apos;État, nous traitons votre dossier immédiatement, sur place pour que
              vous receviez votre certificat d&apos;immatriculation dans les meilleurs délais.
            </p>
            <Link
              href="/contact"
              className="self-start bg-rouge text-white font-titre font-bold px-7 py-3.5 rounded-full hover:bg-red-700 transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </div>
          <div className="relative h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/carte-grise-presentation.webp"
              alt="Soscartegrise — Spécialiste carte grise à Saint-Gaudens"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ===== SECTION 3 — PRESTATIONS ===== */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Services
            </span>
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl mt-4">
              Nos prestations
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Passez la souris sur chaque service pour en savoir plus.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <PrestationImageCard
              image="/carte-grise-service.webp"
              titre="Carte grise"
              texteHover="Alliant écoute, proximité et rapidité, nous facilitons toutes vos démarches en toute confiance."
              href="/carte-grise"
            />
            <PrestationImageCard
              image="/permis-conduire-service.webp"
              titre="Renouvellement de permis de conduire"
              texteHover="Votre permis arrive à expiration, est abîmé ou perdu ? SOS Carte Grise vous accompagne dans toutes les démarches de renouvellement. Plus besoin de vous déplacer en préfecture : nous prenons en charge votre demande rapidement, en toute simplicité, et avec l'assurance d'un service agréé par l'État. Gagnez du temps, évitez les erreurs, et recevez votre nouveau permis en toute sérénité."
              href="/permis-conduire"
            />
            <PrestationImageCard
              image="/plaque-immatriculation-service.jpg"
              titre="Fabrication de plaques d'immatriculation"
              texteHover="Besoin de nouvelles plaques ? SOS Carte Grise fabrique vos plaques d'immatriculation sur place, aux normes en vigueur et prêtes en quelques minutes. Que ce soit pour un changement, une perte ou une plaque endommagée, nous vous garantissons un service rapide, homologué et de qualité. Voiture, utilitaire : vos plaques sont prêtes à poser en un rien de temps !"
              href="/plaques"
            />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/prestations"
              className="inline-block bg-bleu text-white font-titre font-bold px-8 py-3.5 rounded-full hover:bg-blue-800 transition-colors duration-200"
            >
              Voir toutes nos prestations
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== SECTION 4 — POINTS FORTS ===== */}
      <SectionWrapper className="relative py-24 px-4 overflow-hidden">
        {/* Photo de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/serrage-de-main.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Filtre sombre */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-titre font-extrabold text-white text-3xl md:text-4xl uppercase tracking-wide">
              Pourquoi choisir Soscartegrise ?
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Votre satisfaction étant placée au cœur de nos préoccupations, nous vous réservons un bon accueil et vous assurons une prise en charge rapide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Écoute */}
            <PointFortCard
              gradient="linear-gradient(145deg, #a855f7, #ec4899)"
              icone={<FaHandshake size={64} className="text-white drop-shadow-lg" />}
              label="L'écoute"
              labelColor="text-white"
              texte="Parce que chaque client est unique, nous prenons le temps de vous écouter attentivement pour comprendre vos besoins et proposons la solution la mieux adaptée. Nous restons à votre disposition pour répondre à toutes vos questions et vous accompagner pas à pas, avec patience et bienveillance."
            />

            {/* Proximité */}
            <div className="md:mt-[-2rem]">
              <PointFortCard
                gradient="linear-gradient(145deg, #06b6d4, #3b82f6)"
                icone={<FiMapPin size={68} className="text-white drop-shadow-lg" strokeWidth={1.5} />}
                label="La proximité au cœur de notre service"
                labelColor="text-white"
                texte="Chez SOS CARTE GRISE, la proximité n'est pas qu'une promesse, c'est notre façon de travailler au quotidien. Présents localement et à l'écoute de vos besoins, nous vous accompagnons dans toutes vos démarches administratives, avec simplicité, rapidité et humanité. Un service proche de chez vous, proche de vous."
                taille="grand"
              />
            </div>

            {/* Service rapide */}
            <PointFortCard
              gradient="linear-gradient(145deg, #f97316, #ec4899)"
              icone={<FiClock size={64} className="text-white drop-shadow-lg" strokeWidth={1.5} />}
              label="Un service rapide et efficace"
              labelColor="text-white"
              texte="Ne perdez plus de temps avec les démarches administratives ! Chez SOS CARTE GRISE, nous traitons vos démarches en un temps record. Grâce à notre expertise et à notre agrément officiel, vos démarches sont simplifiées et finalisées rapidement. Rapide, fiable, sans stress."
            />

          </div>
        </div>
      </SectionWrapper>

      {/* ===== SECTIONS 5+6 — CARTE + DOCUMENTS ===== */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Titres en 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="text-center">
              <h2 className="font-titre font-extrabold text-rouge text-2xl md:text-3xl uppercase tracking-wide">
                Prix du cheval fiscal
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-titre font-extrabold text-bleu text-2xl md:text-3xl uppercase tracking-wide">
                Documents à télécharger
              </h2>
            </div>
          </div>

          {/* Contenu 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Gauche — Carte */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <CarteFrance />
            </div>

            {/* Droite — Documents (même hauteur que la carte) */}
            <div className="flex flex-col gap-5">
              {documents.map((doc) => (
                <div
                  key={doc.titre}
                  className="bg-rouge/15 border border-rouge/20 rounded-2xl p-6 flex flex-col gap-3 flex-1"
                >
                  <h3 className="font-titre font-extrabold text-rouge text-base uppercase tracking-wide text-center">
                    {doc.titre} ({doc.cerfa})
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {doc.titre === 'Certificat de cession'
                      ? 'Optez pour une déclaration de cession en ligne.'
                      : doc.titre === "Demande de certificat d'immatriculation"
                      ? "Suivez ces étapes pour obtenir facilement votre certificat d'immatriculation."
                      : 'Votre professionnel automobile se charge des démarches administratives.'}
                  </p>
                  <div className="flex justify-center mt-auto">
                    <a
                      href={doc.fichier}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="bg-bleu text-white font-titre font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-bleu-nuit transition-colors duration-200"
                    >
                      Télécharger le document
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton simulateur — en dessous des 2 colonnes */}
          <div className="flex justify-center mt-10">
            <a
              href="https://www.service-public.fr/simulateur/calcul/cout-certificat-immatriculation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-bleu-nuit text-white font-titre font-bold px-10 py-4 rounded-full hover:bg-bleu transition-colors duration-200 uppercase tracking-widest text-sm shadow-lg"
            >
              <FiExternalLink size={16} />
              Simulateur de prix
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== SECTION 7 — AVIS ===== */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-rouge/10 text-rouge text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl mt-4">
              Ils nous font confiance
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>
              <span className="font-titre font-bold text-gray-900 text-xl">5/5</span>
              <span className="text-gray-500 text-sm">— basée sur +10 avis Google</span>
            </div>
          </div>
          <AvisCarrousel />
          <div className="text-center mt-10">
            <Link
              href="/avis"
              className="inline-block border-2 border-rouge text-rouge font-titre font-bold px-8 py-3.5 rounded-full hover:bg-rouge hover:text-white transition-colors duration-200"
            >
              Voir tous les avis
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== SECTION 8 — CTA FINAL ===== */}
      <CTABanner />
    </>
  );
}
