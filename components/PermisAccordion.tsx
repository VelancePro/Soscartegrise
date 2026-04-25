'use client';

import { useState, useEffect } from 'react';
import { FiChevronDown, FiAlertCircle, FiAward, FiCopy, FiEdit2, FiRefreshCw, FiUnlock } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface DocItem {
  texte: string;
  attention?: string;
  sousItems?: string[];
  isCasParticulier?: boolean;
}

interface Section {
  id: string;
  titre: string;
  sousTitre?: string;
  icone: IconType;
  documents: DocItem[];
}

const sections: Section[] = [
  {
    id: 'reussite',
    titre: "Réussite à l'examen",
    sousTitre: 'Fabrication du premier permis',
    icone: FiAward,
    documents: [
      { texte: "Justificatif d'identité en cours de validité : Carte nationale d'identité, passeport ou titre de séjour" },
      { texte: "Justificatif de domicile de moins de 6 mois : Facture/attestation titulaire de contrat (eau, électricité, gaz, téléphone ou internet) ou avis d'imposition" },
      { texte: "Code photo-signature numérique (usage unique) fourni par un photographe ou photomaton agréé service en ligne.", attention: "Nous n'acceptons pas de photo d'identité papier." },
      { texte: "Si vous avez moins de 21 ans : attestation de sécurité routière (ASR, ASSR1 ou ASSR2).", attention: "Si vous l'avez égaré, merci de fournir une attestation sur l'honneur d'obtention et de perte en mentionnant l'année." },
      { texte: "BSR ou permis de conduire actuel seulement si vous en êtes titulaire.", attention: "Si vous l'avez égaré, merci de contacter nos services afin d'effectuer une demande de duplicata de BSR." },
      { texte: "Si votre permis est soumis à une visite médicale (situation handicap, catégorie lourde, permis professionnel…) : un avis médical (cerfa 14880)" },
      { texte: "Si vous êtes mineur : justificatif de domicile au nom du responsable légal + attestation d'hébergement sur l'honneur datée et signée + pièce d'identité du responsable légal en cours de validité" },
      {
        texte: "Cas particulier — Personne hébergée chez un particulier :",
        isCasParticulier: true,
        sousItems: [
          "Une attestation sur l'honneur de la personne qui héberge en original et co-signée par l'hébergé",
          "Un justificatif de domicile de l'hébergeant de moins de 6 mois",
          "Un justificatif d'identité de l'hébergeant en cours de validité",
        ],
      },
    ],
  },
  {
    id: 'duplicata',
    titre: 'Duplicata de permis de conduire',
    sousTitre: 'En cas de perte, vol ou détérioration',
    icone: FiCopy,
    documents: [
      { texte: "Justificatif d'identité en cours de validité : Carte nationale d'identité, passeport ou titre de séjour" },
      { texte: "Justificatif de domicile de moins de 6 mois : Facture/attestation titulaire de contrat (eau, électricité, gaz, téléphone ou internet) ou avis d'imposition" },
      { texte: "Code photo-signature numérique (usage unique) fourni par un photographe ou photomaton agréé service en ligne.", attention: "Nous n'acceptons pas de photo d'identité papier." },
      { texte: "Si votre permis est soumis à une visite médicale (situation handicap, catégorie lourde, permis professionnel…) : un avis médical (cerfa 14880)" },
      { texte: "Si vous êtes mineur : justificatif de domicile au nom du responsable légal + attestation d'hébergement sur l'honneur datée et signée + pièce d'identité du responsable légal en cours de validité" },
      { texte: "En cas de vol : récépissé de la déclaration de vol du permis de conduire (à effectuer en commissariat ou en gendarmerie)" },
      { texte: "En cas de détérioration : permis de conduire détérioré" },
      {
        texte: "Cas particulier — Personne hébergée chez un particulier :",
        isCasParticulier: true,
        sousItems: [
          "Une attestation sur l'honneur de la personne qui héberge en original et co-signée par l'hébergé",
          "Un justificatif de domicile de l'hébergeant de moins de 6 mois",
          "Un justificatif d'identité de l'hébergeant en cours de validité",
        ],
      },
    ],
  },
  {
    id: 'etat-civil',
    titre: "Changement d'état civil",
    sousTitre: 'Divorce, changement de nom ou adoption',
    icone: FiEdit2,
    documents: [
      { texte: "Justificatif d'identité en cours de validité : Carte nationale d'identité, passeport ou titre de séjour" },
      { texte: "Justificatif de domicile de moins de 6 mois : Facture/attestation titulaire de contrat (eau, électricité, gaz, téléphone ou internet) ou avis d'imposition" },
      { texte: "Code photo-signature numérique (usage unique) fourni par un photographe ou photomaton agréé service en ligne.", attention: "Nous n'acceptons pas de photo d'identité papier." },
      { texte: "Si votre permis est soumis à une visite médicale (situation handicap, catégorie lourde, permis professionnel…) : un avis médical (cerfa 14880)" },
      { texte: "Si vous êtes mineur : justificatif de domicile au nom du responsable légal + attestation d'hébergement sur l'honneur datée et signée + pièce d'identité du responsable légal en cours de validité" },
      { texte: "En cas de divorce : jugement de divorce ou convention de divorce enregistré par un notaire. Vous pouvez demander un nouveau permis si votre nom d'usage figurait sur votre permis et que vous souhaitez que seul votre nom de famille y figure." },
      { texte: "En cas de changement de nom ou de prénom : justificatif de changement de nom ou de prénom. Vous pouvez demander un nouveau permis si vous changez d'état civil et que le nom de famille figurant sur votre permis n'est plus le bon." },
      {
        texte: "Cas particulier — Personne hébergée chez un particulier :",
        isCasParticulier: true,
        sousItems: [
          "Une attestation sur l'honneur de la personne qui héberge en original et co-signée par l'hébergé",
          "Un justificatif de domicile de l'hébergeant de moins de 6 mois",
          "Un justificatif d'identité de l'hébergeant en cours de validité",
        ],
      },
    ],
  },
  {
    id: 'renouvellement',
    titre: 'Renouvellement de validité',
    sousTitre: 'En cas de fin de validité',
    icone: FiRefreshCw,
    documents: [
      { texte: "Justificatif d'identité en cours de validité : Carte nationale d'identité, passeport ou titre de séjour" },
      { texte: "Justificatif de domicile de moins de 6 mois : Facture/attestation titulaire de contrat (eau, électricité, gaz, téléphone ou internet) ou avis d'imposition" },
      { texte: "Code photo-signature numérique (usage unique) fourni par un photographe ou photomaton agréé service en ligne.", attention: "Nous n'acceptons pas de photo d'identité papier." },
      { texte: "Permis de conduire en fin de validité" },
      { texte: "Si votre permis est soumis à une visite médicale (situation handicap, catégorie lourde, permis professionnel…) : un avis médical (cerfa 14880)" },
      { texte: "Si vous ne souhaitez pas renouveler les catégories lourdes de votre permis de conduire, remplacez l'avis médical par une attestation de renonciation aux catégories lourdes" },
      { texte: "Si vous êtes mineur : justificatif de domicile au nom du responsable légal + attestation d'hébergement sur l'honneur datée et signée + pièce d'identité du responsable légal en cours de validité" },
      {
        texte: "Cas particulier — Personne hébergée chez un particulier :",
        isCasParticulier: true,
        sousItems: [
          "Une attestation sur l'honneur de la personne qui héberge en original et co-signée par l'hébergé",
          "Un justificatif de domicile de l'hébergeant de moins de 6 mois",
          "Un justificatif d'identité de l'hébergeant en cours de validité",
        ],
      },
    ],
  },
  {
    id: 'recuperation',
    titre: 'Récupération de permis',
    sousTitre: "Suite à une suspension, annulation ou invalidation",
    icone: FiUnlock,
    documents: [
      { texte: "Justificatif d'identité en cours de validité : Carte nationale d'identité, passeport ou titre de séjour" },
      { texte: "Justificatif de domicile de moins de 6 mois : Facture/attestation titulaire de contrat (eau, électricité, gaz, téléphone ou internet) ou avis d'imposition" },
      { texte: "Code photo-signature numérique (usage unique) fourni par un photographe ou photomaton agréé service en ligne.", attention: "Nous n'acceptons pas de photo d'identité papier." },
      { texte: "Certificat de réussite à l'examen en cas de demande suite à une annulation ou une invalidation" },
      { texte: "Si votre permis est soumis à une visite médicale (situation handicap, catégorie lourde, permis professionnel…) : un avis médical (cerfa 14880)" },
      { texte: "Si vous êtes mineur : justificatif de domicile au nom du responsable légal + attestation d'hébergement sur l'honneur datée et signée + pièce d'identité du responsable légal en cours de validité" },
      {
        texte: "Cas particulier — Personne hébergée chez un particulier :",
        isCasParticulier: true,
        sousItems: [
          "Une attestation sur l'honneur de la personne qui héberge en original et co-signée par l'hébergé",
          "Un justificatif de domicile de l'hébergeant de moins de 6 mois",
          "Un justificatif d'identité de l'hébergeant en cours de validité",
        ],
      },
    ],
  },
];

export default function PermisAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = sections.findIndex((s) => s.id === hash);
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
      {sections.map((section, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            id={section.id}
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
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-bleu/10 flex items-center justify-center flex-shrink-0">
                  <section.icone className="text-bleu" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-titre font-extrabold text-gray-900 text-base md:text-lg">
                    {section.titre}
                  </span>
                  {section.sousTitre && (
                    <span className="text-gray-400 text-xs font-corps">
                      {section.sousTitre}
                    </span>
                  )}
                </div>
              </div>
              <FiChevronDown
                size={20}
                className={`flex-shrink-0 text-bleu transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Body */}
            <div
              className={`transition-all duration-300 ${
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                <p className="font-titre font-semibold text-gray-500 text-xs uppercase tracking-wider mb-4">
                  Documents à fournir
                </p>
                <ul className="flex flex-col gap-4">
                  {section.documents.map((doc, j) => (
                    <li key={j}>
                      {doc.isCasParticulier ? (
                        <div className="bg-bleu/5 border border-bleu/20 rounded-xl p-4">
                          <p className="font-titre font-bold text-bleu text-sm mb-3">
                            {doc.texte}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {doc.sousItems?.map((sub, k) => (
                              <li key={k} className="flex items-start gap-2 text-gray-600 text-sm">
                                <span className="text-bleu mt-0.5 flex-shrink-0">—</span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-bleu/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-bleu" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {doc.texte}
                            </span>
                            {doc.attention && (
                              <div className="flex items-start gap-1.5 text-rouge text-xs">
                                <FiAlertCircle size={13} className="flex-shrink-0 mt-0.5" />
                                <span>{doc.attention}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
