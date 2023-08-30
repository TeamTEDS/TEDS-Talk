/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'github.githubassets.com',
      },
      {
        hostname: 'teamteds.tk',
      },
      {
        hostname: 'cdn.tedps.tk',
      },
      {
        hostname: 'dovydasteds.tk',
      },
    ],
  },
};

module.exports = nextConfig;
