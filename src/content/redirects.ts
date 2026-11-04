/**
 * 301 redirect map from the old site's URLs to the new pages (proposal §2).
 * Seeded from the indicative map on pages 3–4 of the proposal. The final map is
 * built from a full crawl of the current site and verified after launch.
 *
 * Consumed by next.config.ts `redirects()`. All entries are permanent (301).
 *
 * TODO: expand with the complete crawl, including individual /articles/ URLs.
 */

export type RedirectEntry = {
  source: string;
  destination: string;
};

export const redirects: RedirectEntry[] = [
  // About / Team — old credibility pages folded in as sections.
  { source: "/about-us-tax-accountants-brisbane", destination: "/about" },
  { source: "/case-studies", destination: "/about" },
  { source: "/testimonials", destination: "/about" },
  { source: "/our-community", destination: "/about" },
  { source: "/awards", destination: "/about" },

  // Services — old per-service pages map to anchored sections on /services.
  { source: "/medical-accountants-brisbane", destination: "/services#medical" },
  { source: "/property-tax-accountant", destination: "/services#property" },
  { source: "/tax-planning", destination: "/services#planning" },
  {
    source: "/small-business-accountants-brisbane-northside",
    destination: "/services#business",
  },

  // Articles — closest relevant page until/unless the Articles add-on is taken.
  { source: "/articles", destination: "/" },

  // Direct equivalents. (/privacy-policy keeps the same path on the new site,
  // so it needs no redirect.)
  { source: "/contact-us", destination: "/contact" },
];
