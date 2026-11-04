/**
 * Team / About content (proposal §2, About / Team page).
 *
 * All profiles are placeholders. TODO(client, Q6): confirm names, roles,
 * qualifications and supply professional photos. TODO(client, Q7): confirm
 * awards and community involvement, and testimonial display permissions.
 */

export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  /** Path under /public, or empty for an initials fallback. */
  photo: string;
};

export const principal = {
  name: "Ashok", // TODO(client, Q6): confirm principal's full name.
  role: "Principal / Registered Tax Agent",
  story:
    "TODO(client, Q6): principal's story — background, why the firm was founded, and the approach clients can expect.",
  photo: "",
};

export const team: TeamMember[] = [
  {
    name: "Team member", // TODO(client, Q6)
    role: "Public Accountant",
    credentials: "Registered Tax Agent",
    bio: "TODO(client, Q6): short bio and qualifications.",
    photo: "",
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
