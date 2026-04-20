import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.soscartegrise31.fr', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.soscartegrise31.fr/carte-grise', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.soscartegrise31.fr/permis-conduire', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.soscartegrise31.fr/plaques', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.soscartegrise31.fr/avis', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: 'https://www.soscartegrise31.fr/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://www.soscartegrise31.fr/mentions-legales', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://www.soscartegrise31.fr/politique-confidentialite', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
