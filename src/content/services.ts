/**
 * The four services shown as separated, anchored sections on the Services page
 * (proposal §2). Content is placeholder copy under the single trading name —
 * replace with final copy once the client confirms (proposal Q5/Q8).
 */

export type Service = {
  /** URL anchor on /services, e.g. #medical */
  slug: string;
  title: string;
  /** Who this service is for (proposal §2). */
  audience: string;
  summary: string;
  /** "What's included" bullets. */
  includes: string[];
  /** Short case-study highlight (TODO(client): confirm permission, Q7). */
  caseStudy?: string;
};

export const services: Service[] = [
  {
    slug: "medical",
    title: "Medical accountants",
    audience: "Doctors, specialists, dentists and allied-health professionals.",
    summary:
      "Specialist tax and accounting for medical professionals — from registrars starting out to established practice owners.",
    includes: [
      "Service entities and practice structuring",
      "Income protection and superannuation strategy",
      "Tax returns and BAS for sole traders and companies",
      "Cash-flow and compliance for growing practices",
    ],
    // No medical-sector case study on the old site yet. TODO(client): supply one.
  },
  {
    slug: "property",
    title: "Property tax",
    audience: "Property investors and developers.",
    summary:
      "Make the most of your property investments with structuring, negative gearing and capital-gains planning done right.",
    includes: [
      "Investment structuring (trusts, SMSFs, companies)",
      "Negative gearing and deduction optimisation",
      "Capital gains tax planning on sale",
      "Depreciation and property-portfolio reporting",
    ],
    // No property-investor case study on the old site yet. TODO(client): supply one.
  },
  {
    slug: "planning",
    title: "Tax planning",
    audience: "Businesses and individuals who want to pay less tax, legally.",
    summary:
      "Proactive, year-round tax planning so there are no surprises at tax time and every legitimate saving is captured.",
    includes: [
      "Annual pre-30-June tax-planning review",
      "Entity and distribution strategy",
      "Superannuation contribution planning",
      "Forecasting and tax-liability estimates",
    ],
    // Condensed from the live site's "first home buyers" case study.
    caseStudy:
      "Working alongside banks, lenders and mortgage brokers, we helped first-home buyers get the balance right between income and tax and present a clear income-and-expenses picture for lenders. Clients who came to us before year-end left with a tax-smart pathway to their first home.",
  },
  {
    slug: "business",
    title: "Business accounting",
    audience: "Small and growing businesses across Brisbane's north.",
    summary:
      "End-to-end accounting, bookkeeping and advisory to keep your business compliant and growing.",
    includes: [
      "Financial statements and company tax returns",
      "BAS, GST and payroll compliance",
      "Xero setup, training and bookkeeping",
      "Ongoing advisory and quarterly reviews",
    ],
    // Condensed from the live site's "building industry" case study (personal
    // details intentionally omitted).
    caseStudy:
      "A builder operating under the wrong structure faced penalties, fines and a potential criminal conviction for unmet compliance obligations. On our advice he moved to a more suitable trading structure — removing that exposure and saving an estimated $10,000 a year in cash flow.",
  },
];
