// Renders a JSON-LD <script>. Sanitizes "<" to prevent XSS via injected strings.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const SITE = "https://www.integrilyticsinc.com";

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    serviceType: opts.name,
    areaServed: "United States",
    provider: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "IntegriLytics",
      url: SITE,
      telephone: "+18883160360",
    },
  };
}
