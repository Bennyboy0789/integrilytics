"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PHONE_DISPLAY = "(888) 316-0360";
const PHONE_TEL = "+18883160360";

const services = [
  { label: "Accounting", href: "/services/accounting" },
  { label: "Human Resources", href: "/services/hr" },
  { label: "Operational Oversight", href: "/services/operations" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-blue-900 hover:bg-blue-50"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && mounted && createPortal(
        <div className="md:hidden fixed inset-x-0 top-24 bottom-0 z-40 overflow-y-auto border-t border-gray-100 bg-white px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Services</p>
          <div className="mb-6 flex flex-col">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={close}
                className="py-3 text-lg font-semibold text-blue-900 border-b border-gray-100"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <Link href="/about" onClick={close} className="py-3 text-lg font-semibold text-blue-900 border-b border-gray-100">
              About
            </Link>
            <Link href="/resources" onClick={close} className="py-3 text-lg font-semibold text-blue-900 border-b border-gray-100">
              Resources
            </Link>
            <a
              href="https://community.suitedash.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="py-3 text-lg font-semibold text-blue-900 border-b border-gray-100"
            >
              Client Portal
            </a>
            <a href={`tel:${PHONE_TEL}`} onClick={close} className="py-3 text-lg font-semibold text-blue-900 border-b border-gray-100">
              {PHONE_DISPLAY}
            </a>
          </div>

          <Link
            href="/book"
            onClick={close}
            className="mt-6 block rounded-full bg-blue-900 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Book a Consultation
          </Link>
        </div>,
        document.body
      )}
    </div>
  );
}
