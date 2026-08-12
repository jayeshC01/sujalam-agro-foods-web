import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { CERTIFICATIONS, CONTACT, SECTION_IDS, SOCIALS } from "@/lib/site-config";

const contactIconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const whatsappNumber = CONTACT.phone.replace(/[^\d]/g, "");

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-mustard/20 bg-leaf-dark text-cream/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-mustard/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mustard text-ink">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21c-4.5 0-7-3.5-7-8 0-4 3-7.5 7-11 4 3.5 7 7 7 11 0 4.5-2.5 8-7 8Z" />
                <path d="M12 21v-6" />
              </svg>
            </span>
            <span className="font-serif text-lg font-semibold text-cream">
              Sujalam Agro Foods
            </span>
          </div>
          <p className="mt-3 text-sm text-cream/60">
            Bringing the ancient tradition of kacchi ghani straight to your
            home. 100% pure, wood-pressed oils with zero preservatives.
          </p>
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sujalam Agro Foods on Instagram"
            className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-mustard-light hover:text-mustard-light"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-mustard-light">
            Catalog
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/catalog?category=${category.slug}`}
                  className="transition-colors hover:text-mustard-light"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-mustard-light">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href={`/#${SECTION_IDS.ourStory}`}
                className="transition-colors hover:text-mustard-light"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-mustard-light"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/policies/privacy-policy"
                className="transition-colors hover:text-mustard-light"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policies/terms-of-service"
                className="transition-colors hover:text-mustard-light"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-mustard-light">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-mustard-light">
                <path d="M3 6h18v12H3z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-mustard-light"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-mustard-light">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              {CONTACT.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-mustard-light">
                <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {CONTACT.location}
            </li>
            <li className="flex items-start gap-2.5">
              <svg
                {...contactIconProps}
                className="mt-0.5 shrink-0 text-mustard-light"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-6h6v6" />
              </svg>
              <span className="text-cream/60">{CONTACT.address}</span>
            </li>
          </ul>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.37c.01-4.55 3.7-8.24 8.28-8.24Zm-4.52 4.13c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
            </svg>
            Place Order via WhatsApp
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="relative mx-auto h-[3px] max-w-6xl bg-gradient-to-r from-transparent via-mustard/50 to-transparent"
      />

      <div className="relative px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-x-8 gap-y-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex w-20 flex-col items-center gap-1.5 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-md ring-1 ring-mustard/30">
                <span className="text-[10px] font-bold tracking-wide text-leaf-dark">
                  {cert.wordmark}
                </span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-cream">
                {cert.name}
              </span>
              <span className="text-[10px] leading-tight text-cream/45">
                {cert.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-cream/10 px-6 py-4 text-center text-xs text-cream/50">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span>
            © {new Date().getFullYear()} Sujalam Agro Foods. All rights
            reserved.
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-semibold text-cream/70 transition-colors hover:text-mustard-light sm:absolute sm:right-0"
          >
            Back to top
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
