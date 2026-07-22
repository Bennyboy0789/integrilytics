import type { Metadata } from "next";
import { SITE } from "../JsonLd";

// Builds page metadata with per-route Open Graph + Twitter tags so each page has its
// own social preview (og:image is supplied automatically by the app-level
// opengraph-image / twitter-image files and merged in by Next).
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "website",
      siteName: "IntegriLytics",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "IntegriLytics — Accounting, HR & Operational Oversight",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: ["/twitter-image"],
    },
  };
}
