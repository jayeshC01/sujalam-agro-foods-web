const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const TRUST_POINTS = [
  {
    title: "7-Day Returns",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4v6h6" />
        <path d="M4.5 15a8 8 0 1 0 2-9.5L4 10" />
      </svg>
    ),
  },
  {
    title: "70+ Quality Checks",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3.5 19 6.5V12c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6.5l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "360° Customer Support",
    icon: (
      <svg {...iconProps}>
        <path d="M4.5 13v-1a7.5 7.5 0 0 1 15 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M19.5 19.2a3.8 3.8 0 0 1-3.8 3.8h-2" />
      </svg>
    ),
  },
];

export function TrustBadges() {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {TRUST_POINTS.map((point) => (
        <div key={point.title} className="flex items-center gap-2.5 text-ink/60">
          {point.icon}
          <span className="text-xs font-medium">{point.title}</span>
        </div>
      ))}
    </div>
  );
}
