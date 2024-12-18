import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["localhost", "picsum.photos"],
  },
};

export default nextConfig;
