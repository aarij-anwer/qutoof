/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/arabic-subdomain',
        has: [{ type: 'host', value: 'arabic.qutoofacademy.com' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/arabic-subdomain/:path*',
        has: [{ type: 'host', value: 'arabic.qutoofacademy.com' }],
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

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
