import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiShield, FiClock, FiUser, FiMessageSquare, FiFileText, FiCopy, FiRefreshCw, FiUnlock, FiEdit, FiGlobe } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';
import PermisAccordion from '@/components/PermisAccordion';

export const metadata: Metadata = {
  title: 'Permis de conduire — Soscartegrise Saint-Gaudens',
  description:
    "Toutes vos démarches permis de conduire à Saint-Gaudens : première demande, duplicata, renouvellement, récupération et changement d'état civil. Soscartegrise vous accompagne.",
};

const services = [
  {
    icone: FiFileText,
    titre: 'Première demande',
    description: "Demande de permis après réussite à l'examen du code ou de la conduite.",
  },
  {
    icone: FiCopy,
    titre: 'Duplicata',
    description: 'Remplacement en cas de perte, de vol ou de détérioration de votre permis.',
  },
  {
    icone: FiRefreshCw,
    titre: 'Renouvellement',
    description: 'Renouvellement de votre permis arrivé en fin de validité.',
  },
  {
    icone: FiUnlock,
    titre: 'Récupération',
    description: 'Demande suite à une suspension, une annulation ou une invalidation.',
  },
  {
    icone: FiEdit,
    titre: "Changement d'état civil",
    description: 'Mise à jour après un mariage, un divorce ou un changement de nom/prénom.',
  },
  {
    icone: FiGlobe,
    titre: 'Échange de permis étranger',
    description: 'Échange de votre permis étranger contre un permis de conduire français.',
  },
];

const engagements = [
  {
    icone: FiShield,
    titre: 'Rapides et sécurisées',
    description: 'Des démarches effectuées dans les règles, sans délai inutile.',
  },
  {
    icone: FiUser,
    titre: 'Assistance personnalisée',
    description: 'Un accompagnement adapté à votre situation spécifique.',
  },
  {
    icone: FiMessageSquare,
    titre: 'Communication claire',
    description: 'Vous êtes informé à chaque étape du traitement de votre dossier.',
  },
  {
    icone: FiClock,
    titre: 'Gain de temps',
    description: "Plus de stress ni de paperasse inutile — on s'occupe de tout.",
  },
];

export default function PermisConduitePage() {
  return (
    <>
      <PageHero
        titre="Permis de conduire"
        sousTitre="Simplifiez vos démarches, gagnez du temps."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Permis de conduire' },
        ]}
        couleur="bleu"
      />

      {/* Section intro */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texte gauche */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex">
              <span className="bg-bleu/10 text-bleu text-xs font-titre font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Démarches simplifiées
              </span>
            </div>
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl leading-tight">
              Vos démarches permis de conduire, gérées pour vous
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Les démarches administratives liées au permis de conduire peuvent rapidement devenir
              complexes et chronophages. Nous vous accompagnons dans toutes les étapes afin de vous
              offrir une expérience simple, claire et sereine.
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
              src="/permis-conduire-service.webp"
              alt="Démarches permis de conduire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Section nos services */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl">
              Nos services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Toutes les démarches liées à votre permis de conduire en un seul endroit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icone;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-bleu/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-bleu/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-bleu" size={20} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-titre font-extrabold text-gray-900 text-base">
                      {service.titre}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Section nos engagements */}
      <SectionWrapper className="py-20 px-4 bg-bleu">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titre font-extrabold text-white text-3xl md:text-4xl">
              Nos engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((eng, i) => {
              const Icon = eng.icone;
              return (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4 border border-white/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-titre font-extrabold text-white text-base">
                      {eng.titre}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{eng.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Section documents */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titre font-extrabold text-gray-900 text-3xl md:text-4xl">
              Documents à fournir
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Sélectionnez votre situation pour connaître les pièces justificatives nécessaires.
            </p>
          </div>
          <PermisAccordion />
        </div>
      </SectionWrapper>

      {/* CTA final */}
      <SectionWrapper className="py-16 px-4 bg-rouge">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-titre font-extrabold text-white text-3xl">
            Prêt à démarrer vos démarches ?
          </h2>
          <p className="text-white/80 max-w-2xl">
            Contactez-nous ou passez directement en agence à Saint-Gaudens. Notre équipe vérifie
            votre dossier et effectue toutes les démarches pour vous.
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
