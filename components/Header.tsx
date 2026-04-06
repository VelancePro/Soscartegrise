'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/carte-grise', label: 'Carte grise' },
  { href: '/plaques', label: "Plaques d'immatriculation" },
  { href: '/avis', label: 'Avis' },
  { href: '/contact', label: 'Contact' },
];

const carteGriseLinks = [
  { href: '/carte-grise#changement-titulaire', label: 'Changement de titulaire' },
  { href: '/carte-grise#changement-adresse', label: "Changement d'adresse" },
  { href: '/carte-grise#declaration-cession', label: 'Déclaration de cession' },
  { href: '/carte-grise#achat-professionnel', label: "Déclaration d'achat professionnel" },
  { href: '/carte-grise#duplicata', label: 'Demande de duplicata' },
  { href: '/carte-grise#certificat-ww', label: "Certificat provisoire d'immatriculation WW" },
  { href: '/carte-grise#collection', label: 'Véhicule de collection' },
  { href: '/carte-grise#vehicule-etranger', label: 'Première immatriculation en France' },
  { href: '/carte-grise#caracteristiques-techniques', label: 'Changement de caractéristiques techniques' },
];

const permisLinks = [
  { href: '/permis-conduire#reussite', label: "Réussite à l'examen" },
  { href: '/permis-conduire#duplicata', label: 'Demande de duplicata' },
  { href: '/permis-conduire#recuperation', label: 'Demande de récupération' },
  { href: '/permis-conduire#renouvellement', label: 'Demande de renouvellement' },
  { href: '/permis-conduire#etat-civil', label: "Changement d'état civil" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [carteGriseOpen, setCarteGriseOpen] = useState(false);
  const [carteGriseOpenMobile, setCarteGriseOpenMobile] = useState(false);
  const carteGriseRef = useRef<HTMLDivElement>(null);
  const [permisOpen, setPermisOpen] = useState(false);
  const [permisOpenMobile, setPermisOpenMobile] = useState(false);
  const permisRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setPermisOpenMobile(false);
    setCarteGriseOpenMobile(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (permisRef.current && !permisRef.current.contains(e.target as Node)) {
        setPermisOpen(false);
      }
      if (carteGriseRef.current && !carteGriseRef.current.contains(e.target as Node)) {
        setCarteGriseOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Barre tricolore */}
      <div className="h-[3px] w-full flex fixed top-0 left-0 z-50">
        <div className="flex-1 bg-bleu" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-rouge" />
      </div>

      <header
        className={`fixed top-[3px] left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[100px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo Soscartegrise"
                width={180}
                height={70}
                className="h-[90px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Accueil */}
              <Link
                href="/"
                className={`font-titre font-semibold text-sm transition-colors duration-200 hover:text-rouge ${
                  pathname === '/' ? 'text-rouge border-b-2 border-rouge pb-0.5' : 'text-gray-700'
                }`}
              >
                Accueil
              </Link>

              {/* Carte grise — dropdown */}
              <div
                ref={carteGriseRef}
                className="relative"
                onMouseEnter={() => setCarteGriseOpen(true)}
                onMouseLeave={() => setCarteGriseOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-titre font-semibold text-sm transition-colors duration-200 hover:text-rouge ${
                    pathname === '/carte-grise' ? 'text-rouge border-b-2 border-rouge pb-0.5' : 'text-gray-700'
                  }`}
                >
                  Carte grise
                  <FiChevronDown size={14} className={`transition-transform duration-200 ${carteGriseOpen ? 'rotate-180' : ''}`} />
                </button>

                {carteGriseOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-80">
                      <Link
                        href="/carte-grise"
                        className="block px-4 py-2.5 text-xs font-titre font-bold text-bleu uppercase tracking-wider hover:bg-gray-50 transition-colors"
                      >
                        Tous les services →
                      </Link>
                      <div className="h-px bg-gray-100 mx-4 mb-1" />
                      {carteGriseLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-rouge transition-colors font-corps"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Permis de conduire — dropdown */}
              <div
                ref={permisRef}
                className="relative"
                onMouseEnter={() => setPermisOpen(true)}
                onMouseLeave={() => setPermisOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-titre font-semibold text-sm transition-colors duration-200 hover:text-rouge ${
                    pathname === '/permis-conduire' ? 'text-rouge border-b-2 border-rouge pb-0.5' : 'text-gray-700'
                  }`}
                >
                  Permis de conduire
                  <FiChevronDown size={14} className={`transition-transform duration-200 ${permisOpen ? 'rotate-180' : ''}`} />
                </button>

                {permisOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-72">
                      <Link
                        href="/permis-conduire"
                        className="block px-4 py-2.5 text-xs font-titre font-bold text-bleu uppercase tracking-wider hover:bg-gray-50 transition-colors"
                      >
                        Tous les services →
                      </Link>
                      <div className="h-px bg-gray-100 mx-4 mb-1" />
                      {permisLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-rouge transition-colors font-corps"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Autres liens */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-titre font-semibold text-sm transition-colors duration-200 hover:text-rouge ${
                    pathname === link.href
                      ? 'text-rouge border-b-2 border-rouge pb-0.5'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Téléphone + burger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0619923340"
                className="hidden sm:flex items-center gap-2 bg-rouge text-white font-titre font-bold text-sm px-4 py-2 rounded-full hover:bg-red-800 transition-colors duration-200"
              >
                <FiPhone className="text-base" />
                06 19 92 33 40
              </a>

              {/* Burger mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-rouge transition-colors"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[800px] border-t border-gray-100' : 'max-h-0'
          }`}
        >
          <nav className="bg-white px-4 py-4 flex flex-col gap-1">
            {/* Accueil */}
            <Link
              href="/"
              className={`font-titre font-semibold text-sm py-3 px-4 rounded-lg transition-colors duration-200 ${
                pathname === '/' ? 'bg-rouge text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-rouge'
              }`}
            >
              Accueil
            </Link>

            {/* Carte grise mobile */}
            <button
              onClick={() => setCarteGriseOpenMobile(!carteGriseOpenMobile)}
              className={`flex items-center justify-between font-titre font-semibold text-sm py-3 px-4 rounded-lg transition-colors duration-200 ${
                pathname === '/carte-grise' ? 'bg-rouge text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-rouge'
              }`}
            >
              Carte grise
              <FiChevronDown size={14} className={`transition-transform duration-200 ${carteGriseOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {carteGriseOpenMobile && (
              <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-bleu/20 pl-3">
                {carteGriseLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-rouge text-sm py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors font-corps"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Permis de conduire mobile */}
            <button
              onClick={() => setPermisOpenMobile(!permisOpenMobile)}
              className={`flex items-center justify-between font-titre font-semibold text-sm py-3 px-4 rounded-lg transition-colors duration-200 ${
                pathname === '/permis-conduire'
                  ? 'bg-rouge text-white'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-rouge'
              }`}
            >
              Permis de conduire
              <FiChevronDown size={14} className={`transition-transform duration-200 ${permisOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {permisOpenMobile && (
              <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-bleu/20 pl-3">
                {permisLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-rouge text-sm py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors font-corps"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Autres liens */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-titre font-semibold text-sm py-3 px-4 rounded-lg transition-colors duration-200 ${
                  pathname === link.href
                    ? 'bg-rouge text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-rouge'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0619923340"
              className="flex items-center gap-2 bg-rouge text-white font-titre font-bold text-sm px-4 py-3 rounded-lg mt-2 justify-center"
            >
              <FiPhone />
              06 19 92 33 40
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer pour le header fixe */}
      <div className="h-[103px]" />
    </>
  );
}
