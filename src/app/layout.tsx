import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rightbrain Next.js Template",
  description:
    "A template for building AI-powered apps with Rightbrain and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://replit.com/public/js/repl-auth-v2.js" />
      </head>
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
