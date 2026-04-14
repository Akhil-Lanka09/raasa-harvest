/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using unoptimized since all images are local in /public
    unoptimized: true,
  },
  // Suppress TypeScript errors that aren't critical (comment out if you want strict)
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
