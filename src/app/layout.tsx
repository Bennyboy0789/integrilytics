import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntegriLytics | Accounting & HR | Fayetteville NC",
  description:
    "Expert accounting, human resources (HR), and business consulting solutions in Fayetteville, NC. IntegriLytics helps your business grow with integrity and precision.",
  keywords: ["accounting", "HR", "human resources", "business consulting", "Fayetteville NC", "tax preparation", "payroll", "IntegriLytics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
