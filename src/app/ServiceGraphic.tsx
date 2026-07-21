import type { ReactElement } from "react";

// Custom, on-brand 3D-style service icons rendered as inline SVG (self-hosted,
// razor-sharp at any size, ~zero page weight). Sticky-note colored panel ties back to the
// hero; objects are shaded with gradients + soft shadows for depth. Purely decorative.
export type ServiceVariant = "accounting" | "hr" | "operations";

const THEME: Record<ServiceVariant, { from: string; to: string }> = {
  accounting: { from: "#29AAE1", to: "#1583BC" }, // post-it blue
  hr: { from: "#EF5D9A", to: "#D33B78" }, // post-it pink
  operations: { from: "#8CC63F", to: "#63A12A" }, // post-it green
};

const NAVY = "#14213d";

/* ---------------- Accounting: 3D column chart + brass coin stack ---------------- */
function Accounting() {
  const bars = [
    { x: 34, y: 98, h: 54 },
    { x: 72, y: 78, h: 74 },
    { x: 110, y: 54, h: 98 },
  ];
  const coins = [148, 136, 124];
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="a-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cfe0f1" />
        </linearGradient>
        <radialGradient id="a-cointop" cx="0.4" cy="0.32" r="0.85">
          <stop offset="0" stopColor="#f6e3b6" />
          <stop offset="1" stopColor="#c99a53" />
        </radialGradient>
        <linearGradient id="a-coinside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99a54" />
          <stop offset="1" stopColor="#8f6931" />
        </linearGradient>
        <filter id="a-sh" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0a2440" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="120" cy="162" rx="92" ry="11" fill="#0a2440" opacity="0.15" />
      {/* 3D cylinder bars */}
      <g filter="url(#a-sh)">
        {bars.map((b) => (
          <g key={b.x}>
            <rect x={b.x} y={b.y} width="28" height={b.h} rx="9" fill="url(#a-bar)" />
            <ellipse cx={b.x + 14} cy={b.y} rx="14" ry="5" fill="#ffffff" />
          </g>
        ))}
      </g>
      {/* trend line */}
      <path d="M48 106 L86 84 L124 58" stroke={NAVY} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="124" cy="58" r="6.5" fill={NAVY} />
      {/* brass coin stack */}
      <g filter="url(#a-sh)">
        {coins.map((cy) => (
          <g key={cy}>
            <ellipse cx="182" cy={cy + 9} rx="30" ry="10.5" fill="url(#a-coinside)" />
            <rect x="152" y={cy} width="60" height="9" fill="url(#a-coinside)" />
            <ellipse cx="182" cy={cy} rx="30" ry="10.5" fill="url(#a-cointop)" />
          </g>
        ))}
        <text x="182" y="131" fontSize="22" fontWeight="700" fill={NAVY} textAnchor="middle" fontFamily="Georgia, serif">
          $
        </text>
      </g>
    </svg>
  );
}

/* ---------------- HR: glossy 3D figures ---------------- */
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
        {/* check badge */}
        <g filter="url(#h-sh)">
          <circle cx="158" cy="112" r="17" fill={NAVY} />
          <path d="M150 112 l5 5 l11 -12" stroke="#ffffff" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

/* ---------------- Operations: isometric 3D blocks + check ---------------- */
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
        {/* back-right block */}
        {isoCube(150, 60, 30)}
        {/* front-left block */}
        {isoCube(92, 78, 30)}
        {/* top block */}
        {isoCube(121, 30, 30)}
        {/* check badge */}
        <g filter="url(#o-sh)">
          <circle cx="176" cy="126" r="16" fill={NAVY} />
          <path d="M169 126 l4.5 4.5 l10 -11" stroke="#ffffff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

const SCENES: Record<ServiceVariant, () => ReactElement> = {
  accounting: Accounting,
  hr: Hr,
  operations: Operations,
};

export default function ServiceGraphic({
  variant,
  className = "",
}: {
  variant: ServiceVariant;
  className?: string;
}) {
  const t = THEME[variant];
  const Scene = SCENES[variant];
  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(145deg, ${t.from} 0%, ${t.to} 100%)` }}
    >
      {/* paper dot texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.95) 1.3px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      {/* torn tape strip (sticky-note cue) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 88 24"
        width="84"
        height="23"
        className="absolute left-1/2 top-2 z-10 -translate-x-1/2 -rotate-3"
      >
        <path
          d="M9 3 L80 3 L83 5 L78 7 L84 10 L79 13 L83 16 L78 18 L81 21 L9 21 L6 19 L11 16 L5 13 L10 10 L6 7 L11 5 Z"
          fill="rgba(255,255,255,0.3)"
        />
        {/* subtle sheen */}
        <path d="M12 8 L78 8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {/* illustration */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Scene />
      </div>
    </div>
  );
}
