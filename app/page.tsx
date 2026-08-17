import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Global Trading & Sourcing Partner",
  description:
    "Bluenture LLP specializes in reliable procurement, quality assurance, and timely delivery of high-demand commodities across international markets. Explore agricultural products, food & beverages, raw materials, and consumer goods.",
  alternates: {
    canonical: "https://bluenturellp.com",
  },
  openGraph: {
    title: "Bluenture LLP — Global Trading & Sourcing Partner",
    description:
      "Simplifying cross-border commerce with reliable procurement, quality assurance, and timely delivery of commodities worldwide.",
    url: "https://bluenturellp.com",
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
    title: "Bluenture LLP — Global Trading & Sourcing Partner",
    description:
      "Simplifying cross-border commerce with reliable procurement, quality assurance, and timely delivery of commodities worldwide.",
  },
};

export default function Home() {
  return <HomeContent />;
}
