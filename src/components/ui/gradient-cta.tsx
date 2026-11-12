import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Primary call-to-action with a slowly rotating brand gradient border
 * (navy → teal) over a solid button face. Renders as a Next.js Link and
 * matches the `lg` button size (h-11, rounded-xl) so it sits alongside the
 * other hero buttons. The border is decorative and stops rotating for users
 * who prefer reduced motion.
 */
export function GradientCta({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl px-6 text-base font-medium text-foreground",
        className,
      )}
    >
      {/* Rotating gradient border (decorative) */}
      <span
        aria-hidden
        className="absolute inset-0 z-0 overflow-hidden rounded-xl bg-border"
      >
        <span className="absolute top-1/2 left-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin animation-duration-[5s] bg-[conic-gradient(from_0deg,transparent_0%,transparent_35%,var(--color-teal-400)_50%,transparent_65%,transparent_85%,var(--primary)_100%)] motion-reduce:animate-none" />
        <span className="absolute inset-[2px] rounded-[calc(var(--radius)-2px)] bg-background" />
      </span>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}
