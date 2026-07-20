import Image from "next/image";
import Link from "next/link";
import NavServices from "./NavServices";
import MobileNav from "./MobileNav";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";

// Shared site navigation. `sticky` for in-flow content pages; default (fixed) for the homepage hero.
export default function SiteHeader({ sticky = false }: { sticky?: boolean }) {
  return (
    <nav
      className={`${sticky ? "sticky" : "fixed"} top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" aria-label="IntegriLytics home" className="flex items-center">
          <Image
            src="/media/logo.png"
            alt="IntegriLytics"
            width={1536}
            height={1024}
            priority
            className="h-20 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <NavServices />
          <Link href="/about" className="hover:text-blue-900 transition-colors">About</Link>
          <Link href="/resources" className="hover:text-blue-900 transition-colors">Resources</Link>
          <a
            href="https://community.suitedash.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors"
          >
            Client Portal
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 text-blue-900 font-semibold hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/book"
            className="px-5 py-2 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
