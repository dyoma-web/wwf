"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow } from "./Icons";

const CONTACT_RECIPIENTS = ["finance@wwfint.org", "food.practice@wwfint.org"];

export function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        const subject = encodeURIComponent(t(locale, "contact_mail_subject"));
        const body = encodeURIComponent(
          [
            `${t(locale, "contact_name")}: ${name}`,
            `${t(locale, "contact_email")}: ${email}`,
            "",
            `${t(locale, "contact_message")}:`,
            message,
          ].join("\n"),
        );

        setSent(true);
        window.location.href = `mailto:${CONTACT_RECIPIENTS.join(",")}?subject=${subject}&body=${body}`;
        setTimeout(() => setSent(false), 2500);
      }}
    >
      <div>
        <label>{t(locale, "contact_name")}</label>
        <input required name="name" placeholder={t(locale, "contact_name_ph")} />
      </div>
      <div>
        <label>{t(locale, "contact_email")}</label>
        <input required name="email" type="email" placeholder={t(locale, "contact_email_ph")} />
      </div>
      <div>
        <label>{t(locale, "contact_message")}</label>
        <textarea required name="message" rows={4} placeholder={t(locale, "contact_message_ph")} />
      </div>
      <button type="submit" className="btn orange submit">
        {sent ? "✓ " : ""}
        {t(locale, "contact_send")} <Arrow width={14} height={14} />
      </button>
    </form>
  );
}
