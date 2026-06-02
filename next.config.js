/** @type {import('next').NextConfig} */
const ARABIC_HOST = 'arabic.qutoofacademy.com';
const ARABIC_INTERNAL_PATH = '/arabic-subdomain';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: ARABIC_HOST }],
        destination: ARABIC_INTERNAL_PATH,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: ARABIC_HOST }],
        destination: `${ARABIC_INTERNAL_PATH}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
