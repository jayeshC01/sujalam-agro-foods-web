import type { ReactNode } from "react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: ReactNode;
  accent: string;
  image?: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "edible-oil",
    name: "Edible Oils",
    description:
      "Pure, wood-pressed mustard, groundnut, coconut, sesame, safflower, almond, and sunflower oils crafted for wholesome daily cooking.",
    accent: "bg-mustard/15 text-mustard-light",
    image: "/images/categories/edible-oil-v2.png",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/icons/edible-oil-icon.png"
        alt=""
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    slug: "non-edible-oil",
    name: "Non-Edible Oils",
    description:
      "Pure castor and mahua oils for natural wellness and skincare, alongside our traditional diya blend for auspicious pooja.",
    accent: "bg-terracotta/15 text-terracotta",
    image: "/images/categories/non-edible-oil-v2.png",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/icons/non-edible-oil-icon.png"
        alt=""
        className="h-full w-full object-contain"
      />
    ),
  },
];
