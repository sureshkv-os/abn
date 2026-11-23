"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Root template — remounts with a fresh key on every top-level route change
 * (see node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/template.md),
 * so this gives each page a gentle fade/appear transition on navigation and
 * first load. Honours prefers-reduced-motion by rendering statically.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
