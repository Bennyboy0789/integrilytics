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
          <p className="font-bold text-white text-base">IntegriLytics, Inc.</p>
          <address className="not-italic mt-2 leading-relaxed">
            225 Green Street, Suite 601-F
            <br />
            Fayetteville, NC 28311
          </address>
          <p className="mt-2"><a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_DISPLAY}</a></p>
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
          <p className="mt-4 max-w-md md:ml-auto text-blue-400/60 text-xs leading-relaxed">IntegriLytics, Inc. is not a licensed CPA firm and does not provide attest or assurance services, including financial statement audits, reviews, compilations, or independent auditor reports. Services requiring CPA, CFE, or other professional licensure are performed by appropriately licensed professionals in accordance with applicable laws, regulations, and professional requirements.</p>
        </div>
      </div>
    </footer>
  );
}
