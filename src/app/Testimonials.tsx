// Client testimonials sourced from the IntegriLytics Google Business Profile.
// Displayed as social proof only — intentionally NOT marked up with Review/AggregateRating
// schema, per Google's guidelines against structured data for third-party-sourced reviews.

type Review = {
  name: string;
  meta: string;
  tag?: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Misty Shreve",
    meta: "Google review",
    tag: "Reasonable price",
    text: "New to QBO, Pamela made my life much easier. Her knowledge, coaching, and assistance were exactly what I needed. I have been with her for 3 years now and I wouldn't have made it without her. Always available, and I have had a lot of questions. Whether it's QBO, taxes, insurance, or payroll, she has it together. I cannot recommend her services enough. She has the right answers at a reasonable price.",
  },
  {
    name: "Charles Dieter",
    meta: "Google review",
    text: "I've owned my business for almost 20 years now, and Pamela has been an absolute asset. I was never interested in the financial and business part of being self-employed, and I really didn't know much about it. I just wanted to design and build things with my hands. With her help, I was able to focus on doing what I loved, while she managed the accounting side of it all.",
  },
  {
    name: "Cynthia Mueller",
    meta: "Local Guide · Google",
    text: "Pamela will work hard for your company and do her best to help your business increase.",
  },
  {
    name: "Deborah Jenkins",
    meta: "Google review",
    tag: "Great price",
    text: "Great service. Our last accountant retired and we needed to find someone. Pamela was recommended to me and she has taken great care of our books.",
  },
  {
    name: "Adrienne Graham",
    meta: "Google review",
    tag: "Great price",
    text: "Pamela is an amazing woman and has been so helpful!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-brass-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="rule-brass rule-center text-xs font-semibold uppercase tracking-[0.2em] text-brass-600 mb-5">
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">What our clients say</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real reviews from the business owners we work with.
          </p>
        </div>

        <div className="reveal columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="break-inside-avoid rounded-3xl bg-white border border-cream-200 shadow-premium p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <Stars />
                {r.tag ? (
                  <span className="rounded-full bg-brass-100 px-3 py-1 text-xs font-semibold text-brass-700">
                    {r.tag}
                  </span>
                ) : null}
              </div>
              <blockquote className="mt-4 text-gray-700 leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 font-serif text-lg font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-blue-900">{r.name}</span>
                  <span className="block text-xs text-gray-500">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-gray-500">
          Reviews from our clients on Google.
        </p>
      </div>
    </section>
  );
}
