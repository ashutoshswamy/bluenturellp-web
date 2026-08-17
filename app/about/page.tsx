import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Vision & Values",
  description:
    "Learn about Bluenture LLP — a globally focused trading and sourcing company committed to simplifying cross-border commerce. Discover our mission, vision, verified supplier network, and commitment to quality and transparency.",
  alternates: {
    canonical: "https://bluenturellp.com/about",
  },
  openGraph: {
    title: "About Bluenture LLP — Our Mission, Vision & Values",
    description:
      "A globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide.",
    url: "https://bluenturellp.com/about",
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
    title: "About Bluenture LLP — Our Mission, Vision & Values",
    description:
      "A globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide.",
  },
};

export default function About() {
  return <AboutContent />;
}
