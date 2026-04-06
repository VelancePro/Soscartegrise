'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PrestationCardProps {
  icone: string;
  titre: string;
  description: string;
  href: string;
}

export default function PrestationCard({ icone, titre, description, href }: PrestationCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100 group cursor-pointer"
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-4xl">{icone}</div>
      <h3 className="font-titre font-bold text-gray-900 text-base">{titre}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={href}
        className="text-rouge font-titre font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
      >
        En savoir plus <span>→</span>
      </Link>
    </motion.div>
  );
}
