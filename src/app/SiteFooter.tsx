import Link from "next/link";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";
const EMAIL = "info@integrilyticsinc.com";

// Shared site footer. Includes contact details, quick links, and legal pages.
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-blue-950 text-blue-300 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-bold text-white text-base">IntegriLytics Inc.</p>
          <p className="mt-2">Fayetteville, NC</p>
          <p><a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_DISPLAY}</a></p>
          <p><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></p>
        </div>
        <div className="md:text-right">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/resources" className="hover:text-white">Resources</Link>
            <Link href="/book" className="hover:text-white">Book a Consultation</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </nav>
          <p className="mt-5">&copy; {year} IntegriLytics Inc. All rights reserved.</p>
          <p className="mt-2">Accounting, HR &amp; operational oversight for small businesses nationwide.</p>
        </div>
      </div>
    </footer>
  );
}
