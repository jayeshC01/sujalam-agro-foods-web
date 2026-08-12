import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { CartIndicator } from "@/components/cart-indicator";
import { CartProvider, useCart } from "@/lib/cart-context";

function TestHarness({ seed }: { seed?: { quantity: number } }) {
  const { addItem } = useCart();
  return (
    <>
      <CartIndicator />
      {seed && (
        <button
          onClick={() =>
            addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 }, seed.quantity)
          }
        >
          seed
        </button>
      )}
    </>
  );
}

beforeEach(() => {
  window.localStorage.clear();
});

describe("CartIndicator", () => {
  it("links to the cart page", () => {
    render(
      <CartProvider>
        <CartIndicator />
      </CartProvider>,
    );
    expect(screen.getByLabelText("View cart")).toHaveAttribute("href", "/cart");
  });

  it("shows no badge when the cart is empty", () => {
    render(
      <CartProvider>
        <CartIndicator />
      </CartProvider>,
    );
    expect(screen.queryByText(/^\d+$/)).not.toBeInTheDocument();
  });

  it("shows the item count once items are added", async () => {
    render(
      <CartProvider>
        <TestHarness seed={{ quantity: 3 }} />
      </CartProvider>,
    );
    await act(async () => {
      screen.getByText("seed").click();
    });
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("caps the badge at 9+", async () => {
    render(
      <CartProvider>
        <TestHarness seed={{ quantity: 15 }} />
      </CartProvider>,
    );
    await act(async () => {
      screen.getByText("seed").click();
    });
    expect(screen.getByText("9+")).toBeInTheDocument();
  });
});
