import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/base-path";

// GitHub Pages is a static host, so the site is built with `output: "export"`.
// This rules out server-only features: the /api/contact route handler, the
// 301 `redirects()` map, and `cacheComponents` / `partialPrefetching` (all of
// which require a Node.js server at request time) are intentionally omitted.
//
// The site is served from a project page at
//   https://sureshkv-os.github.io/abn/
// so `basePath` prefixes every route and asset with `/abn`. If you later move
// to a custom domain served at the root, remove `basePath` and add a
// `public/CNAME` file containing the domain.
const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Emit `about/index.html` instead of `about.html` so GitHub Pages resolves
  // clean URLs without a server-side rewrite.
  trailingSlash: true,
  images: {
    // GitHub Pages cannot run the default image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
