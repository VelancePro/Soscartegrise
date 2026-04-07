import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Soscartegrise — 17 Bd Charles de Gaulle, Saint-Gaudens",
  description: "Contactez Soscartegrise au 05 81 666 900 ou 06 19 92 33 40. 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens. Lun–Ven 8h30–12h | 14h–17h.",
  openGraph: {
    title: "Contact Soscartegrise — Saint-Gaudens",
    description: "Contactez Soscartegrise au 05 81 666 900. 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
