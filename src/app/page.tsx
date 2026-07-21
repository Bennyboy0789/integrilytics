import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Testimonials from "./Testimonials";
import LocationMap from "./LocationMap";
import ServiceGraphic from "./ServiceGraphic";

const SITE_URL = "https://www.integrilyticsinc.com";
const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";
const EMAIL = "info@integrilyticsinc.com";

const services = [
  {
    title: "Accounting",
    href: "/services/accounting",
    variant: "accounting" as const,
    description:
      "Your books, done right. Monthly reconciliation, tax-ready financials, and planning that catches problems before they cost you money. Stop dreading tax season and stop guessing where you stand. You get clean numbers on time, plus a clear read on what they mean for your next decision.",
  },
  {
    title: "Human Resources",
    href: "/services/hr",
    variant: "hr" as const,
    description:
      "People problems, handled. Payroll that runs on time, benefits and compliance that hold up, handbooks and hiring that protect you. When someone quits, gets hired, or files a complaint, you have a plan instead of a panic. Spend less time refereeing and more time running the business.",
  },
  {
    title: "Operational Oversight",
    href: "/services/operations",
    variant: "operations" as const,
    description:
      "Well-run businesses don't happen by accident. We build the systems, processes, and daily structure that keep things moving. Office setup, SOPs, software, planning, and performance tracking. You get an organized operation and someone who owns the details, so nothing slips through the cracks.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us about your business",
    body: "A quick call or a short form. We learn how your business runs and where it hurts.",
  },
  {
    n: "2",
    title: "We build your plan",
    body: "A custom roadmap for your accounting, HR, or strategy. Built around your goals, not a template.",
  },
  {
    n: "3",
    title: "You run your business",
    body: "We handle the numbers and the people. You focus on growth.",
  },
];

const trustMarkers = [
  {
    icon: "phone" as const,
    title: "Real people, not a call center",
    body: "A US-based team that actually answers. You get a real person and a direct line, not a phone tree, wherever your business is.",
  },
  {
    icon: "team" as const,
    title: "One team, one point of contact",
    body: "Accounting, HR, and operations under one roof. No handoffs, no finger-pointing between vendors.",
  },
  {
    icon: "building" as const,
    title: "Built for small business",
    body: "Small and mid-sized companies are our focus, not an afterthought. You get senior attention, not a junior handed your account.",
  },
];

const lineIcons: Record<"phone" | "team" | "building", ReactElement> = {
  phone: (
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  ),
  team: (
    <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  ),
  building: (
    <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  ),
};

const affiliations = [
  { src: "/media/aff-chamber-fayetteville.png", alt: "Greater Fayetteville Chamber member", w: 490, h: 232 },
  { src: "/media/aff-calcpa.png", alt: "CalCPA, California Society of CPAs, member", w: 297, h: 157 },
  { src: "/media/aff-cfcia.png", alt: "CFCIA, California Financial Crimes Investigators Association, member", w: 132, h: 115 },
  { src: "/media/aff-quickbooks-proadvisor.png", alt: "Intuit QuickBooks Certified ProAdvisor", w: 312, h: 336 },
  { src: "/media/aff-acfe.jpg", alt: "ACFE, Association of Certified Fraud Examiners, member", w: 170, h: 65 },
];

const faqs = [
  {
    q: "What accounting services do you offer?",
    a: "Bookkeeping, monthly reconciliation, tax preparation and filing, financial statements, and planning. We keep your books clean and your business ready for tax season and big decisions.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. Small and mid-sized businesses across the country are who we serve best. You get senior attention, not a junior handed your account.",
  },
  {
    q: "What HR services do small businesses need?",
    a: "Most need payroll, benefits administration, compliance, employee handbooks, and hiring or termination support. We cover all of it so one mistake does not turn into a lawsuit or a fine.",
  },
  {
    q: "Where are you located?",
    a: "We are based in Fayetteville, North Carolina, and work with clients nationwide. Most of our work is remote, with on-site support when it makes sense.",
  },
  {
    q: "How much do your services cost?",
    a: "It depends on the size of your business and what you need, so we do not do one-size-fits-all pricing. On your free call we will scope the work and give you a clear, honest number before you commit to anything.",
  },
  {
    q: "Can I start with one service and add more later?",
    a: "Yes. Plenty of clients start with accounting or HR and expand once they see how we work. Because everything sits under one team, adding a service later is simple and there is no new vendor to onboard.",
  },
  {
    q: "How do I get started?",
    a: `Call ${PHONE_DISPLAY} or request a free consultation. We will talk through what you need and map out the next step. No pressure, no jargon.`,
  },
];

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IntegriLytics",
  description:
    "Accounting, HR, and operational oversight for small and mid-sized businesses nationwide.",
  logo: "https://www.integrilyticsinc.com/media/logo.png",
  image: "https://www.integrilyticsinc.com/opengraph-image",
  telephone: PHONE_TEL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "225 Green Street, Suite 601-F",
    addressLocality: "Fayetteville",
    addressRegion: "NC",
    postalCode: "28311",
    addressCountry: "US",
  },
  areaServed: "United States",
  url: SITE_URL,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={organizationLd} />
      <JsonLd data={faqLd} />

      {/* Navigation */}
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 md:pt-32 pb-12">
        <div className="w-full px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[600px]">
            {/* Left: the "chaos" — full sticky-notes photo (kept opaque, above the ducks) */}
            <div className="relative z-10 w-full">
              <Image
                src="/media/sticky-notes.png"
                alt="A wall of colorful sticky notes covered in small business pain points: payroll issues, late tax filings, HR, stress, no processes"
                width={1534}
                height={1289}
                priority
                className="w-full h-auto"
              />
            </div>

            {/* Right: the resolution — headline, CTAs, then ducks */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-brass-600 mb-4">
                Professional Duck Wrangler
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-blue-900 leading-tight mb-5">
                Accounting, HR &amp; Operational Oversight for Small Businesses Nationwide
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We handle the numbers and the people so you can focus on running your
                business. One team for accounting, HR, and strategy, wherever you are.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 shadow-premium hover:border-brass-300 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brass-400 group-hover:bg-brass-600 transition-colors" />
                    {s.title}
                    <span
                      aria-hidden="true"
                      className="text-brass-400 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-blue-900 text-white rounded font-semibold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#how-it-works"
                  className="inline-block px-8 py-3 border border-blue-200 text-blue-800 rounded font-semibold hover:border-blue-400 hover:text-blue-900 transition-colors"
                >
                  See How We Help
                </a>
              </div>

              {/* Duck animation — rolling out of the sticky-note pile on the left */}
              <video
                className="relative z-0 block w-[135%] -ml-[30%] p-0 mt-4 mix-blend-multiply"
                poster="/media/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Crumpled sticky notes transforming into a neat row of origami ducks"
              >
                <source src="/media/hero-ducks-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-20 px-6 bg-cream">
        <div className="reveal max-w-6xl mx-auto">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-10">
            Professional Affiliations Represented Across Our Team
          </h2>
          <div className="rounded-3xl bg-white shadow-premium border border-cream-200 px-8 py-10">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-x-8 gap-y-8">
              {affiliations.map((a) => (
                <Image
                  key={a.src}
                  src={a.src}
                  alt={a.alt}
                  width={a.w}
                  height={a.h}
                  className="h-20 md:h-24 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Three pillars, one team
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Accounting, HR, and operations under one roof, so the details never fall through the cracks.
            </p>
          </div>
          <div className="reveal grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <ServiceGraphic variant={service.variant} />
                  </div>
                  <div className="absolute inset-x-0 top-0 z-10 h-1 bg-brass-400" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-600 group-hover:gap-3 transition-all">
                    Learn more about {service.title}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Getting started is simple
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Three steps from first call to running your business with less on your plate.
            </p>
          </div>
          <div className="reveal grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative p-8 rounded-3xl bg-white border border-cream-200 shadow-premium"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900 text-white font-serif text-2xl font-bold mb-6 ring-4 ring-brass-200">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-cream">
        <div className="reveal max-w-3xl mx-auto text-center">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Integrity, backed by analytics
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            IntegriLytics brings together experience in accounting, human resources, and
            business strategy. Based in Fayetteville, North Carolina, we work with small and
            mid-sized businesses across the country, remote or on-site, with the same care and
            precision we would give our own.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our name says it: <strong className="text-brass-600">Integrity</strong> plus{" "}
            <strong className="text-brass-600">Analytics</strong>. Every recommendation is backed
            by data, every relationship built on trust.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 border border-brass-300 text-blue-900 rounded-full font-semibold hover:bg-brass-50 hover:border-brass-400 transition-colors"
          >
            Read our full story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Social proof / trust markers — dark anchor section */}
      <section className="relative overflow-hidden py-28 px-6 bg-blue-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brass-500/10 blur-3xl"
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-300 mb-5">
              Why Businesses Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              No call centers. No runaround.
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto">
              Just straight answers from people who own the outcome.
            </p>
          </div>
          <div className="reveal grid md:grid-cols-3 gap-8">
            {trustMarkers.map((marker) => (
              <div
                key={marker.title}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brass-500/15 text-brass-300">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {lineIcons[marker.icon]}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{marker.title}</h3>
                <p className="text-blue-200 leading-relaxed">{marker.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 bg-cream">
        <div className="reveal max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Questions, answered
            </h2>
            <p className="text-lg text-gray-600">Answers to what business owners ask us most.</p>
          </div>
          <div className="rounded-3xl bg-white shadow-premium border border-cream-200 px-6 sm:px-8 divide-y divide-cream-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-blue-900">
                  {faq.q}
                  <span className="ml-4 text-2xl leading-none text-brass-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden py-28 px-6 bg-blue-900 text-white">
        <Image src="/media/bg-office.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-900/90" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-300 mb-5">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Consultation</h2>
            <p className="text-xl text-blue-200 max-w-xl mx-auto">
              Tell us where it hurts. We will show you where you can save time, money, or both.
              No obligation.
            </p>
          </div>
          <div className="reveal grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-blue-100">
                Prefer to reach out directly? We answer the phone.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="block bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 hover:border-brass-400/40 transition-colors"
              >
                <h3 className="flex items-center gap-2 font-semibold mb-2 text-brass-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{lineIcons.phone}</svg>
                  Phone
                </h3>
                <p className="text-lg">{PHONE_DISPLAY}</p>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 hover:border-brass-400/40 transition-colors"
              >
                <h3 className="flex items-center gap-2 font-semibold mb-2 text-brass-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Email
                </h3>
                <p>{EMAIL}</p>
              </a>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <h3 className="flex items-center gap-2 font-semibold mb-2 text-brass-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Office
                </h3>
                <address className="not-italic leading-relaxed">
                  IntegriLytics, Inc.
                  <br />
                  225 Green Street, Suite 601-F
                  <br />
                  Fayetteville, NC 28311
                </address>
                <p className="text-blue-200 text-sm mt-2">
                  In-office visits by appointment. Serving businesses nationwide.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=IntegriLytics%2C%20Inc.%2C%20225%20Green%20Street%2C%20Suite%20601-F%2C%20Fayetteville%2C%20NC%2028311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-300 hover:text-brass-200"
                >
                  Get directions
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map (loads Google only on click) */}
          <div className="reveal mt-10">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
