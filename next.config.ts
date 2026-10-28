import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'extensions.nishkumar.dev' }],
      destination: 'https://www.extensions.nishkumar.dev/:path*',
      permanent: true,
    }];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // This local catalog is prerendered; reject unknown slugs before streaming a response.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
