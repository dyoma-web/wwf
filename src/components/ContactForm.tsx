"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow } from "./Icons";

export function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2500);
      }}
    >
      <div>
        <label>{t(locale, "contact_name")}</label>
        <input required placeholder={t(locale, "contact_name_ph")} />
      </div>
      <div>
        <label>{t(locale, "contact_email")}</label>
        <input required type="email" placeholder={t(locale, "contact_email_ph")} />
      </div>
      <div>
        <label>{t(locale, "contact_message")}</label>
        <textarea required rows={4} placeholder={t(locale, "contact_message_ph")} />
      </div>
      <button type="submit" className="btn orange submit">
        {sent ? "✓ " : ""}
        {t(locale, "contact_send")} <Arrow width={14} height={14} />
      </button>
    </form>
  );
}
