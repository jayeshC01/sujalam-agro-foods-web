import type { Metadata } from "next";
import { CartPageClient } from "./cart-page-client";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your order and check out via WhatsApp.",
};

export default function CartPage() {
  return <CartPageClient />;
}
