import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import JsonLd, { SITE, breadcrumb } from "../JsonLd";
import { articles, readingMinutes } from "./articles";

export const metadata: Metadata = {
  title: "Resources | Accounting, HR & Business Guides | IntegriLytics",
  description:
    "Practical guides on accounting, bookkeeping, payroll, HR, taxes, and business strategy for small business owners, from the IntegriLytics team.",
  alternates: { canonical: "https://www.integrilyticsinc.com/resources" },
};

const [featured, ...rest] = articles;

function CategoryChip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-brass-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-700">
      {label}
    </span>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "IntegriLytics Resources",
          description:
            "Practical guides on accounting, bookkeeping, payroll, HR, taxes, and business strategy for small business owners.",
          url: `${SITE}/resources`,
          publisher: { "@type": "Organization", name: "IntegriLytics", url: SITE },
          blogPost: articles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            datePublished: a.date,
            author: { "@type": "Person", name: a.author },
            url: `${SITE}/resources/${a.slug}`,
          })),
        }}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <SiteHeader sticky />

      {/* Hero */}
      <section className="px-6 pt-14 pb-12 bg-gradient-to-b from-brass-50 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Learning Center
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight">
            Resources for running a better business
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Plain-English guides on accounting, bookkeeping, payroll, HR, taxes, and strategy,
            written by our team for small business owners.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 pb-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`/resources/${featured.slug}`}
            className="group block rounded-3xl border border-cream-200 bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <CategoryChip label={featured.category} />
                <span className="text-sm text-gray-500">
                  {featured.dateDisplay} · {readingMinutes(featured.body)} min read
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-blue-900 leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-600 group-hover:gap-3 transition-all">
                Read article
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-cream-200 bg-white shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4">
                  <CategoryChip label={a.category} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 leading-snug">{a.title}</h3>
                <p className="mt-3 flex-1 text-gray-600 leading-relaxed text-[0.95rem]">
                  {a.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {a.dateDisplay} · {readingMinutes(a.body)} min
                  </span>
                  <span className="text-sm font-semibold text-brass-600 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 bg-blue-950 text-white text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brass-500/10 blur-3xl"
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-300 mb-5">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a question these do not answer?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Talk to a real person on our team. No pressure, no jargon.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-brass-50 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
