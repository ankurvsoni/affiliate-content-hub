import { getAllPages } from '../lib/content';

const excludedSeasonalSlugs = new Set([
  'best-st-patricks-day-shirts-women',
]);

export default function sitemap() {
  const base = 'https://reviews.orkolabs.com';
  const staticRoutes = ['', '/all-guides', '/about', '/disclosure', '/editorial-policy', '/how-we-test', '/privacy', '/contact'];
  const pageRoutes = getAllPages()
    .filter((p) => p.slug && !excludedSeasonalSlugs.has(p.slug))
    .map((p) => `/pages/${p.slug}`);

  return [...staticRoutes, ...pageRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/pages/') ? 'weekly' : 'daily',
    priority: route === '' ? 1 : route === '/all-guides' ? 0.9 : 0.7,
  }));
}
