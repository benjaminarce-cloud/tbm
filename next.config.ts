import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // AVIF first (best compression), WebP fallback — smaller bytes on mobile.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
