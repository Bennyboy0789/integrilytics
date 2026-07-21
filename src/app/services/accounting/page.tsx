import type { Metadata } from "next";
import PremiumServicePage from "../PremiumServicePage";
import { accounting, serviceSummaries } from "../content";

export const metadata: Metadata = {
  title: "Accounting Services for Small Businesses | IntegriLytics",
  description:
    "Bookkeeping, tax prep, payroll, and specialized accounting (cost, forensic, trust, multi-entity) for small businesses nationwide. Clean books, clear numbers.",
  alternates: { canonical: "https://www.integrilyticsinc.com/services/accounting" },
};

// Images aligned to the Core Accounting Services categories, in order.
const coreImages: { src: string; alt: string }[] = [
  { src: "/media/acc-setup.jpg", alt: "A desk being set up with tax folders, a calculator, and ledgers" },
  { src: "/media/acc-cleanup.jpg", alt: "Hands sorting and correcting stacks of financial paperwork" },
  { src: "/media/acc-bookkeeping.jpg", alt: "A laptop beside monthly accounting statements and reports" },
  { src: "/media/acc-software.jpg", alt: "An accountant working in accounting software at a desk" },
  { src: "/media/acc-salestax.jpg", alt: "Tax forms and a calculator laid out for filing" },
  { src: "/media/acc-payroll.jpg", alt: "A calculator and documents used for payroll processing" },
  { src: "/media/acc-incometax.jpg", alt: "An advisor reviewing tax planning with clients" },
];

const faqs = [
  {
    q: "Do you work with my existing accounting software?",
    a: "Yes. We work in QuickBooks and most major cloud accounting platforms. If you are on spreadsheets or an older system, we migrate your data and set it up correctly so nothing gets lost in the move.",
  },
  {
    q: "My books are behind. Can you catch them up?",
    a: "That is one of the most common things we do. We clean up months or years of backlog, correct miscategorized transactions, reconcile every account, and hand you accurate books you can actually rely on.",
  },
  {
    q: "Do you handle taxes too, or just bookkeeping?",
    a: "Both. We keep your books clean all year and prepare and file your business returns, so the same team that knows your numbers is the one filing them. That means fewer surprises and better planning.",
  },
  {
    q: "Can you work with a business in any state?",
    a: "Yes. We work with clients nationwide and handle multi-state sales tax and payroll filings. Most of our work is remote, with on-site support when it makes sense.",
  },
  {
    q: "How do I know what my numbers are actually telling me?",
    a: "We do more than record transactions. You get clear monthly statements plus a plain-English read on what the numbers mean for pricing, spending, and your next decision.",
  },
];

export default function AccountingPage() {
  const core = accounting.groups[0].categories;
  const specialized = accounting.groups[1].categories;

  return (
    <PremiumServicePage
      path="/services/accounting"
      graphic="accounting"
      eyebrow="Accounting"
      title="Accounting that keeps your business ahead"
      intro={accounting.intro}
      heroImage="/media/acc-hero.jpg"
      heroAlt="An accountant reviewing financials with small business owners"
      coreEyebrow="What we handle"
      coreHeading="Core accounting, end to end"
      rows={core.map((cat, i) => ({
        name: cat.name,
        summary: serviceSummaries[cat.name],
        includes: cat.items.join("  ·  "),
        image: coreImages[i].src,
        alt: coreImages[i].alt,
      }))}
      specialized={{
        eyebrow: "Going deeper",
        heading: "Specialized accounting",
        intro:
          "When your books need more than the basics, we bring the specialists. Complex, regulated, and multi-entity work, handled with the same care.",
        items: specialized.map((cat) => ({ name: cat.name, detail: cat.items.join("  ·  ") })),
      }}
      faqs={faqs}
    />
  );
}
