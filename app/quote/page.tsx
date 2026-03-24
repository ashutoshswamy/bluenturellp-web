import type { Metadata } from "next";
import QuoteContent from "./QuoteContent";

export const metadata: Metadata = {
  title: "Request a Custom Quote — Get Started",
  description:
    "Request a personalized trade quotation from Bluenture LLP. From procurement and quality assurance to documentation and logistics coordination — get a tailored proposal for your commodity sourcing needs.",
  alternates: {
    canonical: "https://bluenturellp.com/quote",
  },
  openGraph: {
    title: "Request a Custom Quote — Bluenture LLP",
    description:
      "Get a personalized proposal tailored to your trade requirements. Response within 24 hours.",
    url: "https://bluenturellp.com/quote",
  },
  twitter: {
    title: "Request a Custom Quote — Bluenture LLP",
    description:
      "Get a personalized proposal tailored to your trade requirements. Response within 24 hours.",
  },
};

export default function Quote() {
  return <QuoteContent />;
}
