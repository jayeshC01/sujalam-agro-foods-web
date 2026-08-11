import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Contact Us
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A dedicated contact form is on its way
          </h1>
          <p className="mt-4 text-ink/70">
            In the meantime, reach us directly and we&apos;ll get back to
            you.
          </p>
          <dl className="mt-8 space-y-2 text-ink/80">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-terracotta-dark hover:underline"
                >
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>{CONTACT.phone}</dd>
            </div>
            <div>
              <dt className="sr-only">Location</dt>
              <dd>{CONTACT.location}</dd>
            </div>
          </dl>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full border border-terracotta/30 px-7 py-3.5 text-sm font-semibold text-terracotta-dark transition-colors hover:bg-terracotta/10"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
