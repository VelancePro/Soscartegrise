import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Soscartegrise',
  description: "Politique de confidentialité du site Soscartegrise — collecte et utilisation des données personnelles, cookies et droits des utilisateurs.",
};

const sections = [
  {
    titre: 'Qui sommes-nous ?',
    contenu: (
      <div className="flex flex-col gap-2 text-gray-600 text-sm leading-relaxed">
        <ul className="flex flex-col gap-1.5">
          <li><span className="text-gray-400">Site web :</span> <strong>www.soscartegrise31.fr</strong></li>
          <li><span className="text-gray-400">Propriétaire :</span> Soscartegrise — 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens</li>
          <li><span className="text-gray-400">Créateur :</span> Velance — <a href="https://velance.fr" target="_blank" rel="noopener noreferrer" className="text-bleu hover:text-rouge transition-colors">velance.fr</a></li>
          <li><span className="text-gray-400">Responsable de publication :</span> Soscartegrise — 05 81 666 900</li>
          <li><span className="text-gray-400">Webmaster :</span> Velance — 07 72 09 10 79</li>
          <li><span className="text-gray-400">Hébergeur :</span> Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
        </ul>
      </div>
    ),
  },
  {
    titre: 'Formulaire de contact',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Lorsque vous utilisez notre formulaire de contact, nous vous demandons votre accord afin que les informations saisies (nom, prénom, adresse électronique, téléphone et message) puissent être exploitées et stockées dans le cadre de votre demande de contact et de la relation commerciale qui peut en découler. Ces données sont utilisées exclusivement pour répondre à votre demande et ne sont jamais transmises à des tiers.
      </p>
    ),
  },
  {
    titre: 'Cookies',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          La navigation sur le site <strong>www.soscartegrise31.fr</strong> est susceptible de provoquer l&apos;installation de cookies sur votre appareil. Un cookie est un petit fichier texte enregistré par votre navigateur qui permet de faciliter votre navigation et de mesurer l&apos;audience du site.
        </p>
        <p>
          Vous pouvez à tout moment refuser ou supprimer les cookies via les paramètres de votre navigateur. Le refus de certains cookies peut limiter l&apos;accès à certaines fonctionnalités du site.
        </p>
      </div>
    ),
  },
  {
    titre: "Contenu embarqué depuis d'autres sites",
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Certaines pages de ce site peuvent inclure des contenus intégrés (notamment une carte Google Maps sur la page Contact). Ces contenus se comportent comme si vous visitiez directement le site tiers concerné. Ces sites peuvent collecter des données vous concernant, utiliser des cookies et embarquer des outils de suivi.
      </p>
    ),
  },
  {
    titre: "Statistiques et mesures d'audience",
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Nous sommes susceptibles d&apos;utiliser des outils d&apos;analyse d&apos;audience (tels que Google Analytics) afin de mieux comprendre la navigation des visiteurs sur notre site et d&apos;optimiser nos contenus et services. Ces données sont collectées de manière anonyme et agrégée.
      </p>
    ),
  },
  {
    titre: 'Durée de conservation de vos données',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Les données transmises via le formulaire de contact sont conservées pour la durée nécessaire au traitement de votre demande et de la relation commerciale qui peut en découler, et au maximum pendant 3 ans à compter du dernier contact. Elles sont ensuite supprimées ou archivées conformément aux obligations légales en vigueur.
      </p>
    ),
  },
  {
    titre: 'Vos droits sur vos données',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
        </p>
        <ul className="flex flex-col gap-1.5 ml-4">
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit d&apos;accès à vos données</li>
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit de rectification en cas d&apos;inexactitude</li>
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit à l&apos;effacement (droit à l&apos;oubli)</li>
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit à la limitation du traitement</li>
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit à la portabilité de vos données</li>
          <li className="flex items-start gap-2"><span className="text-bleu mt-0.5">—</span> Droit d&apos;opposition au traitement</li>
        </ul>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter par email à <a href="mailto:soscartegrise31@hotmail.com" className="text-bleu hover:text-rouge transition-colors">soscartegrise31@hotmail.com</a> ou par courrier à l&apos;adresse : 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens.
        </p>
        <p>
          En cas de réclamation, vous pouvez également vous adresser à la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-bleu hover:text-rouge transition-colors">www.cnil.fr</a>.
        </p>
      </div>
    ),
  },
  {
    titre: 'Sécurité des données',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et les protéger contre toute perte, accès non autorisé, divulgation, altération ou destruction.
      </p>
    ),
  },
  {
    titre: 'Modification de la politique de confidentialité',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Soscartegrise se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les utilisateurs sont invités à la consulter régulièrement. En cas de modification substantielle, une information sera communiquée sur le site.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        titre="Politique de confidentialité"
        sousTitre="Protection de vos données personnelles — RGPD et loi Informatique et Libertés."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Politique de confidentialité' },
        ]}
        couleur="bleu"
      />

      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <h2 className="font-titre font-extrabold text-gray-900 text-base md:text-lg mb-4 pb-3 border-b border-gray-200">
                {section.titre}
              </h2>
              {section.contenu}
            </div>
          ))}

          <p className="text-gray-400 text-xs text-center mt-4">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
