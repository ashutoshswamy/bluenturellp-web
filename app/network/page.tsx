import type { Metadata } from "next";
import NetworkContent from "./NetworkContent";

export const metadata: Metadata = {
  title: "Global Trade Network — Ocean Freight, Air Transit & Logistics",
  description:
    "Discover Bluenture LLP's global trade network — ocean freight, air transit, and comprehensive logistics coordination. Connecting markets across continents with reliable and efficient commodity transport.",
  alternates: {
    canonical: "https://bluenturellp.com/network",
  },
  openGraph: {
    title: "Global Trade Network — Bluenture LLP",
    description:
      "Connecting markets across continents with reliable sea freight, air transit, and comprehensive trade expertise.",
    url: "https://bluenturellp.com/network",
    images: [
      {
        url: "/og-image.png",
        width: 1731,
        height: 909,
        alt: "Bluenture LLP — Global Trading & Sourcing",
      },
    ],
  },
  twitter: {
    title: "Global Trade Network — Bluenture LLP",
    description:
      "Connecting markets across continents with reliable sea freight, air transit, and comprehensive trade expertise.",
  },
};

export default function Network() {
  return <NetworkContent />;
}
