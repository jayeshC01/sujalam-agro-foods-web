"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getProductBySlug } from "@/lib/products";
import { CONTACT } from "@/lib/site-config";

const whatsappNumber = CONTACT.phone.replace(/[^\d]/g, "");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const lineItems = items
    .map((item) => {
      const product = getProductBySlug(item.slug);
      return product ? { ...item, name: product.name } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const subtotal = lineItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const emailValid =
    form.email.trim() === "" || EMAIL_PATTERN.test(form.email.trim());

  const canCheckout =
    lineItems.length > 0 &&
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    emailValid;

  function buildWhatsAppMessage() {
    const lines = [
      "Hi Sujalam Agro Foods, I would like to place the following order:",
      "",
      ...lineItems.map(
        (item, index) =>
          `${index + 1}. ${item.name} (${item.packSize}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
      ),
      "",
      `Total: ${formatPrice(subtotal)}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email.trim() ? `Email: ${form.email}` : null,
      `Shipping Address: ${form.address.trim() || "Self-pickup / to be shared"}`,
    ].filter((line): line is string => line !== null);

    return lines.join("\n");
  }

  function handlePlaceOrder() {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    clearCart();
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Your Cart
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Review &amp; Checkout
          </h1>

          <div className="mt-4 rounded-xl border border-mustard/20 bg-cream-dark px-4 py-3 text-sm text-ink/70">
            All orders at Sujalam Agro Foods are placed via WhatsApp — there
            is no online payment. Fill in your details below, confirm, and
            we&apos;ll open WhatsApp with your order ready to send. Once you
            hit send, our team will take it forward with you directly.
          </div>

          {lineItems.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-mustard/20 bg-white p-10 text-center">
              <p className="text-ink/70">Your cart is empty.</p>
              <Link
                href="/catalog"
                className="mt-6 inline-block rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
              >
                Browse the Catalog
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                    Items ({lineItems.length})
                  </h2>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs font-semibold text-terracotta-dark hover:underline"
                  >
                    Clear cart
                  </button>
                </div>

                <ul className="mt-4 space-y-3">
                  {lineItems.map((item) => (
                    <li
                      key={`${item.slug}-${item.packSize}`}
                      className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-mustard/20 bg-white p-4"
                    >
                      <div>
                        <p className="font-serif text-base font-semibold text-ink">
                          {item.name}
                        </p>
                        <p className="text-sm text-ink/50">
                          {item.packSize} · {formatPrice(item.price)} each
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center rounded-full border border-mustard/25">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.slug,
                                item.packSize,
                                item.quantity - 1,
                              )
                            }
                            aria-label="Decrease quantity"
                            className="px-3 py-1.5 text-ink/70 transition-colors hover:text-terracotta-dark"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm font-semibold text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.slug,
                                item.packSize,
                                item.quantity + 1,
                              )
                            }
                            aria-label="Increase quantity"
                            className="px-3 py-1.5 text-ink/70 transition-colors hover:text-terracotta-dark"
                          >
                            +
                          </button>
                        </div>
                        <span className="w-20 text-right font-serif text-sm font-semibold text-terracotta-dark">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug, item.packSize)}
                          aria-label={`Remove ${item.name}`}
                          className="text-ink/40 transition-colors hover:text-terracotta-dark"
                        >
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
                            <path d="M4 7h16" />
                            <path d="M9 7V4h6v3" />
                            <path d="M6 7l1 13h10l1-13" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-mustard/15 pt-4">
                  <span className="font-semibold text-ink">Total</span>
                  <span className="font-serif text-xl font-semibold text-terracotta-dark">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-mustard/20 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  Your Details
                </h2>

                <div className="mt-4 space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-ink/60">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your full name"
                      className="mt-1 w-full rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink/60">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      placeholder="+91 00000 00000"
                      className="mt-1 w-full rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink/60">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="you@example.com"
                      className={`mt-1 w-full rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50 ${
                        emailValid ? "border-mustard/25" : "border-terracotta"
                      }`}
                    />
                    {!emailValid && (
                      <p className="mt-1 text-xs text-terracotta-dark">
                        Enter a valid email address, or leave it blank.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink/60">
                      Shipping Address
                    </label>
                    <textarea
                      value={form.address}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, address: e.target.value }))
                      }
                      placeholder="Leave blank for self-pickup"
                      rows={3}
                      className="mt-1 w-full resize-none rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={!canCheckout}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.37c.01-4.55 3.7-8.24 8.28-8.24Zm-4.52 4.13c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
                  </svg>
                  Place Order via WhatsApp
                </button>
                <p className="mt-3 text-xs text-ink/50">
                  This opens WhatsApp with your order pre-filled. You&apos;ll
                  need to press send yourself — our team will take it
                  forward manually from there.
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
