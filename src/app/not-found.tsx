import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            404
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We Couldn&rsquo;t Find That Page
          </h1>
          <p className="mt-4 text-ink/70">
            The page you&rsquo;re looking for may have been moved or
            doesn&rsquo;t exist. Let&rsquo;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-block rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
            >
              Back to Home
            </Link>
            <Link
              href="/catalog"
              className="inline-block rounded-full border border-mustard/30 px-7 py-3.5 text-sm font-semibold text-terracotta-dark transition-colors hover:bg-mustard/10"
            >
              Browse the Catalog
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
