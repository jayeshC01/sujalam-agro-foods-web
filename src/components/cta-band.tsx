import Link from "next/link";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-terracotta px-8 py-14 text-center text-cream sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-mustard/20 blur-3xl"
        />
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience the purity of tradition
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/85">
          Explore our complete range of pure, wood-pressed edible and
          non-edible oils. Not sure where to start? Reach out, and
          we&apos;ll gladly help you find the perfect fit for your needs.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/catalog"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-terracotta-dark shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Browse the Catalog
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
