import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluenturellp.com"),
  title: {
    default: "Bluenture LLP | Global Trading & Sourcing Partner",
    template: "%s | Bluenture LLP",
  },
  description:
    "Bluenture LLP is a globally focused trading and sourcing company committed to simplifying cross-border commerce. We specialize in reliable procurement, quality assurance, and timely delivery of high-demand commodities.",
  keywords: [
    "Bluenture LLP",
    "global trading",
    "commodity sourcing",
    "international trade",
    "procurement",
    "quality assurance",
    "agricultural products",
    "food and beverages",
    "raw materials",
    "consumer goods",
    "cross-border commerce",
    "supply chain",
    "global logistics",
    "import export",
    "trade compliance",
  ],
  authors: [{ name: "Bluenture LLP" }],
  creator: "Bluenture LLP",
  publisher: "Bluenture LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bluenture LLP",
    title: "Bluenture LLP | Global Trading & Sourcing Partner",
    description:
      "Simplifying cross-border commerce with reliable procurement, quality assurance, and timely delivery of commodities worldwide.",
    url: "https://bluenturellp.com",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Bluenture LLP — Global Trading & Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluenture LLP | Global Trading & Sourcing Partner",
    description:
      "Simplifying cross-border commerce with reliable procurement, quality assurance, and timely delivery of commodities worldwide.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://bluenturellp.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bluenturellp.com/#organization",
      name: "Bluenture LLP",
      url: "https://bluenturellp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bluenturellp.com/logo.jpeg",
      },
      description:
        "A globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-91460-86655",
        contactType: "sales",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://bluenturellp.com/#website",
      url: "https://bluenturellp.com",
      name: "Bluenture LLP",
      publisher: {
        "@id": "https://bluenturellp.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://bluenturellp.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VD8CNZDGNY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VD8CNZDGNY');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
