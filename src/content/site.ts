/**
 * Single source of truth for brand, NAP (Name / Address / Phone) and global CTAs.
 *
 * Every page and the JSON-LD schema read from here so the business details stay
 * consistent across the site and the Google Business Profile (an explicit SEO
 * requirement in the proposal). Swap the TODO(client) values once Section 8 of
 * the proposal is answered.
 */

export const site = {
  /** Consolidated single trading name (proposal §1 — three names collapse to one). */
  name: "Accountants Brisbane North",
  legalName: "Ashok Business Consulting Group", // TODO(client): confirm registered entity name
  tagline: "A sleek, responsive accounting partner for Brisbane's north.",
  description:
    "Registered tax agents and public accountants in Brisbane's north, helping medical professionals, property investors and small businesses with tax, planning and compliance.",

  /** Canonical production URL — update if a new domain is chosen (proposal Q11). */
  url: "https://accountantsbrisbanenorth.com.au",
  domain: "accountantsbrisbanenorth.com.au",
  locale: "en-AU",

  /** One primary CTA across the whole site (proposal §1 — single call-to-action). */
  primaryCta: {
    label: "Book a consultation",
    href: "/contact",
  },

  contact: {
    // Both numbers are published on the live site; the 07 number is the local primary.
    phone: {
      display: "07 3519 4250",
      href: "tel:+61735194250",
    },
    secondaryPhone: {
      display: "1300 082 695",
      href: "tel:1300082695",
    },
    // Published enquiry address on the live site (accountantsbrisbanenorth.com.au).
    email: "admin@stpaccountants.com",
    address: {
      // Office address from the live site's Contact page.
      street: "Mezzanine Level, 59 Albany Creek Rd",
      suburb: "Aspley",
      state: "QLD",
      postcode: "4034",
      country: "Australia",
    },
    // "By appointment only" (proposal §1).
    hours: "By appointment",
    // Google Business Profile (place cid) from the live site's Contact page.
    googleBusinessProfileUrl: "https://maps.google.com/?cid=3536269755341382424",
    // Left blank on purpose: MapEmbed derives a keyless embed from the address above.
    mapsEmbedUrl: "",
  },

  /** Under-used credibility the redesign should surface (proposal §1). */
  credibility: {
    googleRating: 4.9,
    googleReviewCount: 62,
    isXeroPartner: true,
    awardsNote: "Award-winning — Public Accountant of the Year 2022",
  },

  // TODO(client, Q21): compliance wording — Tax Practitioners Board (TPB) registration
  // number, professional-standards scheme statement, disclaimers.
  compliance: {
    abn: "", // TODO(client, Q12)
    tpbRegistration: "",
    professionalStandards: "",
    disclaimer:
      "Liability limited by a scheme approved under Professional Standards Legislation.", // TODO(client): confirm applicability.
  },
} as const;

export type Site = typeof site;
