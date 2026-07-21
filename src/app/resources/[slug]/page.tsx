import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import JsonLd, { SITE, breadcrumb } from "../../JsonLd";
import ArticleBody from "../ArticleBody";
import { articles, getArticle, readingMinutes } from "../articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | IntegriLytics`,
    description: a.excerpt,
    alternates: { canonical: `https://www.integrilyticsinc.com/resources/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url: `${SITE}/resources/${a.slug}`,
      publishedTime: a.date,
      authors: [a.author],
      images: [{ url: `${SITE}${a.image}` }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(articles.filter((a) => a.slug !== article.slug && a.category !== article.category))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          dateModified: article.date,
          author: { "@type": "Person", name: article.author },
          publisher: {
            "@type": "Organization",
            name: "IntegriLytics",
            logo: {
              "@type": "ImageObject",
              url: "https://www.integrilyticsinc.com/media/logo.png",
            },
          },
          mainEntityOfPage: `${SITE}/resources/${article.slug}`,
          articleSection: article.category,
        }}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path: `/resources/${article.slug}` },
        ])}
      />
      <SiteHeader sticky />

      {/* Header */}
      <section className="px-6 pt-14 pb-10 bg-gradient-to-b from-brass-50 to-cream">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="text-sm font-semibold text-brass-600 hover:text-brass-700">
            ← All resources
          </Link>
          <div className="mt-6 mb-4">
            <span className="inline-block rounded-full bg-brass-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-700">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-sm text-gray-500">
            By {article.author} · {article.dateDisplay} · {readingMinutes(article.body)} min read
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto relative">
          <div
            aria-hidden="true"
            className="absolute -z-10 -right-4 top-4 h-full w-full rounded-3xl border border-brass-300/70"
          />
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={1600}
            height={900}
            priority
            className="w-full aspect-[16/9] object-cover rounded-3xl shadow-premium-lg bg-cream-100"
          />
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pt-12 pb-16">
        <article className="max-w-3xl mx-auto rounded-3xl bg-white border border-cream-200 shadow-premium p-7 sm:p-10 md:p-12">
          <ArticleBody markdown={article.body} />

          {/* Inline CTA */}
          <div className="mt-12 rounded-2xl bg-brass-50 border border-brass-100 p-6 text-center">
            <p className="text-blue-900 font-semibold">Want help putting this into practice?</p>
            <p className="mt-1 text-sm text-gray-600">
              Our team handles accounting, HR, and operations for small businesses nationwide.
            </p>
            <Link
              href="/book"
              className="mt-4 inline-block px-6 py-2.5 bg-blue-900 text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </article>
      </section>

      {/* Keep reading */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Keep reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((a) => (
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="inline-block w-fit rounded-full bg-brass-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-700 mb-4">
                    {a.category}
                  </span>
                  <h3 className="text-lg font-bold text-blue-900 leading-snug">{a.title}</h3>
                  <span className="mt-4 text-xs text-gray-500">{a.dateDisplay}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
