import type { Metadata } from "next";
// Heading font — swap this import + call to try a different one (keep variable: "--font-heading").
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

const headingFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

// Body font — swap this import + call to try a different one (keep variable: "--font-body").
const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integrilyticsinc.com"),
  title: "IntegriLytics | Accounting, HR & Operational Oversight",
  description:
    "Expert accounting, HR, and operational oversight for small businesses nationwide. IntegriLytics handles the numbers and the people, remote or on-site.",
  alternates: {
    canonical: "https://www.integrilyticsinc.com",
  },
  openGraph: {
    title: "IntegriLytics | Accounting, HR & Operational Oversight",
    description:
      "Expert accounting, HR, and operational oversight for small businesses nationwide. We handle the numbers and the people so you can run your business.",
    url: "https://www.integrilyticsinc.com",
    type: "website",
    siteName: "IntegriLytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegriLytics | Accounting, HR & Operational Oversight",
    description:
      "Expert accounting, HR, and operational oversight for small businesses nationwide. We handle the numbers and the people so you can run your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
