/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/macgic-web',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/macgic-web/' : '',
  };
  
  export default nextConfig;