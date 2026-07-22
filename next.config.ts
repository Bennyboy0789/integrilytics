import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // The article's title/H1 reads "Part 4"; the old slug said "part-3". Keep the
      // old URL working (301) after aligning the slug to the on-page title.
      {
        source: "/resources/the-better-business-blueprint-part-3-bringing-the-blueprint-to-life",
        destination: "/resources/the-better-business-blueprint-part-4-bringing-the-blueprint-to-life",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
