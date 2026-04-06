'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface PrestationImageCardProps {
  image: string;
  titre: string;
  texteHover: string;
  href?: string;
}

export default function PrestationImageCard({
  image,
  titre,
  texteHover,
  href,
}: PrestationImageCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden border-2 border-bleu/30 shadow-lg cursor-pointer flex-1 min-h-[380px] md:min-h-[440px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient permanent en bas */}
      <div className="absolute inset-0 bg-gradient-to-t from-rouge/80 via-rouge/20 to-transparent" />

      {/* Overlay sombre au hover */}
      <motion.div
        className="absolute inset-0 bg-bleu-nuit/60"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Titre permanent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 z-10"
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? 10 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3 className="font-titre font-extrabold text-white text-xl text-center drop-shadow-lg">
          {titre}
        </h3>
      </motion.div>

      {/* Texte hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col p-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Titre + texte scrollable */}
            <div className="flex-1 flex flex-col justify-center overflow-y-auto pr-1">
              <h3 className="font-titre font-extrabold text-white text-lg text-center mb-3 drop-shadow-lg">
                {titre}
              </h3>
              <p className="text-white/90 text-sm text-center leading-relaxed">
                {texteHover}
              </p>
            </div>

            {/* Bouton en bas à droite */}
            {href && (
              <div className="flex justify-end mt-4">
                <Link
                  href={href}
                  className="inline-block bg-white text-bleu font-titre font-bold text-sm px-5 py-2.5 rounded-full hover:bg-rouge hover:text-white transition-colors duration-200 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  En savoir plus →
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
