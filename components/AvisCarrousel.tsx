'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGoogle } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Avis {
  nom: string;
  texte: string;
  note: number;
}

const avis: Avis[] = [
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
        <FaStar key={i} className="text-yellow-400" size={15} />
      ))}
    </div>
  );
}

const CARD_WIDTH = 340;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function AvisCarrousel() {
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = avis.length;

  // Défile automatiquement de gauche à droite (new cards enter from right)
  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOffset((prev) => prev - STEP);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOffset((prev) => prev + STEP);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [next]);

  // Calcul de l'index actif
  const activeIndex = Math.abs(Math.round(offset / STEP)) % total;

  return (
    <div className="relative">
      {/* Bandes de fondu sur les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

      {/* Track infini */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: offset }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            setIsAnimating(false);
            // Reset infini : quand on dépasse les bornes, on repositionne silencieusement
            setOffset((prev) => {
              if (prev <= -(total * STEP)) return 0;
              if (prev >= STEP) return -((total - 1) * STEP);
              return prev;
            });
          }}
        >
          {/* Double le tableau pour effet infini */}
          {[...avis, ...avis].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100 flex-shrink-0"
              style={{ width: CARD_WIDTH }}
            >
              <div className="flex items-center justify-between">
                <StarRating note={item.note} />
                <FaGoogle className="text-gray-300" size={16} />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1">
                &ldquo;{item.texte}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-bleu text-white flex items-center justify-center font-titre font-bold text-sm flex-shrink-0">
                  {item.nom.charAt(0)}
                </div>
                <div>
                  <p className="font-titre font-semibold text-sm text-gray-900">{item.nom}</p>
                  <p className="text-xs text-gray-400">Avis Google</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Contrôles */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-rouge hover:text-rouge transition-colors"
          aria-label="Avis précédent"
        >
          <FiChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {avis.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsAnimating(false); setOffset(-(i * STEP)); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-rouge w-6' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Aller à l'avis ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-rouge hover:text-rouge transition-colors"
          aria-label="Avis suivant"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
