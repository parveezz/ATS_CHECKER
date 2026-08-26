/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.1.17',
    '192.168.1.17:3000',
    '192.168.29.240',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
