/**
 * Featured client reviews for the Home and About pages (proposal §2 — surface
 * the 4.9-star / 62-review credibility that the current site buries).
 *
 * TODO(client, Q7/Q19): confirm permission to display these names/quotes, and
 * decide whether to show live Google reviews via a widget instead of these
 * static highlights. These placeholders stand in until then.
 */

export type Review = {
  author: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    author: "Placeholder client", // TODO(client, Q7)
    rating: 5,
    quote:
      "TODO(client): a short, approved testimonial highlighting responsiveness and expertise.",
  },
  {
    author: "Placeholder client",
    rating: 5,
    quote:
      "TODO(client): a short, approved testimonial from a medical or small-business client.",
  },
  {
    author: "Placeholder client",
    rating: 5,
    quote:
      "TODO(client): a short, approved testimonial about tax savings or clear advice.",
  },
];
