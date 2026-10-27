import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    resolveAlias: {
      "lucide-react": "./src/lib/icons/index.tsx",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "lucide-react": path.resolve(__dirname, "src/lib/icons/index.tsx"),
    };
    return config;
  },
};

export default nextConfig;

