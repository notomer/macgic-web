/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Ensures images work without optimization during export
  },
  output: 'export', // Enables static export
  assetPrefix: '/macgic-app', // Sets the correct base path for GitHub Pages
  basePath: '/macgic-app', // Sets the base path for your project without trailing slash
};

export default nextConfig;