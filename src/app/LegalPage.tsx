import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

// Shared shell for legal/policy pages: header, titled hero, styled article body, footer.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader sticky />

      <section className="px-6 pt-14 pb-10 bg-gradient-to-b from-brass-50 to-cream">
        <div className="max-w-3xl mx-auto">
          <p className="rule-brass text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">{title}</h1>
          {updated ? <p className="mt-4 text-sm text-gray-500">{updated}</p> : null}
        </div>
      </section>

      <section className="px-6 py-12">
        <article className="max-w-3xl mx-auto text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-blue-900 [&_h2]:mt-8 [&_h2]:mb-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-blue-900">
          {children}
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
