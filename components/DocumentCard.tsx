import { FaFilePdf } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

interface DocumentCardProps {
  titre: string;
  cerfa: string;
  fichier: string;
  fallbackUrl?: string;
}

export default function DocumentCard({ titre, cerfa, fichier, fallbackUrl }: DocumentCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <FaFilePdf className="text-rouge text-2xl" />
        </div>
        <div>
          <h3 className="font-titre font-bold text-gray-900 text-base">{titre}</h3>
          <p className="text-sm text-gray-500">{cerfa}</p>
        </div>
      </div>
      <a
        href={fichier}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center justify-center gap-2 bg-rouge text-white font-titre font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-red-800 transition-colors duration-200"
      >
        <FiDownload size={16} />
        Télécharger
      </a>
      {fallbackUrl && (
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-xs text-gray-400 hover:text-bleu transition-colors"
        >
          Disponible aussi sur service-public.fr
        </a>
      )}
    </div>
  );
}
