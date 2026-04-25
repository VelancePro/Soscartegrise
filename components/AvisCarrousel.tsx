'use client';

import { FaStar, FaGoogle } from 'react-icons/fa';

interface Avis {
  nom: string;
  texte: string;
  note: number;
}

const avis: Avis[] = [
  {
    nom: 'Hugo Métivier',
    texte: 'Comment vous dire ?! SIMPLE, RAPIDE et EFFICACE ! A partir du moment où votre dossier est complet, la carte grise arrive chez vous sous 48h à 72h. J\'ai fais 2 cartes grises chez eux sans aucun accroc.',
    note: 5,
  },
  {
    nom: 'Patrick Ferdinand',
    texte: 'Patricia est non seulement charmante, mais très efficace, même dans des cas difficiles comme j\'ai pu en connaître avec deux véhicules. Je recommande vivement.',
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

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400" size={14} />
      ))}
    </div>
  );
}

function AvisCard({ item }: { item: Avis }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3 border border-gray-100 flex-shrink-0"
      style={{ width: 320 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-bleu text-white flex items-center justify-center font-titre font-bold text-sm flex-shrink-0">
          {item.nom.charAt(0)}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-titre font-semibold text-sm text-gray-900 leading-tight">{item.nom}</p>
          <StarRating />
        </div>
        <FaGoogle className="text-gray-300 ml-auto" size={15} />
      </div>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        &ldquo;{item.texte}&rdquo;
      </p>
    </div>
  );
}

export default function AvisCarrousel() {
  const track = [...avis, ...avis];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative overflow-hidden">
        {/* Fondu bords */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }}
        />

        {/* Track */}
        <div className="flex gap-5 marquee-track" style={{ width: 'max-content' }}>
          {track.map((item, i) => (
            <AvisCard key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
