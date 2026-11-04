import type { NextConfig } from "next";
import { redirects as redirectMap } from "./src/content/redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // 301 redirect map from the old site (proposal §2). Sourced from
  // src/content/redirects.ts; finalise from a full crawl before launch.
  async redirects() {
    // statusCode 301 (not `permanent: true`, which emits 308) to match the
    // proposal's 301 redirect commitment.
    return redirectMap.map((r) => ({
      source: r.source,
      destination: r.destination,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
