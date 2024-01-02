/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1023",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
