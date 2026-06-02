/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'arabic.qutoofacademy.com' }],
        destination: '/arabic-subdomain',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'arabic.qutoofacademy.com' }],
        destination: '/arabic-subdomain/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
