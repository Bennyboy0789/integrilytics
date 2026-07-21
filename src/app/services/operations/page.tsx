import type { Metadata } from "next";
import PremiumServicePage from "../PremiumServicePage";
import { operations, serviceSummaries } from "../content";

export const metadata: Metadata = {
  title: "Operational Oversight for Small Businesses | IntegriLytics",
  description:
    "Operational oversight for small businesses nationwide: operations, office admin, process improvement, systems, planning, and performance.",
  alternates: { canonical: "https://www.integrilyticsinc.com/services/operations" },
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

const faqs = [
  {
    q: "What does operational oversight actually mean?",
    a: "It means someone owns the day-to-day details that keep a business running: the systems, processes, files, software, and follow-through. We build that structure and manage it, so the small things stop slipping through the cracks and you are not the only one holding it all together.",
  },
  {
    q: "We do not have any documented processes. Where do we start?",
    a: "That is a normal place to start. We map how your business actually runs today, then write clear standard operating procedures so the work can be repeated, trained, and eventually handed off without everything depending on one person's memory.",
  },
  {
    q: "Can you help us choose and set up business software?",
    a: "Yes. We evaluate options based on how you actually work, handle the setup and integrations with your other tools, and train your team so the software gets used instead of paid for and abandoned.",
  },
  {
    q: "Our office is disorganized. Can you fix that?",
    a: "Yes. We set up physical and digital filing, document management, forms, and administrative procedures so information is easy to find and the office runs without constant firefighting.",
  },
  {
    q: "How do you measure whether operations are improving?",
    a: "We define the numbers that matter for your business, track them, and put them in simple reports and dashboards. You get a clear read on what is working, what is not, and where to focus next, instead of guessing.",
  },
  {
    q: "Do we have to change everything at once?",
    a: "No. We prioritize the changes that will help most, work in manageable steps, and build systems that scale as you grow. Improvement never means shutting the business down to fix it.",
  },
  {
    q: "Can you work with our team remotely?",
    a: "Yes. Most of our operational work is done remotely, with on-site visits when a project calls for it. Distance does not change how closely we work with you or how well we know your business.",
  },
  {
    q: "What size businesses do you support?",
    a: "We focus on small and mid-sized businesses. That means you get senior attention and practical systems built for your size, not enterprise processes forced onto a small team.",
  },
  {
    q: "What is the first thing you do?",
    a: "We start by learning how your business runs today, where the friction is, and what is costing you the most time. From there we build a prioritized plan and start with the fixes that make the biggest difference.",
  },
];

export default function OperationsPage() {
  const cats = operations.groups[0].categories;

  return (
    <PremiumServicePage
      path="/services/operations"
      graphic="operations"
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
      faqs={faqs}
    />
  );
}
