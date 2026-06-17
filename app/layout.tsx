import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Printo Press | Premium Printing, Branding & Advertising Solutions",
  description:
    "Printo Press delivers world-class printing, branding, packaging, advertising, and digital marketing services. Elevate your brand with our creative solutions.",
  keywords: [
    "printing services",
    "branding",
    "advertising",
    "packaging design",
    "digital marketing",
    "large format printing",
    "business cards",
    "flyers",
    "brochures",
  ],
  authors: [{ name: "Printo Press" }],
  openGraph: {
    title: "Printo Press | Premium Printing & Branding Solutions",
    description:
      "World-class printing, branding, packaging and digital marketing services.",
    type: "website",
    locale: "en_US",
    siteName: "Printo Press",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printo Press | Premium Printing & Branding Solutions",
    description:
      "World-class printing, branding, packaging and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
