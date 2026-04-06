'use client';

import { useState, useEffect } from 'react';
import { FiChevronDown, FiRepeat, FiCopy, FiMapPin, FiFileText, FiBriefcase, FiAlertCircle, FiAward, FiGlobe, FiSliders } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface DocSection {
  label?: string;
  items: string[];
}

interface Service {
  id: string;
  titre: string;
  description: string;
  prix: number;
  icone: IconType;
  documents: DocSection[];
}

const services: Service[] = [
  {
    id: 'changement-titulaire',
    titre: 'Changement de titulaire',
    description: "Transfert de propriété lors de l'achat d'un véhicule.",
    prix: 25,
    icone: FiRepeat,
    documents: [
      {
        items: [
          'Carte grise barrée et signée',
          'Certificat de cession (Cerfa 0115776)',
          "Déclaration d'achat si véhicule vendu par un professionnel de l'automobile",
          'Copie du contrôle technique – 6 mois (véhicule de plus de 4 ans)',
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          'Permis de conduire',
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
        ],
      },
    ],
  },
  {
    id: 'duplicata',
    titre: 'Duplicata de carte grise',
    description: 'Remplacement en cas de perte, vol ou détérioration.',
    prix: 20,
    icone: FiCopy,
    documents: [
      {
        items: [
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          'Contrôle technique en cours de validité',
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
        ],
      },
    ],
  },
  {
    id: 'changement-adresse',
    titre: "Changement d'adresse",
    description: "Mise à jour de l'adresse sur le certificat d'immatriculation.",
    prix: 20,
    icone: FiMapPin,
    documents: [
      {
        items: [
          'Carte grise',
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
        ],
      },
    ],
  },
  {
    id: 'declaration-cession',
    titre: 'Déclaration de cession',
    description: "Le vendeur doit déclarer la cession du véhicule. Cette démarche vous protège si l'acheteur tarde à faire la carte grise à son nom.",
    prix: 8,
    icone: FiFileText,
    documents: [
      {
        label: 'Pour les particuliers',
        items: [
          'Certificat de cession',
          "Pièce d'identité du vendeur (CNI, passeport, titre de séjour en cours de validité)",
        ],
      },
      {
        label: 'Pour les professionnels',
        items: [
          'Extrait de Kbis',
          "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
          'Certificat de cession',
          'Cachet de la société',
        ],
      },
    ],
  },
  {
    id: 'achat-professionnel',
    titre: "Déclaration d'achat professionnel",
    description: "Cette déclaration concerne les professionnels de l'automobile.",
    prix: 8,
    icone: FiBriefcase,
    documents: [
      {
        items: [
          'Carte grise barrée et signée',
          'Certificat de cession (CERFA 13754)',
          "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
          'Kbis',
          'Cachet de la société',
        ],
      },
    ],
  },
  {
    id: 'certificat-ww',
    titre: "Certificat provisoire d'immatriculation WW",
    description: "Ce certificat vous permettra de circuler si l'immatriculation définitive de votre véhicule n'est pas possible pour dossier incomplet.",
    prix: 30,
    icone: FiAlertCircle,
    documents: [
      {
        items: [
          'Carte grise étrangère',
          "Facture d'achat ou certificat de cession",
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
          'Permis',
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          'Assurance',
          'Quitus fiscal ou Cerfa 846A',
          'Contrôle technique',
          'Certificat de conformité (COC)',
        ],
      },
      {
        label: 'Pour les professionnels',
        items: [
          'Extrait de Kbis',
          "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
          'Cachet de la société',
        ],
      },
    ],
  },
  {
    id: 'collection',
    titre: 'Véhicule de collection',
    description: "Possible si le véhicule a plus de 30 ans, n'est plus en production et que ses caractéristiques n'ont pas été modifiées. Une carte grise collection présente de nombreux avantages.",
    prix: 50,
    icone: FiAward,
    documents: [
      {
        items: [
          'Attestation FFVE',
          'Copie de la carte grise actuelle',
          "Copie d'une pièce d'identité",
          'Copie du permis de conduire',
          'Justificatif de domicile de moins de 6 mois',
          'Contrôle technique en cours de validité',
          "Attestation d'assurance du véhicule",
        ],
      },
    ],
  },
  {
    id: 'vehicule-etranger',
    titre: 'Véhicule étranger',
    description: 'Vous souhaitez immatriculer votre véhicule étranger en France.',
    prix: 50,
    icone: FiGlobe,
    documents: [
      {
        items: [
          'Carte grise étrangère',
          "Facture d'achat ou certificat de cession",
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
          'Permis',
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          'Assurance',
          'Contrôle technique français ou européen',
          'Quitus fiscal',
          'Véhicule acquis hors EU (Cerfa 846A)',
          'Certificat de conformité (COC)',
        ],
      },
      {
        label: 'Pour les professionnels',
        items: [
          'Extrait de Kbis',
          "Pièce d'identité du gérant (CNI, passeport, titre de séjour en cours de validité)",
          'Cachet de la société',
        ],
      },
    ],
  },
  {
    id: 'caracteristiques-techniques',
    titre: 'Changement de caractéristiques techniques',
    description: "La modification des caractéristiques techniques concerne tout changement touchant les données du véhicule (poids, puissance, énergie, etc.).",
    prix: 50,
    icone: FiSliders,
    documents: [
      {
        items: [
          'Ancienne carte grise',
          "Justificatif de domicile de moins de 6 mois (facture : électricité, gaz, téléphone ; dernier avis d'imposition, quittance de loyer)",
          'Permis',
          "Pièce d'identité (CNI, passeport, titre de séjour en cours de validité)",
          'Assurance',
          'Contrôle technique en cours de validité',
          'Document officiel indiquant le changement de caractéristique technique effectué',
        ],
      },
    ],
  },
];

export default function CarteGriseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = services.findIndex((s) => s.id === hash);
      if (idx !== -1) {
        setOpenIndex(idx);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {services.map((service, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            id={service.id}
            style={{ scrollMarginTop: '120px' }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen ? 'border-bleu shadow-md' : 'border-gray-200 shadow-sm'
            } bg-white`}
          >
            {/* Header */}
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-rouge/10 flex items-center justify-center flex-shrink-0">
                  <service.icone className="text-rouge" size={18} />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-titre font-extrabold text-gray-900 text-base md:text-lg leading-tight">
                    {service.titre}
                  </span>
                  <span className="text-gray-500 text-xs leading-snug hidden sm:block">
                    {service.description}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <span className="bg-rouge text-white font-titre font-extrabold text-sm px-4 py-1.5 rounded-full">
                  {service.prix} €
                </span>
                <FiChevronDown
                  size={20}
                  className={`text-bleu transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Body */}
            <div
              className={`transition-all duration-300 ${
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed mb-5 sm:hidden">
                  {service.description}
                </p>
                {service.documents.map((section, j) => (
                  <div key={j} className={j > 0 ? 'mt-5' : ''}>
                    {section.label ? (
                      <div className="bg-bleu/5 border border-bleu/20 rounded-xl p-4">
                        <p className="font-titre font-bold text-bleu text-xs uppercase tracking-wider mb-3">
                          {section.label}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {section.items.map((item, k) => (
                            <li key={k} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-bleu/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-bleu" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <p className="font-titre font-semibold text-gray-500 text-xs uppercase tracking-wider mb-4">
                          Documents à fournir
                        </p>
                        <ul className="flex flex-col gap-3">
                          {section.items.map((item, k) => (
                            <li key={k} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-bleu/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-bleu" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
