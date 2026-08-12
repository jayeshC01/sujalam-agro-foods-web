import { describe, expect, it } from "vitest";
import { CONTACT } from "@/lib/site-config";
import {
  buildEnquiryMessage,
  buildOrderMessage,
  buildWhatsAppUrl,
  WHATSAPP_NUMBER,
} from "@/lib/whatsapp";

describe("WHATSAPP_NUMBER", () => {
  it("strips every non-digit character from CONTACT.phone", () => {
    expect(WHATSAPP_NUMBER).toBe(CONTACT.phone.replace(/\D/g, ""));
    expect(WHATSAPP_NUMBER).toMatch(/^\d+$/);
  });
});

describe("buildWhatsAppUrl", () => {
  it("returns a bare wa.me link with no message", () => {
    expect(buildWhatsAppUrl()).toBe(`https://wa.me/${WHATSAPP_NUMBER}`);
  });

  it("URL-encodes the message text", () => {
    const url = buildWhatsAppUrl("Hi there & welcome!");
    expect(url).toBe(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi there & welcome!")}`,
    );
    expect(url).toContain("Hi%20there%20%26%20welcome!");
  });
});

describe("buildOrderMessage", () => {
  const lineItems = [
    { name: "Mustard Oil", packSize: "1 L", price: 350, quantity: 2 },
    { name: "Groundnut Oil", packSize: "500 ml", price: 180, quantity: 1 },
  ];
  const details = {
    name: "Test Customer",
    phone: "9876543210",
    email: "test@example.com",
    address: "12 MG Road, Nashik",
  };

  it("lists every item with its computed line total", () => {
    const message = buildOrderMessage(lineItems, details);
    expect(message).toContain("1. Mustard Oil (1 L) x2 — ₹700");
    expect(message).toContain("2. Groundnut Oil (500 ml) x1 — ₹180");
  });

  it("includes the correct grand total", () => {
    const message = buildOrderMessage(lineItems, details);
    expect(message).toContain("Total: ₹880");
  });

  it("includes customer details", () => {
    const message = buildOrderMessage(lineItems, details);
    expect(message).toContain("Name: Test Customer");
    expect(message).toContain("Phone: 9876543210");
    expect(message).toContain("Email: test@example.com");
    expect(message).toContain("Shipping Address: 12 MG Road, Nashik");
  });

  it("omits the Email line when email is blank", () => {
    const message = buildOrderMessage(lineItems, { ...details, email: "" });
    expect(message).not.toContain("Email:");
  });

  it("falls back to a self-pickup note when address is blank", () => {
    const message = buildOrderMessage(lineItems, { ...details, address: "  " });
    expect(message).toContain("Shipping Address: Self-pickup / to be shared");
  });

  it("starts with the expected greeting", () => {
    const message = buildOrderMessage(lineItems, details);
    expect(message.startsWith("Hi Sujalam Agro Foods, I would like to place the following order:")).toBe(true);
  });
});

describe("buildEnquiryMessage", () => {
  const details = {
    name: "Test Customer",
    phone: "9876543210",
    email: "",
    message: "I'm interested in Mustard Oil.",
  };

  it("includes the enquiry message and customer details", () => {
    const message = buildEnquiryMessage(details);
    expect(message).toContain("I'm interested in Mustard Oil.");
    expect(message).toContain("Name: Test Customer");
    expect(message).toContain("Phone: 9876543210");
  });

  it("omits the Email line when email is blank", () => {
    const message = buildEnquiryMessage(details);
    expect(message).not.toContain("Email:");
  });

  it("includes the Email line when provided", () => {
    const message = buildEnquiryMessage({ ...details, email: "test@example.com" });
    expect(message).toContain("Email: test@example.com");
  });

  it("starts with the expected greeting", () => {
    const message = buildEnquiryMessage(details);
    expect(message.startsWith("Hi Sujalam Agro Foods, I have an enquiry:")).toBe(true);
  });
});
