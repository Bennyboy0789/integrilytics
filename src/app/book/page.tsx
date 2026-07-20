import type { Metadata } from "next";
import BookingClient from "./BookingClient";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import JsonLd, { SITE, breadcrumb } from "../JsonLd";
import { consultations, priceLabel } from "./consultations";

export const metadata: Metadata = {
  title: "Book a Consultation | IntegriLytics",
  description:
    "Book a remote, office, or on-site consultation with IntegriLytics. Pick a time that works and we will take it from there. Free 15-minute intro calls available.",
  alternates: { canonical: "https://integrilytics.vercel.app/book" },
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Consultations",
          description:
            "Remote, office, or on-site consultations with IntegriLytics. Free 15-minute intro calls available.",
          url: `${SITE}/book`,
          areaServed: "United States",
          provider: { "@type": "Organization", name: "IntegriLytics", url: SITE },
          offers: consultations.map((c) => ({
            "@type": "Offer",
            name: c.title,
            price: c.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: `${priceLabel(c.price)} · ${c.minutes} min · ${c.tagline}`,
          })),
        }}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Book a Consultation", path: "/book" },
        ])}
      />
      {/* Header */}
      <SiteHeader sticky />

      {/* Hero */}
      <section className="px-6 pt-14 pb-10 bg-gradient-to-b from-brass-50 to-cream text-center">
        <div className="max-w-3xl mx-auto">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Book Online
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">Book a Consultation</h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Remote, office, or on-site. Pick a time that works and we will take it from there.
            Not sure what you need? Start with a free 15-minute call.
          </p>
        </div>
      </section>

      {/* Booking flow */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <BookingClient />
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
