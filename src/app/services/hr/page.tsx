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

const faqs = [
  {
    q: "Do I need HR support if I only have a few employees?",
    a: "Especially then. Small teams carry the same compliance risk as large ones, usually without anyone whose job is to manage it. We handle payroll setup, handbooks, classifications, and documentation so one honest mistake does not turn into a fine or a lawsuit.",
  },
  {
    q: "Can you help with hiring and onboarding?",
    a: "Yes. We write job descriptions, support recruiting and interviews, run background checks, and build an onboarding process so new hires start productive instead of confused.",
  },
  {
    q: "What happens when an employee issue comes up?",
    a: "You get a plan instead of a panic. We help you handle complaints, terminations, leave requests, and documentation the right way, so the situation is resolved cleanly and on the record.",
  },
  {
    q: "Do you keep us compliant with employment laws?",
    a: "That is a core part of what we do. We keep your policies, records, and pay practices in line with federal, state, and local requirements, and we watch for changes so you are never caught off guard.",
  },
  {
    q: "Can you work alongside our payroll or benefits provider?",
    a: "Yes. We coordinate with your existing payroll, benefits, and insurance partners, or help you choose better ones. Either way, you get one point of contact instead of chasing several vendors.",
  },
  {
    q: "Will you write our employee handbook and policies?",
    a: "Yes. We build a handbook and the supporting policies around how your business actually runs, keep them compliant with current law, and update them as the rules or your team change.",
  },
  {
    q: "What does working with you look like day to day?",
    a: "You get a dedicated point of contact who handles the HR work in the background and is available when something comes up. No call center and no ticket queue, just a real person who knows your business.",
  },
];

export default function HrPage() {
  const cats = hr.groups[0].categories;

  return (
    <PremiumServicePage
      path="/services/hr"
      graphic="hr"
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
      faqs={faqs}
    />
  );
}
