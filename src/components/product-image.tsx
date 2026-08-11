import type { ProductImageKind } from "@/lib/products";

const iconProps = {
  width: 44,
  height: 56,
  viewBox: "0 0 48 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<ProductImageKind, React.ReactNode> = {
  bottle: (
    <svg {...iconProps}>
      <rect x="19" y="4" width="10" height="8" rx="2" />
      <path d="M17 12h14l3 8v34a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V20l3-8Z" />
      <path d="M14 28h20" />
    </svg>
  ),
  pouch: (
    <svg {...iconProps}>
      <path d="M14 12h20l2 6-3 3v29a6 6 0 0 1-6 6H21a6 6 0 0 1-6-6V21l-3-3 2-6Z" />
      <path d="M20 12V8a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  disc: (
    <svg {...iconProps}>
      <circle cx="24" cy="32" r="18" />
      <path d="M24 14v36M8.5 21l31 22M8.5 43l31-22" />
    </svg>
  ),
};

export function ProductImage({
  kind,
  tone,
}: {
  kind: ProductImageKind;
  tone: string;
}) {
  return (
    <div
      className={`flex h-36 items-center justify-center rounded-t-2xl ${tone}`}
      aria-hidden
    >
      {ICONS[kind]}
    </div>
  );
}
