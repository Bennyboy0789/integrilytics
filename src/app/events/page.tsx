import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Events | IntegriLytics",
  description:
    "Events and groups hosted by IntegriLytics, including the Fayetteville Area Women's Business Collective.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-cream pt-28 md:pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-4">
            Events &amp; Groups
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Events &amp; Groups
          </h1>
        </div>
      </section>

      {/* Women's Business Collective */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Fayetteville Area Women&rsquo;s Business Collective
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            A recent initiative by IntegriLytics, Inc. is the Women&rsquo;s Business
            Collective. This is for women business owners and aspiring entrepreneurs
            who are looking for something beyond traditional networking. Think less
            networking and more friendship. It&rsquo;s a place to make friends, support
            each other&rsquo;s businesses, get together for outings and events, and simply
            enjoy spending time with people who share similar interests and
            experiences. Meet people, ask questions, get advice, support local
            businesses, and connect through events and gatherings. Follow the{" "}
            <a
              href="https://www.facebook.com/WBCFayetteville/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass-600 hover:text-brass-700 underline font-medium"
            >
              Facebook page
            </a>{" "}
            and visit the{" "}
            <a
              href="https://womensbusinesscollective.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass-600 hover:text-brass-700 underline font-medium"
            >
              website
            </a>{" "}
            to learn more.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            If you don&rsquo;t want to go to Facebook page or the website yet, click{" "}
            <a
              href="https://www.eventbrite.com/o/womens-business-collective-121551828160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brass-600 hover:text-brass-700 underline font-medium"
            >
              HERE
            </a>{" "}
            to directly RSVP to upcoming events for the WBC.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Upcoming IntegriLytics Events
          </h2>
          <p className="text-lg text-gray-600">Check back here for future events!</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
