import type { ProductHighlight } from "@/lib/products";

const ICON_PROPS = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ProductHighlightIcon({
  icon,
}: {
  icon: ProductHighlight["icon"];
}) {
  switch (icon) {
    case "flame":
      return (
        <svg {...ICON_PROPS}>
          <path d="M12 3c3 3 5 6 5 9.5a5 5 0 0 1-10 0c0-1.6.6-3 1.6-4.3.3 1 1 1.7 1.9 1.5-.5-1.9.2-3.8 1.5-6.2Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...ICON_PROPS}>
          <path d="M20 4C10 4 4 10 4 18c0 .7 0 1.3.1 2 8-1 14-7 15.9-16Z" />
          <path d="M4.5 19.5c4-4 9-9 15-15" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...ICON_PROPS}>
          <path d="M12 3c2 2.5 5 6.2 5 9.5A5 5 0 0 1 7 12.5C7 9.2 10 5.5 12 3Z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...ICON_PROPS}>
          <path d="M12 20.5 4.5 13a4.8 4.8 0 0 1 0-6.8 4.8 4.8 0 0 1 6.8 0l.7.7.7-.7a4.8 4.8 0 0 1 6.8 0 4.8 4.8 0 0 1 0 6.8L12 20.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...ICON_PROPS}>
          <path d="M12 3.5 19 6v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-2.5Z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...ICON_PROPS}>
          <path d="M12 3.5l2.5 5.4 5.9.7-4.4 4 1.2 5.9-5.2-3-5.2 3 1.2-5.9-4.4-4 5.9-.7L12 3.5Z" />
        </svg>
      );
    default:
      return (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
