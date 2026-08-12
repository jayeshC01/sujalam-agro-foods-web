export type GalleryVariant = "front" | "label" | "pour";

const BOTTLE_PATHS = (
  <>
    <rect x="19" y="4" width="10" height="8" rx="2" />
    <path d="M17 12h14l3 8v34a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V20l3-8Z" />
    <path d="M14 28h20" />
  </>
);

function bottleIcon(size: "sm" | "lg", variant: GalleryVariant) {
  const props = {
    width: size === "lg" ? 148 : 64,
    height: size === "lg" ? 189 : 82,
    viewBox: "0 0 48 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (variant === "label") {
    return (
      <svg {...props}>
        {BOTTLE_PATHS}
        <rect
          x="15"
          y="32"
          width="18"
          height="13"
          rx="2"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path d="M18.5 37h11M18.5 40.5h7" />
      </svg>
    );
  }

  if (variant === "pour") {
    return (
      <svg {...props}>
        <g transform="rotate(-28 24 32)">{BOTTLE_PATHS}</g>
        <circle cx="9" cy="52" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="6" cy="57" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return <svg {...props}>{BOTTLE_PATHS}</svg>;
}

export function ProductImage({
  tone,
  size = "sm",
  variant = "front",
}: {
  tone: string;
  size?: "sm" | "lg" | "thumb";
  variant?: GalleryVariant;
}) {
  const roundedClass =
    size === "lg"
      ? "w-full rounded-3xl"
      : size === "thumb"
        ? "w-full rounded-xl"
        : "rounded-t-2xl";

  return (
    <div
      className={`flex aspect-square items-center justify-center ${tone} ${roundedClass}`}
      aria-hidden
    >
      {bottleIcon(size === "lg" ? "lg" : "sm", variant)}
    </div>
  );
}
