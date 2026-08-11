import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CATEGORIES } from "@/lib/categories";

type CatalogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { category } = await searchParams;
  const selected = CATEGORIES.find((item) => item.slug === category);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Catalog
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {selected ? selected.name : "Our full catalog"} is coming soon
          </h1>
          <p className="mt-4 text-ink/70">
            We&apos;re still photographing and pricing every product. Check
            back shortly, or{" "}
            <Link
              href="/contact"
              className="font-semibold text-terracotta-dark hover:underline"
            >
              get in touch
            </Link>{" "}
            and we&apos;ll help you find what you need in the meantime.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
