import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => "wfrL8epfzNsNX0jI40Tdx",
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
