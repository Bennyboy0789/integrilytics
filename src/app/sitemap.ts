import type { MetadataRoute } from "next";
import { articles } from "./resources/articles";

const SITE = "https://www.integrilyticsinc.com";

// Stable "last updated" date for static pages. Bump this when their content
// meaningfully changes — using new Date() here would churn every deploy and
// weaken the freshness signal. Article pages use their own publish dates below.
const STATIC_UPDATED = new Date("2026-07-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE}${path}`,
    lastModified: STATIC_UPDATED,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("", 1),
    page("/services/accounting", 0.9),
    page("/services/hr", 0.9),
    page("/services/operations", 0.9),
    page("/about", 0.7),
    page("/book", 0.8),
    page("/contact", 0.7),
    page("/events", 0.5),
    page("/resources", 0.7),
    ...articles.map((a) => ({
      url: `${SITE}/resources/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    page("/privacy-policy", 0.3),
    page("/terms-and-conditions", 0.3),
  ];
}
