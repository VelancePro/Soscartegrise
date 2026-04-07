import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.soscartegrise.fr', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.soscartegrise.fr/carte-grise', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.soscartegrise.fr/permis-conduire', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.soscartegrise.fr/plaques', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.soscartegrise.fr/avis', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: 'https://www.soscartegrise.fr/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://www.soscartegrise.fr/mentions-legales', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://www.soscartegrise.fr/politique-confidentialite', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
