"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappNumber = CONTACT.phone.replace(/[^\d]/g, "");

export function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: initialMessage,
  });
  const [sent, setSent] = useState(false);

  const emailValid =
    form.email.trim() === "" || EMAIL_PATTERN.test(form.email.trim());

  const canSend =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.message.trim() !== "" &&
    emailValid;

  function handleSend() {
    const lines = [
      "Hi Sujalam Agro Foods, I have an enquiry:",
      "",
      form.message.trim(),
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email.trim() ? `Email: ${form.email}` : null,
    ].filter((line): line is string => line !== null);

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="mt-10 rounded-2xl border border-mustard/20 bg-white p-6 text-left sm:p-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
        Send Us an Enquiry
      </h2>
      <p className="mt-2 text-sm text-ink/60">
        Fill in your details and we&apos;ll open WhatsApp with your message
        ready to send. You&apos;ll need to press send yourself — our team
        will take it forward from there.
      </p>

      <div className="mt-5 space-y-3">
        <div>
          <label className="text-xs font-semibold text-ink/60">Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your full name"
            className="mt-1 w-full rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/60">
            Phone Number *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: e.target.value }))
            }
            placeholder="+91 00000 00000"
            className="mt-1 w-full rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/60">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((f) => ({ ...f, email: e.target.value }))
            }
            placeholder="you@example.com"
            className={`mt-1 w-full rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50 ${
              emailValid ? "border-mustard/25" : "border-terracotta"
            }`}
          />
          {!emailValid && (
            <p className="mt-1 text-xs text-terracotta-dark">
              Enter a valid email address, or leave it blank.
            </p>
          )}
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/60">
            Message *
          </label>
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            placeholder="Tell us what you'd like to know"
            rows={4}
            className="mt-1 w-full resize-none rounded-xl border border-mustard/25 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSend}
        disabled={!canSend}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.37c.01-4.55 3.7-8.24 8.28-8.24Zm-4.52 4.13c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.72 4.19 3.71 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
        </svg>
        Send Enquiry via WhatsApp
      </button>
      {sent && (
        <p className="mt-3 text-center text-xs text-ink/50">
          WhatsApp opened in a new tab — press send there to reach us.
        </p>
      )}
    </div>
  );
}
