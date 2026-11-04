/**
 * Team / About content (proposal §2, About / Team page).
 *
 * All profiles are placeholders. TODO(client, Q6): confirm names, roles,
 * qualifications and supply professional photos. TODO(client, Q7): confirm
 * awards and community involvement, and testimonial display permissions.
 */

export type TeamMember = {
  name: string;
  role?: string;
  /** e.g. "Registered Tax Agent, CPA". Rendered only when set. */
  credentials?: string;
  /** Bio paragraphs. */
  bio?: string[];
  /** Path under /public, or empty for an initials fallback. */
  photo: string;
};

export const principal = {
  name: "Unni Ashok",
  role: "Founder",
  story:
    "Accountants Brisbane North was founded by Unni Ashok, a Chartered Accountant and registered tax agent with over 15 years' experience across industries from agriculture and trades to the medical profession. Today our team pairs deep technical expertise with the latest technology to deliver proactive, high-value advice to clients across Brisbane's north.",
  photo: "/team/Unni-1.jpg.webp",
};

// Team members with client-supplied photos (public/team) and bios.
// TODO(client, Q6): confirm the "Matt" photo belongs to Malcolm Hancock.
export const team: TeamMember[] = [
  {
    name: "Unni Ashok",
    role: "Founder",
    credentials: "Chartered Accountant & Registered Tax Agent",
    photo: "/team/Unni-1.jpg.webp",
    bio: [
      "Our founder, Unni is a registered tax agent and qualified Chartered Accountant with over 15 years' experience in the accounting industry, beginning his career with one of the “Big 4” accounting firms.",
      "He has since worked across many industries — agriculture, trades, the medical profession and retail among them — and has established himself as a tax-planning expert, pairing the latest technology and knowledge with business advisory services that deliver real value for his clients.",
      "Outside work, Unni is an active member of the community, serving not-for-profit organisations as a director, treasurer, board member and volunteer.",
    ],
  },
  {
    name: "Malcolm Hancock",
    role: "Senior Accountant",
    credentials: "CPA · Bachelor of Business (Accountancy)",
    photo: "/team/Matt.jpg.webp",
    bio: [
      "Malcolm has over 20 years' experience as a senior accounting professional in the corporate sector, across both financial and management accounting. He holds a Bachelor of Business in Accountancy and is a Certified Practising Accountant.",
      "His experience spans manufacturing, energy, FMCG, IT, property, agriculture and government, giving him a thorough understanding of accounting principles and their application to business. Malcolm specialises in system implementation and financial/management accounting, and is a strong advocate for process improvement and innovation.",
      "In his free time, Malcolm likes to spend time with his family and two young kids.",
    ],
  },
  {
    name: "Aayushi Gupta",
    role: "Accountant",
    credentials: "Bachelor of Commerce · CA candidate",
    photo: "/team/Aayushi-1.jpg.webp",
    bio: [
      "A Bachelor of Commerce graduate and CA candidate, Aayushi has over three years' experience in the accounting industry.",
      "She assists the team with tax planning, tax return preparation, bookkeeping and tax advisory services, and is always keen to develop her skills so she can provide the best and most informative client service.",
      "Outside of work, Aayushi enjoys quality time with family and friends.",
    ],
  },
  {
    name: "Danh Truong",
    role: "Accountant",
    credentials: "CPA",
    photo: "/team/Danh.jpg.webp",
    bio: [
      "A CPA with more than eight years' experience in taxation, Danh has in-depth knowledge of small business entities — especially health and medical professionals.",
      "He loves helping clients reduce costs by implementing the right strategies, and has a keen eye for detail and a knack for identifying potential issues and providing solutions.",
      "Away from work, Danh enjoys sport, including tennis and swimming.",
    ],
  },
  {
    name: "Y Dang",
    role: "Bookkeeper & Accounts Administrator",
    photo: "/team/Y.jpg.webp",
    bio: [
      "Y has over eight years' experience in full bookkeeping and accounting administration, with strong expertise in Xero and add-on tools to create automation and efficiency.",
      "She embraces new technology that reduces data entry and other low-value work, and loves keeping her clients' accounting data clean and up to date.",
      "Outside of work, Y attends yoga classes and takes care of her loving family.",
    ],
  },
  {
    name: "Huyen Ngo",
    role: "Graduate Accountant",
    photo: "/team/Huyen.jpg.webp",
    bio: [
      "Fresh out of university, Huyen is a fast learner who has quickly proven she will be a key part of our team, always placing her responsibilities first.",
      "She is keen to support clients with the most effective accounting and tax solutions, and finds that being an accountant has sharpened the analytical skills and attention to detail she applies in almost every area of life.",
      "She stays healthy and stress-free with early-morning beach runs, evening walks, reading, and time with friends and family.",
    ],
  },
];

export type Award = {
  /** Full award title (used for alt text and caption). */
  name: string;
  /** Badge image under /public. */
  image: string;
  width: number;
  height: number;
};

export const awards: Award[] = [
  {
    name: "Australian Accounting Awards 2022 — Public Accountant of the Year (Winner)",
    image: "/award2022.png",
    width: 283,
    height: 264,
  },
  {
    name: "2021 Stevie International Business Awards — Bronze Winner",
    image: "/stevie.png",
    width: 461,
    height: 470,
  },
  {
    name: "Xero Awards Finalist 2022",
    image: "/xero.png",
    width: 283,
    height: 264,
  },
];

export const community =
  "TODO(client, Q7): community involvement — sponsorships, local initiatives, memberships.";
