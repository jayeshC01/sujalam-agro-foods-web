import { act, render, renderHook, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CartPage from "@/app/cart/page";
import { CartProvider, useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

function seedCart(
  items: { slug: string; packSize: string; price: number; quantity: number }[],
) {
  const { result, unmount } = renderHook(() => useCart(), { wrapper });
  act(() => {
    items.forEach((item) =>
      result.current.addItem(
        { slug: item.slug, packSize: item.packSize, price: item.price },
        item.quantity,
      ),
    );
  });
  unmount();
}

function renderCartPage() {
  return render(
    <CartProvider>
      <CartPage />
    </CartProvider>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
  const { result, unmount } = renderHook(() => useCart(), { wrapper });
  act(() => {
    result.current.clearCart();
  });
  unmount();
});

describe("CartPage — empty state", () => {
  it("shows an empty-cart message and a link back to the catalog", () => {
    renderCartPage();
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Browse the Catalog" })).toHaveAttribute(
      "href",
      "/catalog",
    );
  });
});

describe("CartPage — with items", () => {
  beforeEach(() => {
    seedCart([
      { slug: "mustard-oil", packSize: "1 L", price: 350, quantity: 2 },
    ]);
  });

  it("lists the item with its pack size, unit price, and line total", () => {
    renderCartPage();
    expect(screen.getByText("Mustard Oil")).toBeInTheDocument();
    expect(screen.getByText("1 L · ₹350 each")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getAllByText("₹700").length).toBeGreaterThan(0);
  });

  it("increments quantity via the stepper", async () => {
    const user = userEvent.setup();
    renderCartPage();
    await user.click(screen.getByLabelText("Increase quantity"));
    const itemRow = screen.getByText("Mustard Oil").closest("li")!;
    expect(within(itemRow).getByText("3")).toBeInTheDocument();
    expect(screen.getAllByText("₹1,050").length).toBeGreaterThan(0);
  });

  it("removes the item via the remove button", async () => {
    const user = userEvent.setup();
    renderCartPage();
    await user.click(screen.getByLabelText("Remove Mustard Oil"));
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("clears the cart via Clear cart", async () => {
    const user = userEvent.setup();
    renderCartPage();
    await user.click(screen.getByText("Clear cart"));
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("keeps the checkout button disabled until name and phone are filled", async () => {
    const user = userEvent.setup();
    renderCartPage();
    const button = screen.getByRole("button", { name: /place order/i });
    expect(button).toBeDisabled();

    await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
    expect(button).toBeDisabled();

    await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
    expect(button).toBeEnabled();
  });

  it("disables checkout for an invalid email", async () => {
    const user = userEvent.setup();
    renderCartPage();
    await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
    await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
    await user.type(screen.getByPlaceholderText("you@example.com"), "not-an-email");

    expect(screen.getByRole("button", { name: /place order/i })).toBeDisabled();
    expect(
      screen.getByText("Enter a valid email address, or leave it blank."),
    ).toBeInTheDocument();
  });

  describe("placing an order", () => {
    let openSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    });

    afterEach(() => {
      openSpy.mockRestore();
    });

    it("opens WhatsApp with the order details and clears the cart", async () => {
      const user = userEvent.setup();
      renderCartPage();
      await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
      await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
      await user.click(screen.getByRole("button", { name: /place order/i }));

      expect(openSpy).toHaveBeenCalledOnce();
      const [url] = openSpy.mock.calls[0];
      expect(url).toContain(`https://wa.me/${WHATSAPP_NUMBER}?text=`);
      const decoded = decodeURIComponent(String(url));
      expect(decoded).toContain("1. Mustard Oil (1 L) x2 — ₹700");
      expect(decoded).toContain("Total: ₹700");
      expect(decoded).toContain("Name: Test Customer");
      expect(decoded).toContain("Phone: 9876543210");

      expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
    });
  });
});
