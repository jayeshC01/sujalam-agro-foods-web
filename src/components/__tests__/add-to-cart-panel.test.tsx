import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { AddToCartPanel } from "@/components/add-to-cart-panel";
import { CartProvider } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

const product: Product = {
  slug: "test-oil",
  name: "Test Oil",
  category: "edible-oil",
  edible: true,
  description: "A test product.",
  packSizes: [
    { size: "500 ml", price: 180 },
    { size: "1 L", price: 350 },
  ],
  shelfLifeMonths: 6,
  extractionMethod: "Cold-Pressed",
  usage: "Testing",
};

function renderPanel() {
  return render(
    <CartProvider>
      <AddToCartPanel product={product} />
    </CartProvider>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
});

describe("AddToCartPanel", () => {
  it("defaults to the first pack size and quantity 1", () => {
    renderPanel();
    expect(screen.getByText("500 ml")).toHaveClass("bg-leaf-dark");
    expect(screen.getByText("Subtotal: ₹180")).toBeInTheDocument();
  });

  it("updates the subtotal when a different pack size is selected", async () => {
    const user = userEvent.setup();
    renderPanel();
    await user.click(screen.getByText("1 L"));
    expect(screen.getByText("Subtotal: ₹350")).toBeInTheDocument();
  });

  it("updates the subtotal when quantity increases", async () => {
    const user = userEvent.setup();
    renderPanel();
    await user.click(screen.getByLabelText("Increase quantity"));
    expect(screen.getByText("Subtotal: ₹360")).toBeInTheDocument();
  });

  it("adds the selected size and quantity to the cart and shows confirmation", async () => {
    const user = userEvent.setup();
    renderPanel();
    await user.click(screen.getByText("1 L"));
    await user.click(screen.getByLabelText("Increase quantity"));
    await user.click(screen.getByText("Add to Cart"));

    expect(screen.getByText("Added ✓")).toBeInTheDocument();
    const stored = JSON.parse(window.localStorage.getItem("sujalam-cart") ?? "[]");
    expect(stored).toEqual([
      { slug: "test-oil", packSize: "1 L", price: 350, quantity: 2 },
    ]);
  });
});
