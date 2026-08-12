import type { ReactNode } from "react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: ReactNode;
  accent: string;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CATEGORIES: Category[] = [
  {
    slug: "edible-oil",
    name: "Edible Oils",
    description:
      "Pure, wood-pressed mustard, groundnut, coconut, sesame, safflower, almond, and sunflower oils crafted for wholesome daily cooking.",
    accent: "bg-mustard/15 text-mustard-light",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3c2 2.5 5 6.2 5 9.5A5 5 0 0 1 7 12.5C7 9.2 10 5.5 12 3Z" />
        <path d="M9.5 13.5c.5 1.5 1.8 2.5 2.5 2.5" />
      </svg>
    ),
  },
  {
    slug: "non-edible-oil",
    name: "Non-Edible Oils",
    description:
      "Pure castor and mahua oils for natural wellness and skincare, alongside our traditional diya blend for auspicious pooja.",
    accent: "bg-terracotta/15 text-terracotta",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5 8 8a5.5 5.5 0 1 0 8 0l-4-5.5Z" />
        <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
      </svg>
    ),
  },
];
