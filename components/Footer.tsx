import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';

const mainLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/carte-grise', label: 'Carte grise' },
  { href: '/permis-conduire', label: 'Permis de conduire' },
  { href: '/plaques', label: "Plaques d'immatriculation" },
  { href: '/avis', label: 'Avis clients' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-bleu-nuit text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Colonne 1 — Logo + description + réseaux */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Logo Soscartegrise"
              width={270}
              height={105}
              className="h-[90px] w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Soscartegrise, votre spécialiste agréé pour toutes vos démarches de certificat
              d&apos;immatriculation. Habilité par l&apos;État, rapide et fiable.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://share.google/DJ0en1qq93ESjgewW"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avis Google Soscartegrise"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGoogle size={22} />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Liens rapides */}
          <div>
            <h3 className="font-titre font-bold text-white text-base mb-5 uppercase tracking-wider">
              Liens rapides
            </h3>
            <ul className="flex flex-col gap-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Coordonnées */}
          <div>
            <h3 className="font-titre font-bold text-white text-base mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-rouge mt-0.5 flex-shrink-0" size={18} />
                <address className="not-italic text-gray-300 text-sm">
                  17 Boulevard Charles de Gaulle<br />
                  31800 Saint-Gaudens
                </address>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-rouge flex-shrink-0" size={18} />
                <div className="flex flex-col gap-1">
                  <a href="tel:0581666900" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Tél. : 05 81 666 900
                  </a>
                  <a href="tel:0619923340" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Port. : 06 19 92 33 40
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-rouge flex-shrink-0" size={18} />
                <a
                  href="mailto:soscartegrise31@hotmail.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  soscartegrise31@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-rouge mt-0.5 flex-shrink-0" size={18} />
                <div className="text-gray-300 text-sm flex flex-col gap-1">
                  <span>Lun–Ven : 8h30–12h00 | 14h00–17h00</span>
                  <span>Mercredi : 8h30–12h00 (fermé l&apos;après-midi)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bande rouge basse */}
      <div className="bg-rouge py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-xs">
          <span>© {new Date().getFullYear()} Soscartegrise — Tous droits réservés</span>
          <a
            href="https://velance.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Image src="/icone-velance.png" alt="Velance" width={32} height={32} className="h-8 w-auto" />
            <span className="text-white/90">Designed by velance</span>
          </a>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:underline">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
