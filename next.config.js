/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/tools',
        destination: 'https://reviews.orkolabs.com/',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: 'https://reviews.orkolabs.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
