import Image from "next/image";

const TRUST_POINTS = [
  {
    image: "/images/badges/badge-replacement.png",
    title: "3-Day Replacement",
    subtitle: "Not satisfied? We've got you covered.",
  },
  {
    image: "/images/badges/badge-quality-checked.png",
    title: "Quality Checked",
    subtitle: "Carefully tested & packed for your safety.",
  },
  {
    image: "/images/badges/badge-support.png",
    title: "24/7 Support",
    subtitle: "We're here for you, anytime, always.",
  },
];

function TrustIcon({ src, title, size }: { src: string; title: string; size: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-mustard/10"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className="h-[85%] w-[85%] rounded-full object-cover"
        title={title}
      />
    </span>
  );
}

export function TrustBadges() {
  return (
    <>
      {/* Mobile: boxed card, 3 columns separated by dividers */}
      <div className="mt-6 rounded-2xl border border-mustard/15 bg-[#fbf3e6] px-2 py-5 sm:hidden">
        <div className="grid grid-cols-3">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`flex flex-col items-center gap-2 px-2 text-center ${
                index > 0 ? "border-l border-mustard/20" : ""
              }`}
            >
              <TrustIcon src={point.image} title={point.title} size={56} />
              <p className="text-xs font-bold leading-tight text-leaf-dark">
                {point.title}
              </p>
              <p className="text-[11px] leading-tight text-ink/55">
                {point.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and up: horizontal sequence — icon, text, divider, repeat */}
      <div className="mt-6 hidden items-center sm:flex">
        {TRUST_POINTS.map((point, index) => (
          <div key={point.title} className="flex flex-1 items-center pr-6">
            {index > 0 && <span className="mr-6 h-10 w-px shrink-0 bg-mustard/20" />}
            <div className="flex items-center gap-3">
              <TrustIcon src={point.image} title={point.title} size={44} />
              <div>
                <p className="text-sm font-bold leading-tight text-leaf-dark">
                  {point.title}
                </p>
                <p className="text-xs leading-tight text-ink/55">{point.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
