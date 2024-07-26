// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Add this line for static export
  },
  output: 'export', // Add this line for static export
  assetPrefix: '/macgic-app/', // Add this line for GitHub Pages
  basePath: '/macgic-app/', // Add this line for GitHub Pages
};

export default nextConfig;