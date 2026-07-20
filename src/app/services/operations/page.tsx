import type { Metadata } from "next";
import PremiumServicePage from "../PremiumServicePage";
import { operations, serviceSummaries } from "../content";

export const metadata: Metadata = {
  title: "Operational Oversight for Small Businesses | IntegriLytics",
  description:
    "Operational oversight for small businesses nationwide: operations, office admin, process improvement, systems, planning, and performance.",
  alternates: { canonical: "https://integrilytics.vercel.app/services/operations" },
};

// Images aligned to the Operational Oversight Solutions categories, in order.
const rowImages: { src: string; alt: string }[] = [
  { src: "/media/ops-business.jpg", alt: "An operations team working together at a desk" },
  { src: "/media/ops-office.jpg", alt: "An organized, busy office workspace" },
  { src: "/media/svc-operations.jpg", alt: "A workflow being mapped out on a whiteboard" },
  { src: "/media/ops-systems.jpg", alt: "Business software running on a laptop" },
  { src: "/media/about-team.jpg", alt: "A team reviewing a plan together" },
  { src: "/media/ops-performance.jpg", alt: "A performance dashboard on a laptop" },
];

export default function OperationsPage() {
  const cats = operations.groups[0].categories;

  return (
    <PremiumServicePage
      path="/services/operations"
      eyebrow="Operational Oversight"
      title="Operations that keep everything running"
      intro={operations.intro}
      heroImage="/media/ops-hero.jpg"
      heroAlt="A team working in a bright, modern office"
      coreEyebrow="What we handle"
      coreHeading="Your operation, running smoothly"
      rows={cats.map((cat, i) => ({
        name: cat.name,
        summary: serviceSummaries[cat.name],
        includes: cat.items.join("  ·  "),
        image: rowImages[i].src,
        alt: rowImages[i].alt,
      }))}
    />
  );
}
