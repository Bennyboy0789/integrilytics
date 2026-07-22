// Embedded Google Map of the IntegriLytics office. Lazy-loaded so it doesn't
// block initial render, but visible immediately with no click required.
const ADDRESS_QUERY = "IntegriLytics, Inc., 225 Green Street, Suite 601-F, Fayetteville, NC 28311";
const EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS_QUERY
)}&z=15&output=embed`;

type Tone = "dark" | "light";

const WRAP: Record<Tone, string> = {
  dark: "border-white/10 bg-blue-950",
  light: "border-cream-200 bg-cream-100",
};

export default function LocationMap({ tone = "dark" }: { tone?: Tone }) {
  return (
    <div className={`relative h-[300px] md:h-[360px] w-full overflow-hidden rounded-3xl border shadow-premium-lg ${WRAP[tone]}`}>
      <iframe
        title="Map to the IntegriLytics office at 225 Green Street, Fayetteville, NC"
        src={EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
