import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CATEGORIES } from "@/lib/categories";
import { CERTIFICATIONS, CONTACT, SECTION_IDS, SOCIALS } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const BRAND_DESCRIPTION =
  "Bringing the ancient tradition of kacchi ghani straight to your home. 100% pure, wood-pressed oils with zero preservatives.";

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

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#143524] text-[#A6BBAA]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E5A72B]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#E5A72B]/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-y-8 px-6 py-10 sm:hidden lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-8">
        <div className="lg:w-56">
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
            <span className="font-serif text-lg font-semibold text-white">
              Sujalam Agro Foods
            </span>
          </div>
          <p className="mt-3 text-sm text-[#A6BBAA]">{BRAND_DESCRIPTION}</p>
        </div>

        <div className="lg:w-32">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#E5A72B]">
            Catalog
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/catalog?category=${category.slug}`}
                  className="transition-colors hover:text-[#E5A72B]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-40">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#E5A72B]">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href={`/#${SECTION_IDS.ourStory}`}
                className="transition-colors hover:text-[#E5A72B]"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[#E5A72B]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/policies/privacy-policy"
                className="transition-colors hover:text-[#E5A72B]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/policies/terms-of-service"
                className="transition-colors hover:text-[#E5A72B]"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-48">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#E5A72B]">
            Licensing &amp; Certification
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name} className="flex items-start gap-2.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream p-1.5 shadow-sm">
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-[8px] font-bold tracking-wide text-leaf-dark">
                      {cert.wordmark}
                    </span>
                  )}
                </span>
                <span>
                  <span className="block text-[#A6BBAA]">{cert.name}</span>
                  <span className="block text-[11px] leading-tight text-[#A6BBAA]/60">
                    {cert.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-64">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#E5A72B]">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#A6BBAA]">
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                <path d="M3 6h18v12H3z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-[#E5A72B]"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              {CONTACT.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#E5A72B]"
              >
                {SOCIALS.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {CONTACT.location}
            </li>
            <li className="flex items-start gap-2.5">
              <svg
                {...contactIconProps}
                className="mt-0.5 shrink-0 text-[#A6BBAA]"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-6h6v6" />
              </svg>
              <span className="text-[#A6BBAA]">{CONTACT.address}</span>
            </li>
          </ul>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Place Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Tablet-only layout (iPad and similar): sm–lg */}
      <div className="relative mx-auto hidden max-w-6xl px-8 py-12 sm:block lg:hidden">
        <div className="relative">
          <div className="grid grid-cols-3 gap-x-10 gap-y-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
                  <svg
                    width="20"
                    height="20"
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
                <span className="font-serif text-xl font-semibold text-white">
                  Sujalam Agro Foods
                </span>
              </div>
              <p className="mt-3 text-sm text-[#A6BBAA]">
                Kacchi Ghani: Pure Tradition, Modern Purity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#A6BBAA]">
                {BRAND_DESCRIPTION}
              </p>
            </div>

            <div className="pt-[14px]">
              <h3 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-[#E5A72B]">
                <svg {...contactIconProps} width={15} height={15} className="shrink-0">
                  <path d="M12 3.5s5.5 6.8 5.5 10.8a5.5 5.5 0 1 1-11 0C6.5 10.3 12 3.5 12 3.5Z" />
                </svg>
                Discover Oils
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {CATEGORIES.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/catalog?category=${category.slug}`}
                      className="transition-colors hover:text-[#E5A72B]"
                    >
                      {category.name.replace(/\s*Oils?$/i, "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-[14px]">
              <h3 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-[#E5A72B]">
                <svg {...contactIconProps} width={15} height={15} className="shrink-0">
                  <path d="M5 19c9 0 13-6.5 13-15-9.5 0-14.5 4.5-14.5 13 0 1.1.4 2 1.5 2Z" />
                  <path d="M6 18c2-4.5 5.5-8.5 11-11.5" />
                </svg>
                Company Insights
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <Link
                    href={`/#${SECTION_IDS.ourStory}`}
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/privacy-policy"
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/terms-of-service"
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[30px] grid grid-cols-2 gap-x-10 gap-y-14">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#E5A72B]">
                Get in Touch
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[#A6BBAA]">
                <li className="flex items-center gap-2.5">
                  <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                    <path d="M3 6h18v12H3z" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                  {CONTACT.phone}
                </li>
                <li className="flex items-center gap-2.5">
                  <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#E5A72B]"
                  >
                    {SOCIALS.instagramHandle}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg {...contactIconProps} className="shrink-0 text-[#A6BBAA]">
                    <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {CONTACT.location}
                </li>
                <li className="flex items-start gap-2.5">
                  <svg {...contactIconProps} className="mt-0.5 shrink-0 text-[#A6BBAA]">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                  <span>{CONTACT.address}</span>
                </li>
              </ul>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Place Order via WhatsApp
              </a>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#E5A72B]">
                <svg {...contactIconProps} width={15} height={15} className="shrink-0">
                  <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Our Verified Promise
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-7">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream p-2 shadow-sm">
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span>
                      <span className="block text-xs leading-tight text-[#A6BBAA]">
                        {cert.name.split(":")[0]}
                      </span>
                      <span className="block text-[10px] leading-tight text-[#A6BBAA]/60">
                        {cert.detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-4 text-center text-xs text-[#A6BBAA]">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span>
            © {new Date().getFullYear()} Sujalam Agro Foods. All rights
            reserved.
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-semibold text-[#A6BBAA] transition-colors hover:text-[#E5A72B] sm:absolute sm:right-0"
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
