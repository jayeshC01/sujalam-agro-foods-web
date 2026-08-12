import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { CartProvider, useCart } from "@/lib/cart-context";

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

beforeEach(() => {
  window.localStorage.clear();
  const { result, unmount } = renderHook(() => useCart(), { wrapper });
  act(() => {
    result.current.clearCart();
  });
  unmount();
});

describe("useCart", () => {
  it("throws when used outside a CartProvider", () => {
    const { result } = renderHook(() => {
      try {
        return useCart();
      } catch (error) {
        return error;
      }
    });
    expect(result.current).toBeInstanceOf(Error);
  });

  it("starts empty", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
    expect(result.current.itemCount).toBe(0);
  });

  it("adds a new item with the given quantity", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem(
        { slug: "mustard-oil", packSize: "1 L", price: 350 },
        2,
      );
    });
    expect(result.current.items).toEqual([
      { slug: "mustard-oil", packSize: "1 L", price: 350, quantity: 2 },
    ]);
    expect(result.current.itemCount).toBe(2);
  });

  it("defaults quantity to 1 when not specified", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });
    expect(result.current.items[0].quantity).toBe(1);
  });

  it("merges quantity when the same slug + packSize is added again", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem(
        { slug: "mustard-oil", packSize: "1 L", price: 350 },
        1,
      );
    });
    act(() => {
      result.current.addItem(
        { slug: "mustard-oil", packSize: "1 L", price: 350 },
        3,
      );
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(4);
  });

  it("keeps different pack sizes of the same product as separate line items", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "500 ml", price: 180 });
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });
    expect(result.current.items).toHaveLength(2);
  });

  it("removeItem removes only the matching slug + packSize", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "500 ml", price: 180 });
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });
    act(() => {
      result.current.removeItem("mustard-oil", "500 ml");
    });
    expect(result.current.items).toEqual([
      { slug: "mustard-oil", packSize: "1 L", price: 350, quantity: 1 },
    ]);
  });

  it("updateQuantity changes the quantity of the matching item", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });
    act(() => {
      result.current.updateQuantity("mustard-oil", "1 L", 5);
    });
    expect(result.current.items[0].quantity).toBe(5);
  });

  it("updateQuantity removes the item once quantity drops below 1", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });
    act(() => {
      result.current.updateQuantity("mustard-oil", "1 L", 0);
    });
    expect(result.current.items).toEqual([]);
  });

  it("clearCart empties the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
      result.current.addItem({ slug: "groundnut-oil", packSize: "500 ml", price: 180 });
    });
    act(() => {
      result.current.clearCart();
    });
    expect(result.current.items).toEqual([]);
    expect(result.current.itemCount).toBe(0);
  });

  it("itemCount sums quantities across all line items", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 }, 2);
      result.current.addItem(
        { slug: "groundnut-oil", packSize: "500 ml", price: 180 },
        3,
      );
    });
    expect(result.current.itemCount).toBe(5);
  });

  it("persists items to localStorage", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 }, 2);
    });
    const stored = JSON.parse(window.localStorage.getItem("sujalam-cart") ?? "[]");
    expect(stored).toEqual([
      { slug: "mustard-oil", packSize: "1 L", price: 350, quantity: 2 },
    ]);
  });

  it("syncs state across independent provider instances", () => {
    const a = renderHook(() => useCart(), { wrapper });
    const b = renderHook(() => useCart(), { wrapper });

    act(() => {
      a.result.current.addItem({ slug: "mustard-oil", packSize: "1 L", price: 350 });
    });

    expect(b.result.current.items).toEqual([
      { slug: "mustard-oil", packSize: "1 L", price: 350, quantity: 1 },
    ]);
  });
});
