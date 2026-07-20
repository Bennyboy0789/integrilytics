# IntegriLytics — SEO Action Plan

Prioritized from the full audit. Effort is rough dev time. Most "Critical/High" items are things I can implement directly in the codebase.

---

## 🔴 Critical (do immediately — blocks discovery/sharing)

| # | Action | Effort | Why |
|---|---|---|---|
| 1 | **Add `app/sitemap.ts`** → generates `/sitemap.xml` listing all routes (`/`, `/about`, `/book`, `/services/*`). | 15 min | Search engines currently have no site map (404). |
| 2 | **Add `app/robots.ts`** → generates `/robots.txt` with `allow /` + `Sitemap:` pointer. | 5 min | No crawl directives or sitemap reference today. |
| 3 | **Add an Open Graph image** (`app/opengraph-image.tsx` via `ImageResponse`, or a static 1200×630) and set `twitter:card` to `summary_large_image`. | 20–30 min | Shared links have no preview image right now. |

## 🟠 High (within ~1 week — meaningful ranking/UX impact)

| # | Action | Effort | Why |
|---|---|---|---|
| 4 | **Add `Service`/`ProfessionalService` + `BreadcrumbList` JSON-LD** to the 3 service pages; add `BreadcrumbList` to About/Book. | 30–45 min | Sub-pages have zero schema; big rich-result + entity opportunity. |
| 5 | **Build a mobile nav** (hamburger + drawer) so phone users can reach Services/About/Client Portal/Book. | 1–2 hr | Nav is invisible on mobile today. |
| 6 | **Optimize the LCP hero image** — re-export `sticky-notes.png` (compress; it's 2.35 MB) and confirm WebP delivery; downsize `logo.png` (1.95 MB) source. | 30 min | Largest above-the-fold asset drives LCP. |
| 7 | **Strengthen E-E-A-T** — add named team member(s) with role/credentials, and "serving businesses since [year]"; consider `Person`/`sameAs`. | copy needed | YMYL/financial trust signal; needs real info from the client. |

## 🟡 Medium (within ~1 month)

| # | Action | Effort | Why |
|---|---|---|---|
| 8 | **Trim 3 long meta descriptions** to ≤160 chars (Home 182, Accounting 172, Operations 170). | 10 min | Prevents SERP truncation. |
| 9 | **Add `llms.txt`** pointing AI crawlers to key pages/services. | 15 min | Emerging GEO/AI-search convention. |
| 10 | **Add real testimonials** with name + business type + result (replace generic trust markers). | copy needed | Conversion + trust + review signals. |
| 11 | **Add `sameAs`** (LinkedIn/Facebook/Google Business) + `logo` + upgrade Organization → `AccountingService` subtype. | 20 min | Entity/authority signals for Google + AI. |
| 12 | **Remove dead asset** `hero-ducks.mp4` (768 KB, unused). | 2 min | Repo/deploy weight. |
| 13 | **Book page schema** — mark up consultations (`Service`/`Offer` with price for paid ones). | 30 min | Rich results for bookable services. |

## 🟢 Low (backlog)

| # | Action | Effort | Why |
|---|---|---|---|
| 14 | Add a **blog / Learning Center** for topical authority + long-tail (the old site had one). | ongoing | Content depth & long-tail capture. |
| 15 | Add `manifest.webmanifest` + app icons. | 20 min | PWA/mobile polish. |
| 16 | Descriptive **alt text** on About "What We Do" card photos. | 10 min | Image search. |
| 17 | **No-JS safeguard** for Motion-hidden content (guarantee visibility without JS). | 30 min | Robustness for lightweight crawlers. |
| 18 | Verify **security headers** (HSTS, CSP, X-Content-Type-Options) on the deployed Vercel site. | 15 min | Hardening. |

---

## Suggested implementation order (I can do #1–4, 6, 8, 9, 11, 12 now in-repo)
1. `robots.ts` + `sitemap.ts` (crawl infrastructure)
2. OG image + `summary_large_image`
3. Service + Breadcrumb schema on sub-pages
4. Trim long meta descriptions; add `llms.txt`; remove dead video; add `sameAs`
5. Optimize hero/logo source images
6. Mobile nav (larger task)
7. Client-provided: team bios/credentials, testimonials, founding year

**Items needing input from the client:** team member names/credentials, founding year, real testimonials, and social profile URLs (for `sameAs`).
