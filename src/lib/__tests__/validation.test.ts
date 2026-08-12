import { describe, expect, it } from "vitest";
import { isValidEmail } from "@/lib/validation";

describe("isValidEmail", () => {
  it.each([
    "person@example.com",
    "first.last@sub.example.co.in",
    "person+tag@example.com",
  ])("accepts %s", (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    "not-an-email",
    "missing-domain@",
    "@missing-local.com",
    "spaces in@example.com",
    "double@@example.com",
  ])("rejects %s", (email) => {
    expect(isValidEmail(email)).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  it("trims surrounding whitespace before validating", () => {
    expect(isValidEmail("  person@example.com  ")).toBe(true);
  });
});
