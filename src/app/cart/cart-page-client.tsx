"use client";

import Link from "next/link";
import { useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextField, TextAreaField } from "@/components/form-field";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getProductBySlug } from "@/lib/products";
import { isValidEmail } from "@/lib/validation";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartPageClient() {
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

  const emailValid = form.email.trim() === "" || isValidEmail(form.email);

  const canCheckout =
    lineItems.length > 0 &&
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    emailValid;

  function handlePlaceOrder() {
    const message = buildOrderMessage(lineItems, form);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
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
                        <QuantityStepper
                          quantity={item.quantity}
                          onDecrease={() =>
                            updateQuantity(
                              item.slug,
                              item.packSize,
                              item.quantity - 1,
                            )
                          }
                          onIncrease={() =>
                            updateQuantity(
                              item.slug,
                              item.packSize,
                              item.quantity + 1,
                            )
                          }
                          size="sm"
                        />
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
                  <TextField
                    label="Name"
                    required
                    value={form.name}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, name: value }))
                    }
                    placeholder="Your full name"
                  />
                  <TextField
                    label="Phone Number"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, phone: value }))
                    }
                    placeholder="+91 00000 00000"
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, email: value }))
                    }
                    placeholder="you@example.com"
                    error={
                      emailValid
                        ? undefined
                        : "Enter a valid email address, or leave it blank."
                    }
                  />
                  <TextAreaField
                    label="Shipping Address"
                    value={form.address}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, address: value }))
                    }
                    placeholder="Leave blank for self-pickup"
                  />
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={!canCheckout}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  <WhatsAppIcon />
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
