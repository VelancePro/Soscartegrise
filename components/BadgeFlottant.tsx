'use client';

import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';

export default function BadgeFlottant() {
  return (
    <motion.div
      className="absolute top-28 md:top-36 right-8 md:right-14 z-20"
      initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
      animate={{ opacity: 1, scale: 1, rotate: 3 }}
      transition={{ duration: 0.6, ease: 'backOut', delay: 0.4 }}
    >
      {/* Halo pulsant derrière le badge */}
      <motion.div
        className="absolute inset-0 rounded-[22px] bg-rouge"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Badge principal */}
      <motion.div
        className="relative bg-rouge text-white rounded-[22px] p-5 flex flex-col items-center gap-2 shadow-2xl w-28 md:w-32 cursor-default"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ rotate: 0, scale: 1.06 }}
      >
        {/* Icône avec rotation continue */}
        <motion.div
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <FiZap size={28} className="text-white drop-shadow" />
        </motion.div>

        <span className="font-titre font-extrabold text-sm md:text-base text-center leading-tight">
          Service en<br />10 min
        </span>
      </motion.div>
    </motion.div>
  );
}
