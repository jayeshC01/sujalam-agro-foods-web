"use client";

import { useState } from "react";
import { TextField, TextAreaField } from "@/components/form-field";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { isValidEmail } from "@/lib/validation";
import { buildEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: initialMessage,
  });
  const [sent, setSent] = useState(false);

  const emailValid = form.email.trim() === "" || isValidEmail(form.email);

  const canSend =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.message.trim() !== "" &&
    emailValid;

  function handleSend() {
    const message = buildEnquiryMessage(form);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
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
        <TextField
          label="Name"
          required
          value={form.name}
          onChange={(value) => setForm((f) => ({ ...f, name: value }))}
          placeholder="Your full name"
        />
        <TextField
          label="Phone Number"
          required
          type="tel"
          value={form.phone}
          onChange={(value) => setForm((f) => ({ ...f, phone: value }))}
          placeholder="+91 00000 00000"
        />
        <TextField
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((f) => ({ ...f, email: value }))}
          placeholder="you@example.com"
          error={
            emailValid
              ? undefined
              : "Enter a valid email address, or leave it blank."
          }
        />
        <TextAreaField
          label="Message"
          required
          value={form.message}
          onChange={(value) => setForm((f) => ({ ...f, message: value }))}
          placeholder="Tell us what you'd like to know"
          rows={4}
        />
      </div>

      <button
        type="button"
        onClick={handleSend}
        disabled={!canSend}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <WhatsAppIcon />
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
