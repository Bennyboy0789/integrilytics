"use client";

import { useState } from "react";

// Privacy- and performance-friendly Google Map: nothing loads from Google until
// the visitor clicks. The facade is a lightweight styled preview that adapts to
// dark (navy) or light (cream) sections.
const ADDRESS_QUERY = "IntegriLytics, Inc., 225 Green Street, Suite 601-F, Fayetteville, NC 28311";
const EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS_QUERY
)}&z=15&output=embed`;

type Tone = "dark" | "light";

const TONES: Record<Tone, { wrap: string; title: string; sub: string; pill: string }> = {
  dark: {
    wrap: "border-white/10 bg-blue-950",
    title: "text-white",
    sub: "text-blue-200",
    pill: "border-white/20 text-brass-300 group-hover:border-brass-400/50 group-hover:bg-white/5",
  },
  light: {
    wrap: "border-cream-200 bg-cream-100",
    title: "text-blue-900",
    sub: "text-gray-500",
    pill: "border-brass-300 text-brass-700 group-hover:border-brass-400 group-hover:bg-brass-50",
  },
};

export default function LocationMap({ tone = "dark" }: { tone?: Tone }) {
  const [loaded, setLoaded] = useState(false);
  const t = TONES[tone];

  return (
    <div className={`relative h-[300px] md:h-[360px] w-full overflow-hidden rounded-3xl border shadow-premium-lg ${t.wrap}`}>
      {loaded ? (
        <iframe
          title="Map to the IntegriLytics office at 225 Green Street, Fayetteville, NC"
          src={EMBED_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label="Load the interactive Google Map of our Fayetteville office"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(176,141,87,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,.7) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-500/10 blur-2xl"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brass-500/15 text-brass-500 transition-transform group-hover:scale-110">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
              <circle cx="12" cy="11" r="2.2" />
            </svg>
          </span>
          <span className="relative">
            <span className={`block font-semibold ${t.title}`}>View map</span>
            <span className={`mt-1 block text-sm ${t.sub}`}>225 Green Street, Fayetteville, NC</span>
          </span>
          <span className={`relative mt-1 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${t.pill}`}>
            Load interactive map
          </span>
        </button>
      )}
    </div>
  );
}
