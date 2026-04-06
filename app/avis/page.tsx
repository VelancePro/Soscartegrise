import type { Metadata } from 'next';
import { FaStar, FaGoogle } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Avis clients — Soscartegrise31 Saint-Gaudens',
  description:
    'Découvrez les avis de nos clients satisfaits. Note de 5/5 sur Google. Avis certifiés pour Soscartegrise31 à Saint-Gaudens.',
};

interface AvisClient {
  nom: string;
  texte: string;
  note: number;
  date?: string;
}

const tousLesAvis: AvisClient[] = [
  {
    nom: 'Hugo Métivier',
    texte: 'Comment vous dire ?! SIMPLE, RAPIDE et EFFICACE ! A partir du moment où votre dossier est complet, la carte grise arrive chez vous sous 48h à 72h. J\'ai fais 2 cartes grises chez eux sans aucun accroc. Evitez les organismes par internet et allez à SOS Carte Grise car la patronne (je présume) est vraiment efficace.',
    note: 5,
  },
  {
    nom: 'Patrick Ferdinand',
    texte: 'Patricia est non seulement charmante, mais très efficace, même dans des cas difficiles comme j\'ai pu en connaître avec deux véhicules. Une super solution quand on ne veut pas se prendre la tête avec l\'Administration et ses sites Internet souvent défaillants ! Je recommande vivement.',
    note: 5,
  },
  {
    nom: 'Yann Casse',
    texte: 'Rapide, efficace, professionnel, et sympathique — que demander de plus.',
    note: 5,
  },
  {
    nom: 'Stéphane Leclair',
    texte: 'La demoiselle a toujours le sourire agréable, vous aide dans les démarches. J\'ai eu à faire plusieurs à ces services et toujours aussi gentil.',
    note: 5,
  },
  {
    nom: 'Emilie R.',
    texte: 'Professionnelle et très aimable. Rien à dire. Je recommande 👌',
    note: 5,
  },
  {
    nom: 'Fred',
    texte: 'Très bien pour faire sa carte grise rapidement.',
    note: 5,
  },
  {
    nom: 'Said Aouam',
    texte: 'Positif — Ponctualité, Qualité, Professionnalisme, Prix.',
    note: 5,
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < note ? 'text-yellow-400' : 'text-gray-200'}
          size={14}
        />
      ))}
    </div>
  );
}

export default function AvisPage() {
  return (
    <>
      <PageHero
        titre="Avis clients"
        sousTitre="Ce que disent nos clients sur notre service de carte grise à Saint-Gaudens."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Avis clients' }]}
        couleur="bleu"
      />

      {/* Note globale */}
      <SectionWrapper className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 text-sm font-titre font-semibold px-5 py-2 rounded-full">
            <FiCheckCircle size={16} />
            Avis certifiés Google
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={32} />
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-titre font-extrabold text-gray-900 text-6xl">5</span>
              <span className="text-gray-500 text-xl">/5</span>
            </div>
            <p className="text-gray-500">Basé sur +10 avis clients Google</p>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaGoogle className="text-blue-500" size={18} />
            <span>Avis vérifiés sur Google My Business</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Grille avis */}
      <SectionWrapper className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-titre font-extrabold text-gray-900 text-2xl md:text-3xl text-center mb-10">
            Tous les avis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tousLesAvis.map((avis, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <StarRating note={avis.note} />
                  <FaGoogle className="text-gray-300" size={18} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic flex-1">
                  &ldquo;{avis.texte}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-bleu text-white flex items-center justify-center font-titre font-bold text-sm flex-shrink-0">
                    {avis.nom.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-titre font-semibold text-sm text-gray-900">{avis.nom}</p>
                    {avis.date && (
                      <p className="text-xs text-gray-400">{avis.date}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
