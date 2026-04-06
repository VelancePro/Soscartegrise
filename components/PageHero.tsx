'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  titre: string;
  sousTitre?: string;
  breadcrumb?: BreadcrumbItem[];
  couleur?: 'bleu' | 'rouge';
}

export default function PageHero({
  titre,
  sousTitre,
  breadcrumb,
  couleur = 'bleu',
}: PageHeroProps) {
  const bg = couleur === 'rouge' ? 'bg-rouge' : 'bg-bleu';

  return (
    <section className={`${bg} py-14 px-4`}>
      <div className="max-w-7xl mx-auto">
        {breadcrumb && (
          <motion.nav
            className="flex items-center gap-2 text-white/70 text-sm mb-4 font-corps"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.h1
          className="font-titre font-extrabold text-white text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {titre}
        </motion.h1>
        {sousTitre && (
          <motion.p
            className="text-white/80 text-lg mt-3 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sousTitre}
          </motion.p>
        )}
      </div>
    </section>
  );
}
