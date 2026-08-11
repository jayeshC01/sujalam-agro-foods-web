import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

const STATS = [
  { value: `${CATEGORIES.length}`, label: "Product Ranges" },
  { value: "0%", label: "Artificial Additives" },
  { value: "100%", label: "Traditional Process" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-leaf text-cream">
      {/* Decorative organic blobs instead of stock photography */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mustard/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-terracotta/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mustard-light ring-1 ring-cream/20">
            Farm to Home, Since Generations
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Pure oils, real spices,
            <br className="hidden sm:block" /> made the traditional way
          </h1>

          <p className="mt-6 max-w-lg text-lg text-cream/80">
            Sujalam Agro Foods brings you cold-pressed edible &amp;
            non-edible oils, hand-blended masalas, and sun-dried papad —
            crafted using methods passed down through generations, with
            nothing artificial added.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/catalog"
              className="rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
            >
              Browse the Catalog
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Get in Touch
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8 text-cream/90">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-serif text-2xl font-semibold">
                  {stat.value}
                </dd>
                <dt className="text-xs uppercase tracking-wide text-cream/60">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Composition of stacked "product jar" shapes, built purely in CSS/SVG */}
        <div className="relative mx-auto hidden h-96 w-full max-w-md md:block">
          <div className="absolute right-6 top-4 h-64 w-44 rounded-t-[3rem] rounded-b-2xl bg-mustard-light shadow-2xl">
            <div className="h-6 w-20 mx-auto -translate-y-4 rounded-full bg-mustard" />
          </div>
          <div className="absolute left-2 top-24 h-52 w-40 rounded-t-[2.5rem] rounded-b-2xl bg-terracotta shadow-2xl">
            <div className="h-5 w-16 mx-auto -translate-y-3 rounded-full bg-terracotta-dark" />
          </div>
          <div className="absolute bottom-0 left-1/4 h-36 w-56 rounded-3xl bg-cream/95 shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
