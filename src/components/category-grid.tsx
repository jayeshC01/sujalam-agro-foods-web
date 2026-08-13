import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
          Our Collections
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Every Drop, One Standard of Purity
        </h2>
        <p className="mt-4 text-ink/70">
          Browse our carefully curated catalog of pure, traditional oils
          for your culinary, wellness, and ritual needs.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/catalog?category=${category.slug}`}
            className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-mustard/15 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.accent}`}
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
