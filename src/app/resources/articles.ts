import data from "./articles.json";

export type Article = {
  slug: string;
  title: string;
  author: string;
  date: string; // ISO YYYY-MM-DD
  dateDisplay: string;
  category: string;
  excerpt: string;
  body: string; // Markdown
  image: string;
  imageAlt: string;
};

// Ported from the IntegriLytics Learning Center, newest first.
export const articles: Article[] = data as Article[];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categories: string[] = Array.from(new Set(articles.map((a) => a.category)));

// Rough reading time from body word count (~200 wpm).
export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// SEO meta descriptions, trimmed to ~155 chars so they don't truncate in search
// results. Card excerpts (the `excerpt` field) run longer and stay as-is; these are
// used only for <meta name="description"> and Open Graph on article pages.
export const metaDescriptions: Record<string, string> = {
  "the-bones-of-your-accounting-system":
    "Your chart of accounts is the backbone of your accounting system. Learn to structure it to balance IRS reporting with how your business actually runs.",
  "strategy-101-intro-to-operational-strategy":
    "Operational strategy sets your organization's long-term direction and daily priorities. Learn how it delivers clarity, efficiency, and stable growth.",
  "hr-101-welcome-to-human-resources":
    "A plain-English intro to human resources: recruiting, onboarding, compliance, and retention, and how HR helps both employers and employees.",
  "the-better-business-blueprint-part-5-let-s-go":
    "Your business is open. Now shift from setup to running it: managing daily operations, tracking finances, and refining processes as you prepare to grow.",
  "the-better-business-blueprint-part-4-bringing-the-blueprint-to-life":
    "Your business is formed. Here are the next 10 federal, state, and operational steps that take you from legally formed to fully ready to operate.",
  "better-business-blueprint-step-3-formation":
    "Step 3: register with your state's Secretary of State to legally create your business, then use the waiting period productively before your EIN.",
  "the-better-business-blueprint-part-2-research-research-research":
    "Before you build, research. Cover the legal, financial, operational, and staffing requirements so your business starts on solid ground, not guesswork.",
  "the-better-business-blueprint-part-1-what-is-your-purpose":
    "Before naming or branding a business, get clear on your purpose. Learn how aligning what you want to fix with who you are builds a lasting business.",
  "accounting-101":
    "An introduction to accounting: identifying, measuring, and recording financial activity. What accounting is, its history, and where it's used today.",
  "half-time-premium":
    "A simple guide to the half-time overtime premium: when overtime pay must be recalculated for commissions or bonuses, with the federal rules explained.",
  "bookkeeping-software":
    "How to choose bookkeeping software for your small business: spreadsheets vs. cloud accounting vs. expense apps, matched to your size, industry, and skills.",
  "separating-personal-and-business-finances":
    "Separating personal and business finances protects you legally, simplifies taxes, and cleans up your books. The benefits and practical steps to do it.",
  "how-to-organize-business-receipts":
    "Organize business receipts for cleaner bookkeeping and easier taxes. A simple paper-and-digital system keeps you accurate and ready for an IRS audit.",
  "new-qualified-overtime-rules-for-2026":
    "New 2026 qualified overtime rules change how overtime wages are reported and taxed. See how they affect payroll withholding, reporting, and employees.",
  "1099-nec-vs-1099-misc":
    "1099-MISC vs. 1099-NEC: which form to file for non-employee payments, plus the $600 threshold, so your business reports payments correctly to the IRS.",
};

// Short SEO description for an article; falls back to the (longer) card excerpt.
export function metaDescription(a: Article): string {
  return metaDescriptions[a.slug] ?? a.excerpt;
}
