import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.soscartegrise31.fr'),
  title: {
    default: 'Soscartegrise — Carte grise à Saint-gaudens | Habilité État',
    template: '%s | Soscartegrise',
  },
  description:
    'Soscartegrise, votre spécialiste agréé de la carte grise à Saint-gaudens et en Haute-Garonne. Habilité par l\'État. Dossier traité en 10 minutes.',
  keywords: [
    'carte grise',
    'Saint-Gaudens',
    'Haute-Garonne',
    'certificat immatriculation',
    'changement titulaire',
    'duplicata carte grise',
    'habilité état',
    'Occitanie',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Soscartegrise',
    title: 'Soscartegrise — Carte grise à Saint-gaudens | Habilité État',
    description:
      'Soscartegrise, votre spécialiste agréé de la carte grise à Saint-gaudens et en Haute-Garonne.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soscartegrise — Carte grise à Saint-gaudens',
    description:
      'Soscartegrise, votre spécialiste agréé de la carte grise à Saint-gaudens et en Haute-Garonne.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-corps antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <a
          href="tel:0619923340"
          aria-label="Appeler Soscartegrise"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-rouge text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
