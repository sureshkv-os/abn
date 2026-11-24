"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Full-bleed background carousel for the hero: cross-fades through the supplied
 * images automatically on a timer. Decorative (aria-hidden) — it sits behind
 * the hero copy and gradient. Honours prefers-reduced-motion by holding on the
 * first image without cycling.
 */
export function HeroCarousel({
  images,
  intervalMs = 5500,
}: {
  images: StaticImageData[];
  intervalMs?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      intervalMs,
    );
    return () => clearInterval(timer);
  }, [reduceMotion, images.length, intervalMs]);

  return (
    <div aria-hidden className="-z-20 absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt=""
            fill
            priority={index === 0}
            placeholder="blur"
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
