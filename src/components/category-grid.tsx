import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
          Our Range
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {CATEGORIES.length} categories, one standard of purity
        </h2>
        <p className="mt-4 text-ink/70">
          Every product is filtered by what matters — browse the full
          catalog by category and find exactly what your kitchen needs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/catalog?category=${category.slug}`}
            className="group flex flex-col rounded-2xl border border-mustard/15 bg-white/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.accent}`}
            >
              {category.icon}
            </span>
            <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
              {category.name}
            </h3>
            <p className="mt-2 text-sm text-ink/65">{category.description}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-dark opacity-0 transition-opacity group-hover:opacity-100">
              View products →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
