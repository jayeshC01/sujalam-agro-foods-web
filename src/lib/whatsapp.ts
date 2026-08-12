import { formatPrice } from "@/lib/products";
import { CONTACT } from "@/lib/site-config";

export const WHATSAPP_NUMBER = CONTACT.phone.replace(/[^\d]/g, "");

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type OrderLineItem = {
  name: string;
  packSize: string;
  price: number;
  quantity: number;
};

export type OrderDetails = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

export function buildOrderMessage(
  lineItems: OrderLineItem[],
  details: OrderDetails,
): string {
  const subtotal = lineItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    details.email.trim() ? `Email: ${details.email}` : null,
    `Shipping Address: ${details.address.trim() || "Self-pickup / to be shared"}`,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

export type EnquiryDetails = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function buildEnquiryMessage(details: EnquiryDetails): string {
  const lines = [
    "Hi Sujalam Agro Foods, I have an enquiry:",
    "",
    details.message.trim(),
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    details.email.trim() ? `Email: ${details.email}` : null,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}
