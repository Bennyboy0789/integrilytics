import type { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders an article's Markdown body with the site's premium editorial styling.
// Normalizes legacy Wix booking links to the new /book route and opens external links safely.
export default function ArticleBody({ markdown }: { markdown: string }) {
  const cleaned = markdown.replace(
    /https?:\/\/(www\.)?integrilyticsinc\.com\/book-online/g,
    "/book"
  );

  return (
    <div className="text-gray-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-blue-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-blue-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mt-4 [&_p]:text-[1.05rem] [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5 [&_li]:pl-1 [&_strong]:text-blue-900 [&_strong]:font-semibold [&_a]:text-brass-600 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass-700 [&_hr]:my-10 [&_hr]:border-cream-200 [&_blockquote]:border-l-2 [&_blockquote]:border-brass-300 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-gray-600">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a"> & { href?: string }) => {
            const isExternal = !!href && /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
}
