'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PointFortCardProps {
  icone: ReactNode;
  label: string;
  labelColor: string;
  texte: string;
  gradient: string;
  taille?: 'normal' | 'grand';
}

export default function PointFortCard({
  icone,
  label,
  labelColor,
  texte,
  gradient,
  taille = 'normal',
}: PointFortCardProps) {
  const ovalW = taille === 'grand' ? 'w-52' : 'w-44';
  const ovalH = taille === 'grand' ? 'h-64' : 'h-56';
  const iconSize = taille === 'grand' ? 68 : 64;

  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Ovale animé */}
      <motion.div
        className={`${ovalW} ${ovalH} rounded-[50%] flex items-center justify-center shadow-xl cursor-pointer`}
        style={{ background: gradient }}
        whileHover={{
          scale: 1.08,
          rotate: [0, -6, 6, -4, 4, 0],
          transition: {
            scale: { duration: 0.2 },
            rotate: { duration: 0.5, ease: 'easeInOut' },
          },
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {icone}
        </motion.div>
      </motion.div>

      {/* Texte */}
      <div className="flex flex-col gap-3">
        <span className={`${labelColor} font-titre font-bold text-sm uppercase tracking-wider drop-shadow-md`}>
          {label}
        </span>
        <p className="text-white text-sm leading-relaxed drop-shadow-sm">{texte}</p>
      </div>
    </div>
  );
}
