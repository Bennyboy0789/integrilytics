"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Accounting", href: "/services/accounting", blurb: "Bookkeeping, tax, payroll" },
  { label: "Human Resources", href: "/services/hr", blurb: "Payroll, benefits, compliance" },
  { label: "Operational Oversight", href: "/services/operations", blurb: "Systems, process, strategy" },
];

export default function NavServices() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 hover:text-blue-900 transition-colors"
      >
        Services
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 transition-colors hover:bg-blue-50"
              >
                <span className="block font-semibold text-blue-900">{item.label}</span>
                <span className="block text-xs text-gray-500">{item.blurb}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
