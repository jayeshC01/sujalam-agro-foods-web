import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using the Sujalam Agro Foods website and placing orders with us.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Policies
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 space-y-8 text-ink/75">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Overview
              </h2>
              <p className="mt-3">
                These terms govern your use of the Sujalam Agro Foods
                website and any order you place with us. By placing an
                order, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Placing an Order
              </h2>
              <p className="mt-3">
                Orders are currently placed by contacting us directly via
                WhatsApp, phone, or email. An order is only confirmed once
                we acknowledge it back to you, including final pricing and
                quantity.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Pricing
              </h2>
              <p className="mt-3">
                The prices shown on our catalog are our current, final
                prices. If pricing changes in future, we will update the
                catalog accordingly.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Delivery &amp; Self-Pickup
              </h2>
              <p className="mt-3">
                You may choose to have your order delivered through our
                delivery partner, or collect it yourself from us. Delivery
                timelines depend on your location and are shared with you
                at the time of order confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Returns
              </h2>
              <p className="mt-3">
                We offer a 7-day return window from the date of delivery
                for eligible products. To request a return, contact us with
                your order details and we&apos;ll guide you through the
                process.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Non-Edible Products
              </h2>
              <p className="mt-3">
                Products marked &ldquo;Non-Edible&rdquo; on our catalog
                (such as castor, mohata, and diya oil) are intended for
                external, cosmetic, or ritual use only and must never be
                consumed. We are not responsible for misuse of these
                products.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                We make every effort to ensure product quality and accurate
                information on our catalog. To the extent permitted by law,
                we are not liable for indirect or consequential loss
                arising from the use of our products outside their intended
                purpose.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Governing Law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of India, and any
                disputes will be subject to the jurisdiction of the courts
                in Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use
                of our website or services after a change means you accept
                the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Contact Us
              </h2>
              <p className="mt-3">
                For any questions about these terms, reach us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-terracotta-dark hover:underline"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-12 inline-block rounded-full border border-terracotta/30 px-7 py-3.5 text-sm font-semibold text-terracotta-dark transition-colors hover:bg-terracotta/10"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
