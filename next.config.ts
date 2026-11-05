import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/adams", destination: "/products/adams", permanent: true },
      {
        source: "/tmc",
        destination: "/products/traffic-management",
        permanent: true,
      },
      {
        source: "/fms",
        destination: "/products/herd-monitoring",
        permanent: true,
      },
      { source: "/about", destination: "/company", permanent: true },
    ];
  },
};

export default nextConfig;
