import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_TITLE = "Sujalam Agro Foods | Pure, Cold-Pressed & Wood-Pressed Oils";
const SITE_DESCRIPTION =
  "Sujalam Agro Foods brings you traditionally wood-pressed, cold-pressed edible & non-edible oils — made from handpicked, high-quality seeds with zero preservatives.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sujalam Agro Foods",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Sujalam Agro Foods",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
