/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        hostname: "gatherer.wizards.com",
      },
    ],
  },
};

module.exports = nextConfig;
