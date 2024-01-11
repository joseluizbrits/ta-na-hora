/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-ta-na-hora.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
