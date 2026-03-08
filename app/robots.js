export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://reviews.orkolabs.com/sitemap.xml',
    host: 'https://reviews.orkolabs.com',
  };
}
