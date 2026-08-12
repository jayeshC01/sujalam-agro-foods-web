import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/contact-form";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

describe("ContactForm", () => {
  let openSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    openSpy.mockRestore();
  });

  it("pre-fills the message field from initialMessage", () => {
    render(<ContactForm initialMessage="I'm interested in Mustard Oil." />);
    expect(
      screen.getByDisplayValue("I'm interested in Mustard Oil."),
    ).toBeInTheDocument();
  });

  it("disables the send button until name, phone, and message are filled", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const button = screen.getByRole("button", { name: /send enquiry/i });
    expect(button).toBeDisabled();

    await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
    await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
    expect(button).toBeDisabled();

    await user.type(
      screen.getByPlaceholderText("Tell us what you'd like to know"),
      "Question about pricing",
    );
    expect(button).toBeEnabled();
  });

  it("disables the button and shows an error for an invalid email", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
    await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
    await user.type(
      screen.getByPlaceholderText("Tell us what you'd like to know"),
      "Question",
    );
    await user.type(screen.getByPlaceholderText("you@example.com"), "not-an-email");

    expect(
      screen.getByText("Enter a valid email address, or leave it blank."),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send enquiry/i })).toBeDisabled();
  });

  it("opens WhatsApp with the composed message when sent", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByPlaceholderText("Your full name"), "Test Customer");
    await user.type(screen.getByPlaceholderText("+91 00000 00000"), "9876543210");
    await user.type(
      screen.getByPlaceholderText("Tell us what you'd like to know"),
      "Question about pricing",
    );
    await user.click(screen.getByRole("button", { name: /send enquiry/i }));

    expect(openSpy).toHaveBeenCalledOnce();
    const [url, target, features] = openSpy.mock.calls[0];
    expect(url).toContain(`https://wa.me/${WHATSAPP_NUMBER}?text=`);
    expect(decodeURIComponent(String(url))).toContain("Question about pricing");
    expect(decodeURIComponent(String(url))).toContain("Name: Test Customer");
    expect(target).toBe("_blank");
    expect(features).toBe("noopener,noreferrer");
  });
});
