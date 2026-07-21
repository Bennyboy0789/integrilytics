import type { Metadata } from "next";
import LegalPage from "../LegalPage";
import JsonLd, { breadcrumb } from "../JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions | IntegriLytics",
  description:
    "The terms and conditions that govern your use of the IntegriLytics, Inc. website and content.",
  alternates: { canonical: "https://www.integrilyticsinc.com/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions" },
        ])}
      />
      <LegalPage title="Terms & Conditions" updated="Effective February 7, 2026 · Last updated February 7, 2026">
        <h2>1. Using Our Site</h2>
        <p>You can look around, read our content, and contact us. Please don&apos;t:</p>
        <ul>
          <li>Break the law</li>
          <li>Hack or disrupt the website</li>
          <li>Copy our content without permission</li>
        </ul>
        <p>Basically, play nice.</p>

        <h2>2. Our Services</h2>
        <p>
          We provide accounting, HR, and operational oversight. We aim to be helpful, but nothing here is a
          substitute for your own professional advice. If in doubt, ask us before acting.
        </p>

        <h2>3. Accuracy of Information</h2>
        <p>We try to keep our content accurate, but sometimes things change. Use what we share as guidance, not gospel.</p>

        <h2>4. Intellectual Property</h2>
        <p>
          Text, images, logos, and anything else on this site belong to us (or our partners). You can&apos;t copy or
          distribute it without permission.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          We&apos;re good at what we do, but we can&apos;t promise perfection. We are not liable for damages, lost
          profits, or any mistakes in decisions you make based on this site.
        </p>

        <h2>6. Links to Other Websites</h2>
        <p>
          Sometimes we link to other sites. We don&apos;t control them, and we&apos;re not responsible for their
          content, privacy, or accuracy.
        </p>

        <h2>7. Privacy &amp; Confidentiality</h2>
        <p>
          We care about your info. General messages through the website may not be fully secure. For sensitive
          info, contact us directly.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>We can update these Terms anytime. The newest version is always here.</p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of North Carolina. Disputes go through the courts there.
        </p>

        <h2>10. Contact</h2>
        <p>
          <strong>IntegriLytics, Inc.</strong>
          <br />
          <a href="mailto:info@integrilyticsinc.com">info@integrilyticsinc.com</a>
          <br />
          <a href="tel:+18883160360">(888) 316-0360</a>
          <br />
          225 Green Street, Suite 601-F
          <br />
          Fayetteville, NC 28311
        </p>
      </LegalPage>
    </>
  );
}
