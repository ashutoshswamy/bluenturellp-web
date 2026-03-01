import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  weight: ['400', '600', '700', '800'],
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluenture LLP | Global Trading & Sourcing Partner",
  description: "Bluenture LLP is a globally focused trading and sourcing company committed to simplifying cross-border commerce. We specialize in reliable procurement, quality assurance, and timely delivery of high-demand commodities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
