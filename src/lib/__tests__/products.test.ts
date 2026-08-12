import { describe, expect, it } from "vitest";
import { formatPrice, getProductBySlug, PRODUCTS } from "@/lib/products";

describe("formatPrice", () => {
  it("formats whole rupee amounts with the ₹ symbol and no decimals", () => {
    expect(formatPrice(180)).toBe("₹180");
  });

  it("adds thousands separators", () => {
    expect(formatPrice(1700)).toBe("₹1,700");
  });

  it("formats zero", () => {
    expect(formatPrice(0)).toBe("₹0");
  });
});

describe("getProductBySlug", () => {
  it("returns the matching product", () => {
    const product = getProductBySlug("mustard-oil");
    expect(product).toBeDefined();
    expect(product?.name).toBe("Mustard Oil");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });

  it("every product in the catalog is resolvable by its own slug", () => {
    for (const product of PRODUCTS) {
      expect(getProductBySlug(product.slug)).toBe(product);
    }
  });
});
