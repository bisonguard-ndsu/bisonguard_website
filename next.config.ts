import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images as-is. Our host times out converting large images on the
  // fly, and every image here is already a sized WebP.
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/adams", destination: "/products/adams", permanent: true },
      { source: "/tmc", destination: "/products/traffic-management", permanent: true },
      { source: "/fms", destination: "/solutions/herd-monitoring", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/team", destination: "/company/team", permanent: true },
    ];
  },
};

export default nextConfig;
