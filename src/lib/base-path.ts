/**
 * Single source of truth for the deployment base path.
 *
 * The site is served from a GitHub Pages project page under `/abn`, so this
 * value is also set as `basePath` in next.config.ts (which imports it from
 * here). Keep both in sync by only ever changing it in this file.
 */
export const BASE_PATH = "/abn";

/**
 * Prefix a root-relative public asset path (e.g. "/team/unni.webp") with
 * BASE_PATH.
 *
 * `next/link` and the router apply basePath automatically, but `next/image`
 * (and raw <img>) do NOT apply it to a string `src` — only to static image
 * imports. Public files referenced by string therefore need this helper, or
 * they 404 under the subpath. External URLs and non-root paths are returned
 * unchanged.
 */
export function asset(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
