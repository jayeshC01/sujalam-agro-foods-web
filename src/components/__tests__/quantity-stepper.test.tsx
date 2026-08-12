import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuantityStepper } from "@/components/quantity-stepper";

describe("QuantityStepper", () => {
  it("displays the current quantity", () => {
    render(
      <QuantityStepper quantity={3} onDecrease={() => {}} onIncrease={() => {}} />,
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("calls onIncrease when the + button is clicked", async () => {
    const user = userEvent.setup();
    const onIncrease = vi.fn();
    render(
      <QuantityStepper quantity={1} onDecrease={() => {}} onIncrease={onIncrease} />,
    );
    await user.click(screen.getByLabelText("Increase quantity"));
    expect(onIncrease).toHaveBeenCalledOnce();
  });

  it("calls onDecrease when the − button is clicked", async () => {
    const user = userEvent.setup();
    const onDecrease = vi.fn();
    render(
      <QuantityStepper quantity={1} onDecrease={onDecrease} onIncrease={() => {}} />,
    );
    await user.click(screen.getByLabelText("Decrease quantity"));
    expect(onDecrease).toHaveBeenCalledOnce();
  });
});
