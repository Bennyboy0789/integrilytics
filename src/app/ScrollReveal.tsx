"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Gentle fade-in-up as `.reveal` elements enter view. Built to be bullet-proof:
// - content is only hidden once JS runs (so no-JS/SEO shows everything),
// - anything already on screen reveals immediately,
// - a MutationObserver re-scans when the DOM changes (client nav + dev Fast Refresh),
// - a timeout safety net guarantees nothing can ever stay hidden.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsIO = typeof IntersectionObserver !== "undefined";

    const io =
      !reduce && supportsIO
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  io?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0, rootMargin: "0px 0px -10% 0px" }
          )
        : null;

    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        if (!io) {
          el.classList.add("is-visible");
        } else if (el.getBoundingClientRect().top < vh() * 0.95) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      });
    };

    scan();

    // Re-scan on DOM changes (client-side navigation, dev Fast Refresh).
    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: reveal everything after a moment even if an observer misses.
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 2500);

    return () => {
      io?.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
