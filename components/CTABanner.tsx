'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

interface CTABannerProps {
  titre?: string;
  sousTitre?: string;
}

export default function CTABanner({
  titre = 'Besoin d\'une carte grise rapidement ?',
  sousTitre = 'Contactez-nous dès maintenant, nous traitons votre dossier en 10 minutes.',
}: CTABannerProps) {
  return (
    <section className="bg-rouge py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-titre font-extrabold text-white text-3xl md:text-4xl">{titre}</h2>
        <p className="text-red-100 text-lg max-w-xl">{sousTitre}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="tel:0581666900"
            className="flex items-center justify-center gap-2 bg-white text-rouge font-titre font-bold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-base shadow-lg"
          >
            <FiPhone />
            Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-titre font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-200 text-base"
          >
            <FiMail />
            Formulaire de contact
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
