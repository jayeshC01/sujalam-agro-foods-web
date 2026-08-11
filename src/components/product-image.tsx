function bottleIcon(size: "sm" | "lg") {
  const props = {
    width: size === "lg" ? 88 : 64,
    height: size === "lg" ? 112 : 82,
    viewBox: "0 0 48 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg {...props}>
      <rect x="19" y="4" width="10" height="8" rx="2" />
      <path d="M17 12h14l3 8v34a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V20l3-8Z" />
      <path d="M14 28h20" />
    </svg>
  );
}

export function ProductImage({
  tone,
  size = "sm",
}: {
  tone: string;
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={`flex items-center justify-center ${tone} ${
        size === "lg"
          ? "h-72 rounded-2xl sm:h-80"
          : "aspect-square rounded-t-2xl"
      }`}
      aria-hidden
    >
      {bottleIcon(size)}
    </div>
  );
}
