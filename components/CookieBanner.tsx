'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-bleu-nuit text-white px-6 py-5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/90 leading-relaxed max-w-2xl">
          Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et mesurer nos performances (Google Analytics).
          En continuant, vous acceptez notre{' '}
          <Link href="/politique-confidentialite" className="underline text-white hover:text-rouge transition-colors">
            politique de confidentialité
          </Link>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/70 hover:text-white border border-white/30 hover:border-white/60 px-4 py-2 rounded-lg transition-all duration-200"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-sm font-titre font-bold bg-rouge hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all duration-200"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
