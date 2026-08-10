import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // ✅ correct way

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;