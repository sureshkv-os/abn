/**
 * Subtle pastel palette tokens (defined in globals.css). Each entry pairs a
 * soft tinted background with a readable same-hue foreground, for icon tiles,
 * cards and accents. Use `accents` to rotate through them, or `serviceAccent`
 * to keep a service's colour consistent across pages.
 */
export type Accent = {
  /** Pastel surface, e.g. an icon tile or card tint. */
  bg: string;
  /** Readable foreground for icons/text on that surface. */
  fg: string;
  /** Same-hue border, for thin card/list accents (uses the foreground hue). */
  border: string;
  /** Saturated same-hue fill (the foreground hue as a background), for small
   * solid marks like a rule under a heading — the pastel `bg` is too faint. */
  solid: string;
};

export const accents = [
  { bg: "bg-mint", fg: "text-mint-foreground", border: "border-mint-foreground", solid: "bg-mint-foreground" },
  { bg: "bg-sky", fg: "text-sky-foreground", border: "border-sky-foreground", solid: "bg-sky-foreground" },
  { bg: "bg-lavender", fg: "text-lavender-foreground", border: "border-lavender-foreground", solid: "bg-lavender-foreground" },
  { bg: "bg-peach", fg: "text-peach-foreground", border: "border-peach-foreground", solid: "bg-peach-foreground" },
  { bg: "bg-rose", fg: "text-rose-foreground", border: "border-rose-foreground", solid: "bg-rose-foreground" },
] as const satisfies readonly Accent[];

/** Single house accent for non-service areas (keeps the site cohesive). */
export const houseAccent: Accent = accents[1]; // sky

/** Stable pastel per service slug (shared by home cards and /services). */
const serviceAccents: Record<string, Accent> = {
  medical: accents[0],
  property: accents[1],
  planning: accents[2],
  business: accents[3],
};

export function serviceAccent(slug: string): Accent {
  return serviceAccents[slug] ?? accents[accents.length - 1];
}

/** Rotate through the palette by index (wraps). */
export function accentAt(index: number): Accent {
  return accents[index % accents.length];
}
