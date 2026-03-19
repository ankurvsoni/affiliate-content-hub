/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/tools',
        destination: '/reviews',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
