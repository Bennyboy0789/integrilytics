import type { Metadata } from "next";
import PremiumServicePage from "../PremiumServicePage";
import { hr, serviceSummaries } from "../content";

export const metadata: Metadata = {
  title: "HR Services for Small Businesses | IntegriLytics",
  description:
    "Talent acquisition, employee relations, compensation and benefits, HR compliance, workplace safety, and training for small businesses nationwide.",
  alternates: { canonical: "https://integrilytics.vercel.app/services/hr" },
};

// Images aligned to the Human Resource Solutions categories, in order.
const rowImages: { src: string; alt: string }[] = [
  { src: "/media/hr-talent.jpg", alt: "A hiring team interviewing a candidate in an office" },
  { src: "/media/hr-relations.jpg", alt: "A manager leading a team discussion around a table" },
  { src: "/media/hr-comp.jpg", alt: "A team reviewing compensation data on screen" },
  { src: "/media/hr-compliance.jpg", alt: "Colleagues reviewing HR policies in a meeting" },
  { src: "/media/hr-safety.jpg", alt: "A workplace safety and policy meeting" },
  { src: "/media/hr-training.jpg", alt: "An employee training session in a modern office" },
];

export default function HrPage() {
  const cats = hr.groups[0].categories;

  return (
    <PremiumServicePage
      path="/services/hr"
      eyebrow="Human Resources"
      title="HR that protects your team and your business"
      intro={hr.intro}
      heroImage="/media/hr-hero.jpg"
      heroAlt="An HR team welcoming a new hire in an office"
      coreEyebrow="What we handle"
      coreHeading="People operations, end to end"
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
