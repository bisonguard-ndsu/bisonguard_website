import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/adams", destination: "/products/adams", permanent: true },
      { source: "/tmc", destination: "/products/tmc", permanent: true },
      { source: "/fms", destination: "/products/bisonguard", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      {
        source: "/products/traffic-management",
        destination: "/products/tmc",
        permanent: true,
      },
      {
        source: "/products/herd-monitoring",
        destination: "/products/bisonguard",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
