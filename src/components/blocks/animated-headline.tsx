"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const DURATION = 0.7;
// Time between loop replays (animation time + a pause), matching the source.
const CYCLE_MS = DURATION * 1000 + 3200;

/**
 * Hero headline with a staggered fade-up animation that gently re-plays on a
 * loop (adapted from text-animations-06). The last line is highlighted. Honours
 * prefers-reduced-motion by rendering the lines statically.
 */
export function AnimatedHeadline({
  lines,
  className,
  highlightClassName = "text-teal-300",
}: {
  lines: string[];
  className?: string;
  highlightClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <h1 key={cycle} className={cn("flex flex-col", className)}>
      {lines.map((line, index) => {
        const isHighlight = index === lines.length - 1;
        const content = (
          <span className={isHighlight ? highlightClassName : undefined}>
            {line}
          </span>
        );

        if (reduceMotion) return <span key={index}>{content}</span>;

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION,
              delay: index * DURATION * 0.4,
              ease: "easeOut",
            }}
          >
            {content}
          </motion.span>
        );
      })}
    </h1>
  );
}
