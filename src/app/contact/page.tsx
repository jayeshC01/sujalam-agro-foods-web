import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send Sujalam Agro Foods an enquiry via WhatsApp, or reach us by phone, email, or in person in Nashik, Maharashtra.",
};

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const { product } = await searchParams;
  const productName = Array.isArray(product) ? product[0] : product;
  const initialMessage = productName
    ? `I'm interested in ${productName}.`
    : "";

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Contact Us
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-ink/70">
            Send us an enquiry via WhatsApp, or reach us directly using the
            details below.
          </p>
          <dl className="mt-6 space-y-2 text-ink/80">
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

          <ContactForm initialMessage={initialMessage} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
