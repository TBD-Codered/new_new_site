/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*.brandon-huu.com', 'localhost:8083'],
    },
  },
  images:{
    remotePatterns: [ {
      protocol: 'https',
      hostname:"images.pexels.com",
    } ]
  }
};

export default nextConfig;
