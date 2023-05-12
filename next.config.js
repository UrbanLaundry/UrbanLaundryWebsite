/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "medium.com",
      "images.pexels.com",
      "flowbite.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
