import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

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
  metadataBase: new URL('https://www.soscartegrise.fr'),
  title: {
    default: 'Carte grise à Saint-Gaudens | Soscartegrise — Habilité État',
    template: '%s | Soscartegrise',
  },
  description:
    "Soscartegrise, votre spécialiste carte grise à Saint-Gaudens (31). Changement de titulaire, duplicata, carte grise étrangère. Évitez la préfecture, dossier traité en 10 minutes sur place.",
  keywords: [
    'carte grise Saint-Gaudens',
    'carte grise 31',
    'carte grise Toulouse',
    'certificat immatriculation Haute-Garonne',
    'carte grise habilité état',
    'changement de titulaire carte grise',
    'duplicata carte grise',
    'carte grise étrangère France',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Soscartegrise',
    title: 'Carte grise à Saint-Gaudens | Soscartegrise — Habilité État',
    description: "Soscartegrise, votre spécialiste carte grise à Saint-Gaudens (31). Habilité par l'État, dossier traité en 10 minutes.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Soscartegrise — Carte grise Saint-Gaudens' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carte grise à Saint-Gaudens | Soscartegrise',
    description: "Soscartegrise, votre spécialiste carte grise à Saint-Gaudens (31). Habilité par l'État.",
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  verification: { google: 'GOOGLE_SEARCH_CONSOLE_TOKEN' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KTHH9NPZ');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KB3Z67M0P" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-3KB3Z67M0P');` }} />
      </head>
      <body className="font-corps antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTHH9NPZ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
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
