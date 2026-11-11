import * as React from "react";
import type { Accent } from "@/lib/palette";
import { cn } from "@/lib/utils";

/**
 * Wraps a (lucide) icon in a soft pastel rounded tile. Centralises the
 * repeated `grid place-items-center rounded-xl {accent.bg} {accent.fg}`
 * pattern so every tinted icon across the site stays consistent.
 */
const sizeClasses = {
  9: "size-9",
  12: "size-12",
} as const;

export function IconTile({
  accent,
  size = 12,
  className,
  children,
}: {
  accent: Accent;
  /** Tile dimensions (Tailwind size-*). Defaults to 12 (48px). */
  size?: keyof typeof sizeClasses;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-xl",
        sizeClasses[size],
        accent.bg,
        accent.fg,
        className,
      )}
    >
      {children}
    </span>
  );
}
