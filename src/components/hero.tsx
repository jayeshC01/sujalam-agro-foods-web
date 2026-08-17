import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

const STATS = [
  {
    label: `${CATEGORIES.length} Premium Ranges`,
    image: "/images/badges/badge-premium-ranges.png",
  },
  {
    label: "Zero Preservatives Added",
    image: "/images/badges/badge-zero-preservatives.png",
  },
  {
    label: "100% Wood-Pressed the Traditional Way",
    image: "/images/badges/badge-wood-pressed.png",
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
          src="/images/hero-oil-pressing-mobile.jpg"
          alt="Wood-pressed mustard oil being poured from a lakdi ghana press into a glass bottle"
          fill
          preload
          sizes="100vw"
          className="block object-cover object-center sm:hidden"
        />
        <Image
          src="/images/hero-oil-pressing.jpg"
          alt="Wood-pressed mustard oil being poured from a lakdi ghana press into a glass bottle"
          fill
          preload
          sizes="(min-width: 1050px) 1050px, 100vw"
          className="hidden object-cover object-center sm:block"
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
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#143524] ring-1 ring-leaf/25 backdrop-blur-sm sm:bg-leaf/10 sm:text-leaf-dark sm:ring-leaf/20 sm:backdrop-blur-none">
            Nature&rsquo;s Finest, Wood-Pressed the Traditional Way
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-ink lg:text-5xl">
            Pure Oils, Pressed the
            <br />
            Traditional Way.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm font-medium text-ink [text-shadow:0_0_2px_rgba(253,250,243,0.95),0_0_6px_rgba(253,250,243,0.9),0_0_14px_rgba(253,250,243,0.8)] sm:mx-0 sm:font-normal sm:text-ink/65 sm:[text-shadow:none]">
            Experience the authentic taste and health benefits of 100%
            natural, in-house extracted kacchi ghani oils. Unrefined,
            nutrient-dense, and always preservative-free.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Link
              href="/catalog"
              className="rounded-full bg-leaf-dark px-6 py-2.5 text-sm font-semibold text-cream shadow-md shadow-leaf-dark/30 transition-transform hover:-translate-y-0.5 hover:bg-leaf"
            >
              Browse the Catalog
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-leaf-dark px-6 py-2.5 text-sm font-semibold text-cream shadow-md shadow-leaf-dark/30 transition-transform hover:-translate-y-0.5 hover:bg-leaf"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-8 flex flex-nowrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
            {STATS.map((stat) => (
              <Image
                key={stat.label}
                src={stat.image}
                alt={stat.label}
                width={210}
                height={210}
                className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-28 sm:w-28"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
