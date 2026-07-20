"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

// An alternating image + copy feature row that slides its image in from its
// own side and lifts the copy as the row enters view. Respects reduced-motion.
export default function FeatureRow({
  index,
  imageSrc,
  imageAlt,
  name,
  summary,
  includes,
  imageLeft,
}: {
  index: number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  summary: string;
  includes: string;
  imageLeft: boolean;
}) {
  const reduce = useReducedMotion();
  const viewport = { once: true, amount: 0.3 } as const;

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <motion.div
        className={imageLeft ? "lg:order-1" : "lg:order-2"}
        initial={reduce ? false : { opacity: 0, x: imageLeft ? -48 : 48 }}
        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.75, ease: EASE }}
        whileHover={reduce ? undefined : { scale: 1.015 }}
      >
        <div className="relative">
          {/* Layered brass frame for depth */}
          <div
            aria-hidden="true"
            className={`absolute -z-10 top-5 h-full w-full rounded-3xl border border-brass-300/70 ${
              imageLeft ? "-left-5" : "-right-5"
            }`}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="img-grade w-full h-[300px] md:h-[380px] object-cover rounded-3xl shadow-premium-lg"
          />
        </div>
      </motion.div>

      <motion.div
        className={imageLeft ? "lg:order-2" : "lg:order-1"}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
      >
        <p className="font-serif text-4xl font-bold text-brass-400">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="mt-3 h-0.5 w-10 bg-brass-400" />
        <h3 className="mt-5 text-2xl md:text-3xl font-bold text-blue-900">{name}</h3>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">{summary}</p>
        <p className="mt-6 text-sm leading-relaxed text-gray-500">
          <span className="font-semibold text-brass-600">Includes </span>
          {includes}
        </p>
      </motion.div>
    </div>
  );
}
