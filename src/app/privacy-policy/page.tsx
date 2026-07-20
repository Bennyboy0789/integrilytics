import type { Metadata } from "next";
import LegalPage from "../LegalPage";
import JsonLd, { breadcrumb } from "../JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | IntegriLytics",
  description:
    "How IntegriLytics, Inc. collects, uses, and protects your information when you visit our website and inquire about our services.",
  alternates: { canonical: "https://integrilytics.vercel.app/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <LegalPage title="Privacy Policy">
        <p>
          At IntegriLytics, Inc., we value the trust you place in us when sharing your information. This Privacy
          Policy explains how we collect, use, and protect your data when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide, such as your name, email address, and
          professional affiliation when you inquire about our services. We also gather technical data like IP
          addresses and browsing activity to understand site interactions.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          We use your information to provide our services, respond to your requests, and share relevant industry
          insights. We may also use technical data to improve our website&apos;s functionality and performance.
        </p>

        <h2>Cookies and Tracking</h2>
        <p>
          Our website uses cookies to store your preferences and analyze site traffic. You can adjust your browser
          settings to manage or block cookies, although this may limit certain aspects of your experience on our
          site.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may work with trusted third-party partners for services like web hosting and analytics. These providers
          only have access to the data necessary to perform their specific tasks and are required to keep your
          information secure.
        </p>

        <h2>Data Security</h2>
        <p>
          We use industry-standard security measures to safeguard your data from unauthorized access or disclosure.
          While we take every precaution, no internet-based transmission can be guaranteed to be completely secure.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information only as long as necessary to provide our services or as required to
          meet our professional and administrative obligations.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to review the information we have about you, request corrections, or ask for your data
          to be deleted in certain cases. Please contact us to exercise these rights.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this policy or our data practices, please reach out to us at{" "}
          <a href="mailto:info@integrilyticsinc.com">info@integrilyticsinc.com</a> or{" "}
          <a href="tel:+18883160360">(888) 316-0360</a>.
        </p>
      </LegalPage>
    </>
  );
}
