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

      {/* Where We Meet */}
      <section className="py-28 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
              Where We Meet
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              We come to you ... or meet you online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every business is different, and so is every partnership. Whether we work together remotely, on-site, or through a combination of both, we will tailor our approach to fit your business, your goals, and the way you work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Virtual */}
            <div className="rounded-3xl bg-white border border-cream-200 shadow-premium p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 18h-2V8h2v10ZM4 18h12V6H4v12ZM2 21h20" />
                  <rect x="14" y="3" width="6" height="3" rx="1" />
                  <path d="M6 10h4M6 14h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Remote Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Virtual meetings, secure file sharing, and real-time collaboration keep us connected ... no matter where you are located.
              </p>
            </div>

            {/* On-Site */}
            <div className="rounded-3xl bg-white border border-cream-200 shadow-premium p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brass-50 text-brass-600">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">On-Site Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We come to you. Being on-site allows us to see your operations firsthand and build stronger, more effective solutions.
              </p>
            </div>

            {/* Nationwide */}
            <div className="rounded-3xl bg-white border border-cream-200 shadow-premium p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.2-1 .1-1.2.5L2 10c-.2.5.1 1 .5 1.2l7 2L12 20c.2.5.7.7 1.2.5l3.3-1.4c.4-.2.5-.7.3-1.1Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Nationwide Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                For projects that require in-person attention beyond our local area, we are ready to travel ... wherever your business takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
