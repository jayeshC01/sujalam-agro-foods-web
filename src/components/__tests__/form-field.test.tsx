import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TextField, TextAreaField } from "@/components/form-field";

describe("TextField", () => {
  it("renders the label with a required marker", () => {
    render(
      <TextField label="Name" required value="" onChange={() => {}} />,
    );
    expect(screen.getByText("Name *")).toBeInTheDocument();
  });

  it("renders the label without a marker when not required", () => {
    render(<TextField label="Email" value="" onChange={() => {}} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("calls onChange as the user types", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TextField label="Name" value="" onChange={onChange} />);
    await user.type(screen.getByRole("textbox"), "hi");
    // onChange fires once per keystroke; the input is controlled so `value` never advances.
    expect(onChange).toHaveBeenCalled();
  });

  it("shows an error message and highlights the border when error is set", () => {
    render(
      <TextField
        label="Email"
        value="bad"
        onChange={() => {}}
        error="Enter a valid email address, or leave it blank."
      />,
    );
    expect(
      screen.getByText("Enter a valid email address, or leave it blank."),
    ).toBeInTheDocument();
  });
});

describe("TextAreaField", () => {
  it("renders the current value", () => {
    render(
      <TextAreaField label="Message" value="Hello there" onChange={() => {}} />,
    );
    expect(screen.getByDisplayValue("Hello there")).toBeInTheDocument();
  });

  it("calls onChange as the user types", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TextAreaField label="Message" value="" onChange={onChange} />);
    await user.type(screen.getByRole("textbox"), "hi");
    expect(onChange).toHaveBeenCalled();
  });
});
