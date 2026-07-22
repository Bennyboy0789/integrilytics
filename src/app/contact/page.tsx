import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import ContactForm from "../ContactForm";
import LocationMap from "../LocationMap";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+188****0360";
const EMAIL = "info@integrilyticsinc.com";

export const metadata: Metadata = {
  title: "Contact IntegriLytics | Accounting & HR | Fayetteville NC",
  description:
    "Get in touch with IntegriLytics for accounting, HR, and operational oversight. Located in Fayetteville, NC, serving small businesses nationwide.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-cream pt-28 md:pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Ready to get started or just have questions? We answer the phone.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Hours */}
            <div className="rounded-3xl bg-white border border-cream-200 shadow-premium p-6 sm:p-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Hours &amp; Location
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-700">Monday – Friday</span>
                  <span className="text-gray-600">9 am – 5 pm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-700">Saturday</span>
                  <span className="text-gray-600">By Appointment Only</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-700">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>

              <address className="not-italic text-sm text-gray-600 leading-relaxed mb-6">
                225 Green Street, Suite 601-F
                <br />
                Fayetteville, NC 28311
              </address>

              <div className="space-y-2 text-sm">
                <p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-brass-600 hover:text-brass-700 font-medium"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-brass-600 hover:text-brass-700 font-medium"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>

            {/* Map */}
            <LocationMap tone="light" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
