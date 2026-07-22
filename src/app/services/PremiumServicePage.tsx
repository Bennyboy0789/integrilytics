import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import Reveal from "../motion/Reveal";
import FeatureRow from "../motion/FeatureRow";
import SiteFooter from "../SiteFooter";
import ServiceGraphic, { type ServiceVariant, SERVICE_THEME } from "../ServiceGraphic";
import HeroDuck from "./HeroDuck";
import JsonLd, { serviceSchema, breadcrumb } from "../JsonLd";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";

export type FeatureRowData = {
  name: string;
  summary: string;
  includes: string;
  image: string;
  alt: string;
};

export type SpecializedData = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: { name: string; detail: string }[];
};

export type ServiceFaq = { q: string; a: string };

export default function PremiumServicePage({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  coreEyebrow,
  coreHeading,
  rows,
  specialized,
  faqs,
  graphic,
  path,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  coreEyebrow: string;
  coreHeading: string;
  rows: FeatureRowData[];
  specialized?: SpecializedData;
  faqs?: ServiceFaq[];
  graphic?: ServiceVariant;
  path: string;
}) {
  const color = graphic ? SERVICE_THEME[graphic] : null;
  return (
    <main className="min-h-screen bg-cream">
      <JsonLd data={serviceSchema({ name: eyebrow, description: intro, path })} />
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: eyebrow, path },
        ])}
      />
      {faqs && faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <SiteHeader sticky />

      {/* Hero */}
      <section
        className={`relative overflow-hidden px-6 pt-12 pb-20 ${color ? "" : "bg-gradient-to-b from-brass-50 to-cream"}`}
        style={color ? { background: `linear-gradient(145deg, ${color.from} 0%, ${color.to} 100%)` } : undefined}
      >
        {color ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.95) 1.4px, transparent 1.7px)",
              backgroundSize: "16px 16px",
            }}
          />
        ) : null}
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Link href="/#services" className="text-sm font-semibold text-blue-900 hover:text-blue-950">
              ← All services
            </Link>
            <p className="rule-brass mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight [text-shadow:0_1px_10px_rgba(20,33,61,0.18)]">
              {title}
            </h1>
            <p className="mt-6 text-lg text-blue-900/90 leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-950 transition-colors shadow-premium"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/book"
                className="inline-block px-8 py-3 border-2 border-blue-900/40 text-blue-900 rounded-full font-semibold hover:border-blue-900 hover:bg-white/20 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative" delay={0.12}>
            {graphic ? (
              <div className="relative h-[300px] md:h-[440px] w-full">
                <HeroDuck variant={graphic} />
                <div className="relative z-10 h-full w-full">
                  <ServiceGraphic variant={graphic} bare />
                </div>
              </div>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute -z-10 -right-5 top-5 h-full w-full rounded-3xl border border-brass-300/70"
                />
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  width={1200}
                  height={900}
                  priority
                  className="img-grade w-full h-[320px] md:h-[440px] object-cover rounded-3xl shadow-premium-lg"
                />
              </>
            )}
          </Reveal>
        </div>
      </section>

      {/* Core services — alternating image + copy feature rows */}
      <section className="px-6 py-24 bg-cream">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            {coreEyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">{coreHeading}</h2>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-24">
          {rows.map((row, i) => (
            <FeatureRow
              key={row.name}
              index={i}
              imageSrc={row.image}
              imageAlt={row.alt}
              name={row.name}
              summary={row.summary}
              includes={row.includes}
              imageLeft={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Optional specialized services — carded grid */}
      {specialized && (
        <section className="px-6 py-24 bg-cream-100">
          <Reveal className="max-w-3xl mx-auto text-center mb-14">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
              {specialized.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">{specialized.heading}</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{specialized.intro}</p>
          </Reveal>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {specialized.items.map((item, i) => (
              <Reveal
                key={item.name}
                className="relative rounded-2xl bg-white border border-cream-200 shadow-premium p-7 pl-8"
                delay={(i % 2) * 0.1}
              >
                <div className="absolute left-0 top-7 bottom-7 w-1 rounded-full bg-brass-400" />
                <h3 className="text-xl font-bold text-blue-900">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Service FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="px-6 py-24 bg-cream-100">
          <Reveal className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Questions, answered</h2>
            </div>
            <div className="rounded-3xl bg-white shadow-premium border border-cream-200 px-6 sm:px-8 divide-y divide-cream-200">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-blue-900">
                    {f.q}
                    <span className="ml-4 text-2xl leading-none text-brass-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-28 bg-blue-950 text-white text-center">
        <Image src="/media/bg-office.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-blue-950/85" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brass-500/10 blur-3xl"
        />
        <Reveal className="relative z-10 max-w-2xl mx-auto">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-300 mb-5">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{"Ready? Let's Do This"}</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us where it hurts and we will show you where you can save time, money, or both.
            Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get a Free Consultation
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block px-8 py-3 border border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
