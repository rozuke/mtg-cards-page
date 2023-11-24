/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gatherer.wizards.com",
      },
    ],
  },
};

module.exports = nextConfig;
