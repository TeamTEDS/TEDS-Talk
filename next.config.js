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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
