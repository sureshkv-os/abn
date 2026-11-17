import { site } from "@/content/site";
import { services } from "@/content/services";

/**
 * JSON-LD structured data (schema.org) — AccountingService / LocalBusiness with
 * consistent NAP, hours and services (proposal §2). Rendered site-wide from the
 * root layout. Values read from the single source of truth in content/site.ts.
 */
export function accountingServiceSchema() {
  const { contact } = site;
  const sameAs = [contact.googleBusinessProfileUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: contact.phone.display,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street || undefined,
      addressLocality: contact.address.suburb,
      addressRegion: contact.address.state,
      postalCode: contact.address.postcode || undefined,
      addressCountry: "AU",
    },
    areaServed: "Brisbane, Queensland, Australia",
    ...(sameAs.length ? { sameAs } : {}),
    // No aggregateRating: we don't have a reliable live review count, and
    // self-serving ratings aren't eligible for Google rich results anyway.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  };
}

/** BreadcrumbList for a given page (home is implicit root). */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/** Render helper: a <script type="application/ld+json"> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
