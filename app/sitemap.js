import { getAllPages } from '../lib/content';

export default function sitemap() {
  const base = 'https://reviews.orkolabs.com';
  const staticRoutes = ['', '/all-guides', '/reviews', '/about', '/disclosure', '/editorial-policy', '/how-we-test'];
  const pageRoutes = getAllPages().map((p) => `/pages/${p.slug}`);

  return [...staticRoutes, ...pageRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/pages/') ? 'weekly' : 'daily',
    priority: route === '' ? 1 : route === '/all-guides' ? 0.9 : 0.7,
  }));
}
