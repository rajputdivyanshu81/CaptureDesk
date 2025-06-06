import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    remotePatterns: [
      {
        hostname: "jsm-capture-desk.b-cdn.net",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      // Allow all Google user content domains
      {
        hostname: "*.googleusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;