import type { ReactElement } from "react";
import Image from "next/image";

// Service illustrations. Real isometric artwork (transparent PNGs) is used where available;
// the hand-drawn 3D fallback covers services whose illustration hasn't been added yet.
export type ServiceVariant = "accounting" | "hr" | "operations";

export const SERVICE_THEME: Record<ServiceVariant, { from: string; to: string }> = {
  accounting: { from: "#29AAE1", to: "#1583BC" }, // post-it blue
  hr: { from: "#EF5D9A", to: "#D33B78" }, // post-it pink
  operations: { from: "#8CC63F", to: "#63A12A" }, // post-it green
};

const NAVY = "#14213d";

// Real illustration assets as they arrive.
const ILLUSTRATION: Partial<Record<ServiceVariant, { src: string; alt: string }>> = {
  accounting: {
    src: "/media/il-accounting.png",
    alt: "Isometric illustration of an accounting workspace with charts, gold coins, a ledger, and a calculator",
  },
  hr: {
    src: "/media/il-hr.png",
    alt: "Isometric illustration of a human resources team with an org chart, ID badge, and checklist",
  },
  operations: {
    src: "/media/il-operations.png",
    alt: "Isometric illustration of business operations with a workflow, dashboard, gears, and document boxes",
  },
};

/* ---------------- 3D fallback: HR figures ---------------- */
function Figure({ cx, cy, r, opacity = 1 }: { cx: number; cy: number; r: number; opacity?: number }) {
  const sw = r * 1.5;
  const baseY = cy + r * 3.1;
  return (
    <g opacity={opacity} filter="url(#h-sh)">
      <path d={`M ${cx - sw} ${baseY} A ${sw} ${sw * 0.92} 0 0 1 ${cx + sw} ${baseY} Z`} fill="url(#h-body)" />
      <circle cx={cx} cy={cy} r={r} fill="url(#h-head)" />
      <ellipse cx={cx - r * 0.32} cy={cy - r * 0.38} rx={r * 0.34} ry={r * 0.24} fill="#ffffff" opacity="0.65" />
    </g>
  );
}
function Hr() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="h-head" cx="0.38" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e4ebf5" />
        </radialGradient>
        <linearGradient id="h-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d8e1ef" />
        </linearGradient>
        <filter id="h-sh" x="-40%" y="-20%" width="180%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#5a1030" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="120" cy="162" rx="92" ry="11" fill="#4c0d29" opacity="0.16" />
      <g transform="translate(0,28)">
        <Figure cx={66} cy={62} r={17} opacity={0.9} />
        <Figure cx={174} cy={62} r={17} opacity={0.9} />
        <Figure cx={120} cy={50} r={24} />
        <g filter="url(#h-sh)">
          <circle cx="158" cy="112" r="17" fill={NAVY} />
          <path d="M150 112 l5 5 l11 -12" stroke="#ffffff" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

/* ---------------- 3D fallback: Operations blocks ---------------- */
function isoCube(cx: number, topY: number, s: number) {
  const w = s;
  const h = s / 2;
  const d = s * 1.05;
  const top = `${cx},${topY} ${cx + w},${topY + h} ${cx},${topY + 2 * h} ${cx - w},${topY + h}`;
  const left = `${cx - w},${topY + h} ${cx},${topY + 2 * h} ${cx},${topY + 2 * h + d} ${cx - w},${topY + h + d}`;
  const right = `${cx + w},${topY + h} ${cx},${topY + 2 * h} ${cx},${topY + 2 * h + d} ${cx + w},${topY + h + d}`;
  return (
    <g filter="url(#o-sh)">
      <polygon points={right} fill="url(#o-right)" />
      <polygon points={left} fill="url(#o-left)" />
      <polygon points={top} fill="url(#o-top)" />
    </g>
  );
}
function Operations() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="o-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef2f8" />
        </linearGradient>
        <linearGradient id="o-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c7d3e5" />
          <stop offset="1" stopColor="#d7e0ee" />
        </linearGradient>
        <linearGradient id="o-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#aab9d1" />
          <stop offset="1" stopColor="#98a9c4" />
        </linearGradient>
        <filter id="o-sh" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#173d13" floodOpacity="0.28" />
        </filter>
      </defs>
      <ellipse cx="118" cy="162" rx="90" ry="11" fill="#173d13" opacity="0.16" />
      <g transform="translate(0,13)">
        {isoCube(150, 60, 30)}
        {isoCube(92, 78, 30)}
        {isoCube(121, 30, 30)}
        <g filter="url(#o-sh)">
          <circle cx="176" cy="126" r="16" fill={NAVY} />
          <path d="M169 126 l4.5 4.5 l10 -11" stroke="#ffffff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

const FALLBACK: Partial<Record<ServiceVariant, () => ReactElement>> = {
  hr: Hr,
  operations: Operations,
};

export default function ServiceGraphic({
  variant,
  className = "",
  bleed = false,
  bare = false,
}: {
  variant: ServiceVariant;
  className?: string;
  bleed?: boolean;
  bare?: boolean;
}) {
  const t = SERVICE_THEME[variant];
  const illo = ILLUSTRATION[variant];
  const Scene = FALLBACK[variant];

  // Bare: just the illustration (no panel, dots, or tape) — for use on an already-colored section.
  if (bare) {
    return (
      <div aria-hidden="true" className={`relative h-full w-full ${className}`}>
        {illo ? (
          <Image src={illo.src} alt={illo.alt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-contain" />
        ) : Scene ? (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Scene />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`relative h-full w-full ${bleed ? "" : "overflow-hidden"}`}>
      {/* colored panel: gradient + texture + tape, clipped & rounded to match its frame */}
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        style={{ backgroundImage: `linear-gradient(145deg, ${t.from} 0%, ${t.to} 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.95) 1.3px, transparent 1.6px)",
            backgroundSize: "15px 15px",
          }}
        />
        <svg aria-hidden="true" viewBox="0 0 88 24" width="84" height="23" className="absolute left-1/2 top-2 z-10 -translate-x-1/2 -rotate-3">
          <path d="M9 3 L80 3 L83 5 L78 7 L84 10 L79 13 L83 16 L78 18 L81 21 L9 21 L6 19 L11 16 L5 13 L10 10 L6 7 L11 5 Z" fill="rgba(255,255,255,0.3)" />
          <path d="M12 8 L78 8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* content: real illustration where available, else the 3D fallback */}
      {illo ? (
        bleed ? (
          <div className="absolute inset-0 z-10 origin-bottom translate-y-[13%] transition-transform duration-300 ease-out group-hover:scale-105">
            <Image
              src={illo.src}
              alt={illo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-contain p-3 md:p-5"
            />
          </div>
        ) : (
          <Image
            src={illo.src}
            alt={illo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-contain p-3 md:p-5"
          />
        )
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-4">{Scene ? <Scene /> : null}</div>
      )}
    </div>
  );
}
