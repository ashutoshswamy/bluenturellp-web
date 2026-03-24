import type { Metadata } from "next";
import CommoditiesContent from "./CommoditiesContent";

export const metadata: Metadata = {
  title: "Commodities — Agricultural, Food, Raw Materials & Consumer Goods",
  description:
    "Explore Bluenture LLP's diverse commodities portfolio including agricultural products, food & beverages, raw materials, and consumer goods. Premium quality sourced from certified suppliers worldwide.",
  alternates: {
    canonical: "https://bluenturellp.com/commodities",
  },
  openGraph: {
    title: "Commodities Portfolio — Bluenture LLP",
    description:
      "Connecting global markets with premium essential resources across key industrial sectors. Agricultural products, food, raw materials, and consumer goods.",
    url: "https://bluenturellp.com/commodities",
  },
  twitter: {
    title: "Commodities Portfolio — Bluenture LLP",
    description:
      "Connecting global markets with premium essential resources across key industrial sectors.",
  },
};

export default function Commodities() {
  return <CommoditiesContent />;
}
