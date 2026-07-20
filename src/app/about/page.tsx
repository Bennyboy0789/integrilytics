import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whoWeAre, whatWeDo, process, whereWeMeet, whoWeSupport } from "./content";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import Reveal from "../motion/Reveal";
import JsonLd, { SITE, breadcrumb } from "../JsonLd";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";

export const metadata: Metadata = {
  title: "About IntegriLytics | Who We Are, How We Work, Who We Serve",
  description:
    "Integrity plus analytics. Meet IntegriLytics: who we are, what we do, our five-step process, how and where we work, and the industries we support nationwide.",
  alternates: { canonical: "https://integrilytics.vercel.app/about" },
};

const serviceImg: Record<string, string> = {
  Accounting: "/media/svc-accounting.jpg",
  "Human Resources": "/media/svc-hr.jpg",
  "Operational Oversight": "/media/svc-operations.jpg",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About IntegriLytics",
          description:
            "Who we are, what we do, our five-step process, how and where we work, and the industries we support nationwide.",
          url: `${SITE}/about`,
          mainEntity: { "@type": "Organization", name: "IntegriLytics", url: SITE },
        }}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <SiteHeader sticky />

      {/* Hero */}
      <section className="px-6 pt-12 pb-20 bg-gradient-to-b from-brass-50 to-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="rule-brass text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
              About IntegriLytics
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight">
              {whoWeAre.headline}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{whoWeAre.intro}</p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-premium"
              >
                Get a Free Consultation
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative" delay={0.12}>
            <div
              aria-hidden="true"
              className="absolute -z-10 -right-5 top-5 h-full w-full rounded-3xl border border-brass-300/70"
            />
            <Image
              src="/media/about-team.jpg"
              alt="The IntegriLytics team reviewing a plan together"
              width={1400}
              height={900}
              priority
              className="img-grade w-full h-[320px] md:h-[440px] object-cover rounded-3xl shadow-premium-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Integrity + Analytics */}
      <section className="px-6 py-24 bg-cream">
        <Reveal className="max-w-3xl mx-auto text-center mb-14">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Our name says it
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Integrity, plus Analytics</h2>
        </Reveal>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal className="rounded-3xl bg-white border border-cream-200 shadow-premium p-8">
            <h3 className="font-serif text-2xl font-bold text-brass-600">Integrity</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{whoWeAre.integrity}</p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-3xl bg-white border border-cream-200 shadow-premium p-8">
            <h3 className="font-serif text-2xl font-bold text-brass-600">Analytics</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{whoWeAre.analytics}</p>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-24 bg-cream-100">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Three ways we take work off your plate
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{whatWeDo.intro}</p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {whatWeDo.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={serviceImg[s.title]}
                    alt={`${s.title} services at IntegriLytics`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-grade object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-brass-400" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-blue-900">{s.title}</h3>
                  <p className="mt-3 flex-1 text-gray-600 leading-relaxed">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-600 group-hover:gap-3 transition-all">
                    Explore {s.title}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Do It */}
      <section className="px-6 py-24 bg-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Reveal>
            <p className="rule-brass text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
              How we do it
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">{process.headline}</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{process.intro}</p>
          </Reveal>
          <Reveal className="relative" delay={0.12}>
            <div
              aria-hidden="true"
              className="absolute -z-10 -right-5 top-5 h-full w-full rounded-3xl border border-brass-300/70"
            />
            <Image
              src="/media/about-collab.jpg"
              alt="Two colleagues reviewing financials together"
              width={1400}
              height={900}
              className="img-grade w-full h-[280px] md:h-[360px] object-cover rounded-3xl shadow-premium-lg"
            />
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto space-y-14">
          {process.phases.map((phase, i) => (
            <Reveal key={phase.step}>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <span className="font-serif text-5xl font-bold text-brass-400 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 border-l-2 border-cream-200 pl-6 sm:pl-8">
                  <h3 className="text-2xl font-bold text-blue-900">{phase.step}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{phase.desc}</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {phase.groups.map((g) => (
                      <div key={g.name}>
                        <h4 className="font-semibold text-blue-900">{g.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">{g.items.join("  ·  ")}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Where We Meet */}
      <section className="px-6 py-24 bg-cream-100">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Where we meet
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Work with us your way</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{whereWeMeet.intro}</p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {whereWeMeet.modes.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-cream-200 bg-white p-8 shadow-premium">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{m.title}</h3>
                <p className="text-gray-600 leading-relaxed">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="max-w-3xl mx-auto mt-10 rounded-3xl bg-white border border-cream-200 p-8 text-center shadow-premium">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Choose How We Meet</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {whereWeMeet.meetingOptions.map((opt) => (
              <span
                key={opt}
                className="px-5 py-2 rounded-full bg-brass-100 text-brass-700 text-sm font-semibold"
              >
                {opt}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-500 max-w-xl mx-auto">{whereWeMeet.travelNote}</p>
        </Reveal>
      </section>

      {/* Who We Support */}
      <section className="px-6 py-24 bg-cream">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Who we support
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Built to meet you where you are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{whoWeSupport.tagline}</p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {whoWeSupport.props.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-cream-200 bg-white p-8 shadow-premium">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Supporting diverse industries</h3>
        </Reveal>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-14 gap-y-10">
          {whoWeSupport.industries.map((cat, i) => (
            <Reveal key={cat.name} className="border-t-2 border-brass-200 pt-6" delay={(i % 2) * 0.08}>
              <h3 className="text-lg font-bold text-blue-900">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{cat.items.join("  ·  ")}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-2xl mx-auto text-center mt-14">
          <h3 className="text-xl font-bold text-blue-900 mb-2">{"Don't see your industry?"}</h3>
          <p className="text-gray-600">{whoWeSupport.noIndustryNote}</p>
        </Reveal>
      </section>

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
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-brass-50 transition-colors"
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
