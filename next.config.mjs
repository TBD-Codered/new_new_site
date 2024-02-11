/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['https://miniature-computing-machine-9vxj4gxjq3j4q-3000.app.github.dev/','*.brandon-huu.com', 'localhost:8083'],
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
