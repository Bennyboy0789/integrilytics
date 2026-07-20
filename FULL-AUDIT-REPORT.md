# IntegriLytics — Full SEO Audit

**Audited:** local production build at `localhost:3000` (source-verified)
**Date:** 2026-07-20
**Business type detected:** Professional Services (Accounting / HR / Operational Oversight), positioned **nationwide** with a Fayetteville, NC HQ.

> **Scope note:** This audit combines the rendered HTML with direct source inspection, which is more accurate than an external crawl. **Field data** (Google CrUX Core Web Vitals, Search Console indexation, GA4 traffic) and **off-site data** (backlinks, live SERP positions) require the deployed production site + API credentials and are **not** included — Core Web Vitals below are lab/structural estimates.

---

## Executive Summary

### Overall SEO Health Score: **70 / 100** — Solid foundation, a few high-impact gaps

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 60 | 22% |
| Content Quality | 78 | 23% |
| On-Page SEO | 88 | 20% |
| Schema / Structured Data | 45 | 10% |
| Performance (CWV, lab) | 65 | 10% |
| AI Search Readiness | 65 | 10% |
| Images | 72 | 5% |

The site has **excellent on-page fundamentals** (unique keyword-rich titles, clean single H1s, per-page canonicals, strong internal linking, genuinely deep unique content). It's held back mainly by **missing crawl infrastructure** (no sitemap, no robots.txt), **schema only on the homepage**, **no social share image**, and a few **performance/mobile** items.

### Top 5 Critical / High Issues
1. **No `sitemap.xml`** — search engines have no map of the site (returns 404).
2. **No `robots.txt`** — no crawl directives or sitemap pointer (returns 404).
3. **No Open Graph image** — links shared to social/Slack/iMessage render with no preview image; Twitter card is the small `summary` type.
4. **Schema only on the homepage** — service pages, About, and Book have zero structured data (missing `Service`, `BreadcrumbList`, `AboutPage`).
5. **Mobile navigation is unusable** — the nav is `hidden md:flex` with no hamburger menu, so phone visitors get only a logo (major mobile UX/conversion issue).

### Top 5 Quick Wins
1. Add `app/sitemap.ts` (Next.js generates `/sitemap.xml`) — ~15 min.
2. Add `app/robots.ts` (generates `/robots.txt` + sitemap reference) — ~5 min.
3. Add an `app/opengraph-image.tsx` (or static OG image) for social previews — ~20 min.
4. Add `Service` + `BreadcrumbList` JSON-LD to the three service pages — ~30 min.
5. Trim 3 meta descriptions that exceed ~160 chars (home 182, accounting 172, operations 170) so they don't truncate in SERPs — ~10 min.

---

## Technical SEO — 60/100

**Good**
- HTTPS (Vercel), `<html lang="en">`, responsive `viewport` meta all present.
- **Canonical tags** correct and self-referencing on every page (absolute URLs to `integrilytics.vercel.app`).
- No accidental `noindex` — robots meta is empty (defaults to index,follow).
- All 6 primary routes return **200**.

**Issues**
| Severity | Issue |
|---|---|
| **Critical** | `sitemap.xml` → 404. No XML sitemap exists. |
| **Critical** | `robots.txt` → 404. No robots file (no `Sitemap:` directive, no crawl guidance). |
| Medium | No `manifest.webmanifest` (PWA/mobile app metadata) — minor. |
| Low | Nav "Services" dropdown links are **client-rendered only** (present in the DOM only when opened), so they don't provide crawlable links. Mitigated because the homepage body links to all three service pages (4× each in HTML), so pages are still discoverable. |
| Info | Security headers (CSP, HSTS, X-Content-Type-Options) not verified locally — confirm on the deployed Vercel site. |

---

## Content Quality — 78/100

**Good**
- **Genuinely deep, unique content** — service pages carry full capability detail, the About page covers who/what/how/where/who-we-support, FAQ answers real questions. No thin or duplicated content (Book is lighter but purpose-appropriate).
- Clear, benefit-led copy in a consistent voice; strong topical coverage of accounting/HR/operations + nationwide + industries served.
- FAQ content doubles as answer-engine fodder.

**Issues / Opportunities**
| Severity | Issue |
|---|---|
| Medium | **E-E-A-T (Experience/Expertise/Authority/Trust)** is thin for a money/YMYL service. No named team members, bios, credentials, or "since [year]." The affiliation logos (Chamber, CalCPA, CFCIA, QuickBooks ProAdvisor, ACFE) help, but real people + certifications named in text would strengthen trust signals significantly. |
| Medium | **No testimonials/reviews** with names/results — social proof is currently generic trust markers. |
| Low | No blog / resource content — limits topical authority and long-tail capture (the old site had a "Learning Center"). |

---

## On-Page SEO — 88/100

**Good**
- **Unique, keyword + location-aware titles** on every page (35–59 chars, all within display limits).
- **Exactly one `<h1>` per page**, each descriptive and unique.
- Logical heading hierarchy (eyebrow → H2 → H3) throughout.
- Strong **internal linking**: shared header nav, hero service links, "What We Do" cards, footer, and cross-page CTAs to `/#contact` and `/book`.
- Meta descriptions present on all pages.

**Issues**
| Severity | Issue |
|---|---|
| Medium | **3 meta descriptions exceed ~160 chars** and may truncate: Home (182), Accounting (172), Operations (170). |
| Low | Nav dropdown is JS-only (see Technical). |

---

## Schema / Structured Data — 45/100

**Good**
- Homepage has valid **`Organization`** JSON-LD (name, description, phone, email, PostalAddress, `areaServed: United States`, url).
- Homepage has valid **`FAQPage`** JSON-LD (5 Q&As) — strong for rich results and AI answers.

**Issues**
| Severity | Issue |
|---|---|
| **High** | **No schema on any sub-page.** Service pages (Accounting/HR/Operations), About, and Book all return zero JSON-LD. |
| High | Missing **`Service`** (or `ProfessionalService`) schema on the three service pages. |
| Medium | Missing **`BreadcrumbList`** site-wide (helps SERP breadcrumbs + navigation understanding). |
| Medium | Book page is an ideal candidate for **`Service`/`Offer`** or `Event`-style markup for the consultations (with price for the paid ones). |
| Low | Consider upgrading Organization → **`AccountingService`/`ProfessionalService`** subtype and adding `sameAs` (LinkedIn/social profiles) + `logo`. |

---

## Performance (Core Web Vitals — lab/structural estimate) — 65/100

> No field (CrUX) data available. Estimates from asset inspection.

**Good**
- Next.js 16 + `next/image` (automatic res/format optimization; browsers get WebP/AVIF).
- **Self-hosted fonts** via `next/font` (no render-blocking Google Fonts request, no layout shift).
- Hero duck video already trimmed (487 KB) and set to `muted/loop/playsInline`.

**Issues**
| Severity | Issue |
|---|---|
| **High** | **LCP risk:** the homepage hero image `sticky-notes.png` is a **2.35 MB** PNG source (optimized to ~320 KB PNG fallback / smaller WebP). As the largest above-the-fold element with `priority`, it likely drives LCP. Re-export/compress the source and confirm WebP delivery. |
| Medium | `logo.png` source is **1.95 MB** for an image displayed at ~112 px tall — heavily oversized at source (optimized on serve, but wasteful). |
| Medium | **Motion (framer-motion)** ships client JS and drives scroll animations on service/About pages, adding to TBT/INP; keep it lean. |
| Medium | Autoplaying hero video competes for bandwidth on first load. |
| Low | **Dead asset:** `hero-ducks.mp4` (768 KB) is not referenced anywhere (only the `-loop` version is used) — remove from `public/media`. |

---

## Images — 72/100

**Good**
- Strong **alt-text coverage** (homepage: 10/11 images have descriptive alt; the 1 empty is the decorative office background — correct).
- All content images use `next/image` (responsive `sizes`, lazy by default, `priority` on hero).

**Issues**
| Severity | Issue |
|---|---|
| Medium | Oversized **source** files (`sticky-notes.png` 2.35 MB, `logo.png` 1.95 MB) — see Performance. |
| Low | 4 decorative images use `alt=""` (acceptable), but the About "What We Do" card photos could take descriptive alt for image-search value. |

---

## AI Search Readiness (GEO) — 65/100

**Good**
- Clean SSR: all body copy (feature "Includes", industry lists, FAQ) is **present in the HTML** even though Motion animates it in — so AI crawlers and Google see it.
- FAQPage + Organization schema aids answer engines.
- Clear, factual, well-structured passages that are easy to cite.

**Issues**
| Severity | Issue |
|---|---|
| Medium | **No `llms.txt`** (returns 404) — the emerging convention for guiding AI crawlers to key content. |
| Medium | Weak entity/authority signals — no `sameAs` social profiles, no named experts, no citations/press. |
| Low | Content presented at `opacity:0` until JS runs (Motion). Fine for Google (renders JS) and it's in the DOM, but a non-JS or lightweight fetcher sees hidden content. Consider a no-JS safeguard. |

---

## Mobile / UX (affects mobile-first indexing & conversion)

| Severity | Issue |
|---|---|
| **High** | **No mobile navigation.** The header nav is `hidden md:flex` with no hamburger — phone users see only the logo and can't reach Services/About/Client Portal/Book. Mobile-first world = major UX/conversion loss. |
| Medium | Confirm the hero doesn't horizontally overflow on small screens (the duck video uses `w-[135%] -ml-[30%]`). |

---

## What's already strong (keep it)
- Best-in-class **on-page basics** (titles, H1s, canonicals, internal links).
- **Deep, original content** with real topical breadth.
- **Organization + FAQ schema**, self-hosted fonts, `next/image`, HTTPS, `lang`, responsive meta.
- Premium, image-rich, fast-feeling design.

See **ACTION-PLAN.md** for the prioritized, effort-estimated fix list.
