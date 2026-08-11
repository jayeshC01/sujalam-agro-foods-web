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
    description: "Cold-pressed groundnut, mustard & sesame oils for daily cooking.",
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
    description: "Pure massage & wellness oils, cold-pressed for skin and body care.",
    accent: "bg-terracotta/15 text-terracotta",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5 8 8a5.5 5.5 0 1 0 8 0l-4-5.5Z" />
        <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
      </svg>
    ),
  },
  {
    slug: "masalas",
    name: "Masalas",
    description: "Stone-ground spice blends made in small batches for full flavour.",
    accent: "bg-leaf/15 text-leaf",
    icon: (
      <svg {...iconProps}>
        <path d="M4 10a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" />
        <path d="M8 10h8M9 14h6" />
      </svg>
    ),
  },
  {
    slug: "papad",
    name: "Papad",
    description: "Sun-dried, handmade papad rolled fresh using traditional recipes.",
    accent: "bg-mustard/15 text-mustard-light",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17M4.6 7.5l14.8 9M4.6 16.5l14.8-9" />
      </svg>
    ),
  },
];
