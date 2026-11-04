/**
 * Short FAQ for the How We Work page (proposal §2). Placeholder Q&A —
 * TODO(client): confirm answers (fees, onboarding, locations).
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Do you work with clients outside Brisbane's north?",
    answer:
      "Yes. We meet by appointment and work with clients across Australia using secure online tools, so you don't need to be local.",
  },
  {
    question: "How are your fees structured?",
    answer:
      "We agree a fixed fee up front after the discovery call, so you always know the cost before work begins. TODO(client, Q9): confirm fee approach.",
  },
  {
    question: "Which accounting software do you use?",
    answer:
      "We're a Xero partner and can set you up, migrate your data and train your team. TODO(client, Q9): confirm supported platforms.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a consultation and we'll have a no-obligation chat about your situation and how we can help.",
  },
];
