import type { Metadata } from "next";
import { site } from "@/content/site";

const baseUrl = site.url;

/**
 * Build per-page Metadata with a unique title/description, canonical URL and
 * Open Graph + Twitter cards (proposal §2 SEO requirements).
 *
 * @param path   Route path beginning with "/", used for the canonical URL.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
  const fullTitle = path === "/" ? `${site.name} — ${title}` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: "/hero.png", width: 1376, height: 768 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/hero.png"],
    },
  };
}

/** Root metadata applied in layout (title template + defaults). */
export const rootMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — Accountants in Brisbane's North`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: baseUrl,
    images: [{ url: "/hero.png", width: 1376, height: 768 }],
  },
  icons: { icon: "/logo.ico" },
  robots: { index: true, follow: true },
};
