import type { MetadataRoute } from 'next';
import { extensions } from '@/lib/extensions';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/` },
    ...extensions.map(extension => ({ url: `${siteConfig.url}/extensions/${extension.slug}` })),
    { url: `${siteConfig.url}/privacy` },
  ];
}
