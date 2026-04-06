import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Mentions légales — Soscartegrise',
  description: 'Mentions légales du site Soscartegrise — informations légales, hébergement, propriété intellectuelle et données personnelles.',
};

const sections = [
  {
    titre: 'Éditeur du site',
    contenu: (
      <div className="flex flex-col gap-2 text-gray-600 text-sm leading-relaxed">
        <p>Le site <strong>www.soscartegrise31.fr</strong> est édité par :</p>
        <ul className="flex flex-col gap-1 mt-2">
          <li><span className="text-gray-400">Raison sociale :</span> <strong>Soscartegrise</strong></li>
          <li><span className="text-gray-400">Adresse :</span> 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens</li>
          <li><span className="text-gray-400">Téléphone :</span> 05 81 666 900</li>
          <li><span className="text-gray-400">Email :</span> soscartegrise31@hotmail.com</li>
          <li><span className="text-gray-400">Directeur de la publication :</span> Soscartegrise</li>
        </ul>
      </div>
    ),
  },
  {
    titre: 'Conception et réalisation du site',
    contenu: (
      <div className="flex flex-col gap-2 text-gray-600 text-sm leading-relaxed">
        <p>Le site est conçu par <strong>Velance</strong>, société par actions simplifiée (SAS) au capital de 800,00 €.</p>
        <ul className="flex flex-col gap-1 mt-2">
          <li><span className="text-gray-400">Adresse :</span> 34 Route d&apos;Albi, 31240 Saint-Jean</li>
          <li><span className="text-gray-400">RCS :</span> TOULOUSE — NAF 6201Z</li>
          <li><span className="text-gray-400">Téléphone :</span> 07 72 09 10 79</li>
          <li><span className="text-gray-400">Site :</span> <a href="https://velance.fr" target="_blank" rel="noopener noreferrer" className="text-bleu hover:text-rouge transition-colors">velance.fr</a></li>
        </ul>
      </div>
    ),
  },
  {
    titre: 'Hébergement',
    contenu: (
      <div className="flex flex-col gap-2 text-gray-600 text-sm leading-relaxed">
        <p>Le site est hébergé par <strong>Vercel Inc.</strong></p>
        <ul className="flex flex-col gap-1 mt-2">
          <li><span className="text-gray-400">Siège social :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li><span className="text-gray-400">Site :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-bleu hover:text-rouge transition-colors">vercel.com</a></li>
        </ul>
      </div>
    ),
  },
  {
    titre: 'Démarchage téléphonique',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Conformément à l&apos;article L.223-2 du Code de la consommation, l&apos;utilisateur dispose du droit de s&apos;inscrire gratuitement sur la liste d&apos;opposition au démarchage téléphonique Bloctel : <a href="https://www.bloctel.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-bleu hover:text-rouge transition-colors">www.bloctel.gouv.fr</a>. Nous nous engageons à respecter la réglementation en vigueur et à ne pas vous contacter à des fins commerciales si vous êtes inscrit sur Bloctel, sauf en cas de relation contractuelle en cours ou de demande expresse de votre part.
      </p>
    ),
  },
  {
    titre: 'Objectif et qualité des contenus',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Ce site internet a pour objectif de présenter les prestations de <strong>Soscartegrise</strong>, spécialiste agréé des démarches de certificat d&apos;immatriculation à Saint-Gaudens.
      </p>
    ),
  },
  {
    titre: 'Propriété intellectuelle',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          Soscartegrise est propriétaire ou détient les droits d&apos;usage sur tous les éléments de propriété intellectuelle présents sur le site, notamment les textes, images, graphismes, marque, logo, icônes, sons et vidéos.
        </p>
        <p>
          L&apos;accès au site ne confère aucun droit de propriété intellectuelle aux utilisateurs. Ces éléments restent la propriété exclusive de Soscartegrise.
        </p>
        <p>
          En conséquence, aucun élément du site ne pourra être modifié, reproduit, copié, dupliqué, vendu, transmis, publié, distribué, représenté ou exploité de quelque manière que ce soit, sans l&apos;autorisation préalable expresse et écrite de Soscartegrise. Toute exploitation non autorisée sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
        </p>
      </div>
    ),
  },
  {
    titre: 'Responsabilités',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          L&apos;utilisateur du site s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
        </p>
        <p>
          Soscartegrise ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, résultant de l&apos;utilisation d&apos;un matériel non conforme ou de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
        </p>
      </div>
    ),
  },
  {
    titre: 'Gestion des données personnelles',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          D&apos;une façon générale, l&apos;utilisateur peut visiter le site sans avoir à décliner son identité ni fournir d&apos;informations personnelles.
        </p>
        <p>
          L&apos;utilisateur peut toutefois déposer des données à caractère personnel via l&apos;onglet « Contact ». Soscartegrise traitera ces données (nom, prénom, adresse électronique, téléphone et message) uniquement pour répondre à la demande d&apos;information.
        </p>
        <p>
          Pour toute question relative à la gestion de ses données personnelles, l&apos;utilisateur peut contacter Soscartegrise par courrier à l&apos;adresse du siège : 17 Boulevard Charles de Gaulle, 31800 Saint-Gaudens, ou par email à <a href="mailto:soscartegrise31@hotmail.com" className="text-bleu hover:text-rouge transition-colors">soscartegrise31@hotmail.com</a>.
        </p>
      </div>
    ),
  },
  {
    titre: 'Cookies',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          La navigation sur le site <strong>www.soscartegrise31.fr</strong> est susceptible de provoquer l&apos;installation de cookies sur l&apos;ordinateur de l&apos;utilisateur. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation sur un site, sans permettre l&apos;identification de l&apos;utilisateur.
        </p>
        <p>
          Le refus d&apos;installation d&apos;un cookie peut entraîner l&apos;impossibilité d&apos;accéder à certains services du site. L&apos;utilisateur peut à tout moment gérer ses préférences de cookies via les paramètres de son navigateur.
        </p>
      </div>
    ),
  },
  {
    titre: 'Liens hypertextes',
    contenu: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Le site <strong>www.soscartegrise31.fr</strong> peut contenir des liens hypertextes vers d&apos;autres sites. Soscartegrise n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités et n&apos;assumera en conséquence aucune responsabilité à ce titre.
      </p>
    ),
  },
  {
    titre: 'Loi applicable et tribunal compétent',
    contenu: (
      <div className="flex flex-col gap-3 text-gray-600 text-sm leading-relaxed">
        <p>
          Tout litige en relation avec l&apos;utilisation du site <strong>www.soscartegrise31.fr</strong> est soumis à la loi française.
        </p>
        <p>
          L&apos;utilisateur et Soscartegrise s&apos;efforceront de résoudre à l&apos;amiable toute contestation relative au présent document. Conformément aux articles L.611-1 et suivants du Code de la consommation, tout utilisateur consommateur peut contacter Soscartegrise afin de connaître les coordonnées du médiateur de la consommation compétent.
        </p>
        <p>
          À défaut d&apos;accord amiable, le consommateur peut saisir la juridiction territorialement compétente en vertu du Code de procédure civile.
        </p>
      </div>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        titre="Mentions légales"
        sousTitre="Loi du 21 juin 2004 pour la confiance dans l'économie numérique."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Mentions légales' },
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
