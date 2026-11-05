import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
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
