import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT } from "@/lib/site-config";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Policies
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Privacy Policy
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
                Sujalam Agro Foods (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;) respects your privacy. This policy
                explains what personal information we collect, why we
                collect it, and who we share it with.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Browsing This Website
              </h2>
              <p className="mt-3">
                This website does not use cookies, analytics, or tracking
                scripts, and it does not have any sign-up or contact forms.
                Simply browsing our catalog does not send us any personal
                information about you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Information We Collect
              </h2>
              <p className="mt-3">
                We only collect personal information once you place an
                order with us — currently by reaching out directly via
                phone, WhatsApp, or email. At that point, we collect:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your email address</li>
                <li>Your shipping address (for orders that require delivery)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use this information solely to confirm, process, and
                fulfil your order, and to contact you about that order if
                needed.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Sharing Your Information
              </h2>
              <p className="mt-3">
                We do not sell your personal information, and we do not
                share it with third parties for marketing or advertising
                purposes. The only time we share your details is:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>
                  If your order is being delivered, we share your name,
                  phone number, and shipping address with our delivery
                  partner — solely so they can deliver your order to you.
                </li>
              </ul>
              <p className="mt-3">
                If you choose to collect your order yourself instead of
                having it delivered, your details are not shared with any
                third party at all.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                How Long We Keep Your Information
              </h2>
              <p className="mt-3">
                We retain order details for as long as reasonably necessary
                to fulfil your order and handle any related after-sales
                questions, such as returns.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Your Rights
              </h2>
              <p className="mt-3">
                You can ask us what personal information we hold about you,
                request a correction, or ask us to delete it, by writing to
                us at the email below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                Contact Us
              </h2>
              <p className="mt-3">
                For any questions about this policy or your personal
                information, reach us at{" "}
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
