"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { ServiceVariant } from "../ServiceGraphic";

const DUCK: Record<ServiceVariant, { src: string; alt: string }> = {
  accounting: { src: "/media/Blue-Duck.png", alt: "" },
  hr: { src: "/media/Pink-Duck.png", alt: "" },
  operations: { src: "/media/Green-Duck.png", alt: "" },
};

// A paper duck that slides out from behind the service illustration on page load.
export default function HeroDuck({ variant }: { variant: ServiceVariant }) {
  const reduce = useReducedMotion();
  const d = DUCK[variant];
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-[9%] right-[-3%] z-0 w-[46%]"
      initial={reduce ? false : { opacity: 0, x: -54, y: 52, scale: 0.75, rotate: -7 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      transition={{ delay: 0.55, type: "spring", stiffness: 90, damping: 13 }}
    >
      <Image
        src={d.src}
        alt={d.alt}
        width={540}
        height={540}
        className="h-auto w-full drop-shadow-[0_14px_24px_rgba(20,33,61,0.32)]"
      />
    </motion.div>
  );
}
