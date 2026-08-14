import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
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
        {CATEGORIES.map((category) =>
          category.image ? (
            <Link
              key={category.slug}
              href={`/catalog?category=${category.slug}`}
              className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-mustard/15 bg-ink shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 640px) 320px, 90vw"
                className="transform-gpu object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition-opacity duration-300 group-hover:from-ink/90" />

              <div className="relative mt-auto flex flex-col gap-2 p-6 text-white">
                <h3 className="font-serif text-lg font-semibold">
                  {category.name}
                </h3>
                <p className="grid grid-rows-[0fr] text-sm text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <span className="overflow-hidden">{category.description}</span>
                </p>
                <span className="hidden items-center gap-1 text-sm font-semibold text-mustard opacity-0 transition-opacity duration-300 sm:flex sm:group-hover:opacity-100">
                  View products →
                </span>
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:hidden">
                  Explore →
                </span>
              </div>
            </Link>
          ) : (
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
              <span className="mt-5 hidden items-center gap-1 text-sm font-semibold text-terracotta-dark opacity-0 transition-opacity sm:flex sm:group-hover:opacity-100">
                View products →
              </span>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-dark sm:hidden">
                Explore →
              </span>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
