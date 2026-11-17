/**
 * Featured client reviews for the Home and About pages (proposal §2 — surface
 * the 4.9-star / 62-review credibility that the current site buries).
 *
 * Quotes below are real Google reviews surfaced on the current site's
 * Testimonials page. TODO(client, Q7/Q19): confirm you're happy to feature
 * these named reviews here, or swap for a live Google reviews widget.
 */

export type Review = {
  author: string;
  rating: number;
  quote: string;
  /**
   * Optional profile photo under /public (e.g. "/reviews/elise.webp"). When
   * omitted, the testimonials section shows an initials avatar instead.
   */
  avatar?: string;
};

export const reviews: Review[] = [
  {
    author: "Elise Thomson",
    rating: 5,
    quote:
      "We recommend Unni to everyone we know who has a small business. Knowledgeable, friendly and solution based.",
    // Saved from the reviewer's public Google profile photo for reliability
    // (the original googleusercontent URL is not stable).
    avatar: "/reviews/elise-thomson.png",
  },
  {
    author: "Mark Van Horssen",
    rating: 5,
    quote:
      "Unni has been working effectively with me to improve my business for over 6 years now.",
  },
  {
    author: "Tim Allen",
    rating: 5,
    quote:
      "Unni saved me about $35,000 in CGT tax from the sale of a townhouse.",
  },
];
