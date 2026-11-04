/**
 * "How We Work" content (proposal §2) — engagement process, tools and what
 * clients can expect. TODO(client, Q9): confirm the real onboarding process,
 * fee approach and tools used.
 */

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery call",
    description:
      "A no-obligation conversation to understand your situation, goals and the help you need.",
  },
  {
    title: "Onboarding",
    description:
      "We gather your details, set up secure access and agree a clear scope and fixed fee up front.",
  },
  {
    title: "Ongoing advice & compliance",
    description:
      "Year-round support — tax returns, BAS, bookkeeping and proactive advice when you need it.",
  },
  {
    title: "Annual review",
    description:
      "A yearly planning review to capture savings, check structure and set up the year ahead.",
  },
];

export const tools: string[] = [
  "Xero", // TODO(client, Q9): confirm software stack.
];

export const expectations: string[] = [
  "Fixed, agreed fees with no surprises",
  "Plain-English advice, not jargon",
  "A single point of contact who knows your file",
  "Responses within one business day",
];
