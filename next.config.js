/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.gravatar.com",
      },
    ],
    domains: ["avatars.githubusercontent.com", "placeimg.com", "picsum.photos"],
  },
};
