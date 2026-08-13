import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

const STATS = [
  {
    value: `${CATEGORIES.length}`,
    label: "Premium Ranges",
    icon: (
      <>
        <path d="m12 2 10 5-10 5L2 7z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </>
    ),
  },
  {
    value: "0%",
    label: "Preservatives Added",
    icon: <><circle cx="12" cy="12" r="9" /><path d="m5.5 5.5 13 13" /></>,
  },
  {
    value: "100%",
    label: "Wood-Pressed",
    icon: <path d="M12 3s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12Z" />,
  },
];

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[380px] overflow-hidden sm:h-[min(53.4vw,560px)]"
      style={{
        background: "linear-gradient(135deg, #f3e6d3 0%, #e9d8bf 55%, #dfc9ab 100%)",
      }}
    >
      <div
        className="absolute inset-0 sm:left-auto sm:right-0 sm:aspect-[1717/916] sm:w-auto"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 8%, black 22%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 8%, black 22%)",
        }}
      >
        <Image
          src="/images/hero-oil-pressing.jpg"
          alt="Wood-pressed mustard oil being poured from a lakdi ghana press into a glass bottle"
          fill
          preload
          sizes="(min-width: 1050px) 1050px, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(243,230,211,0.3) 0%, rgba(233,216,191,0.72) 40%, rgba(223,201,171,0.92) 100%)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6 py-12 md:py-16">
        <div className="w-full min-w-0 max-w-[640px] text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-leaf-dark ring-1 ring-leaf/20">
            Nature&rsquo;s Finest, Wood-Pressed the Traditional Way
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-ink lg:text-5xl">
            Pure Oils, Pressed the
            <br />
            Traditional Way.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm text-ink sm:mx-0 sm:text-ink/65">
            Experience the authentic taste and health benefits of 100%
            natural, in-house extracted kacchi ghani oils. Unrefined,
            nutrient-dense, and always preservative-free.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Link
              href="/catalog"
              className="rounded-full bg-leaf px-6 py-2.5 text-sm font-semibold text-cream shadow-md shadow-leaf/20 transition-transform hover:-translate-y-0.5 hover:bg-leaf-dark"
            >
              Browse the Catalog
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-leaf px-6 py-2.5 text-sm font-semibold text-cream shadow-md shadow-leaf/20 transition-transform hover:-translate-y-0.5 hover:bg-leaf-dark"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:flex-nowrap sm:justify-start">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf/10 text-leaf-dark">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {stat.icon}
                  </svg>
                </span>
                <p className="whitespace-nowrap leading-none">
                  <span className="font-serif text-sm font-bold text-terracotta-dark">
                    {stat.value}
                  </span>{" "}
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/60">
                    {stat.label}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
