"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow } from "./Icons";

export function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2500);
      }}
      className="flex flex-col gap-3"
    >
      <label className="flex flex-col gap-1 text-[12px] text-[color:var(--color-muted)]">
        {t(locale, "contact_name")}
        <input
          required
          placeholder={t(locale, "contact_name_ph")}
          className="px-3 py-2.5 text-[14px] text-[color:var(--color-ink)] border border-[color:var(--color-line)] rounded-[4px] focus:outline-none focus:border-[color:var(--color-orange)]"
        />
      </label>
      <label className="flex flex-col gap-1 text-[12px] text-[color:var(--color-muted)]">
        {t(locale, "contact_email")}
        <input
          required
          type="email"
          placeholder={t(locale, "contact_email_ph")}
          className="px-3 py-2.5 text-[14px] text-[color:var(--color-ink)] border border-[color:var(--color-line)] rounded-[4px] focus:outline-none focus:border-[color:var(--color-orange)]"
        />
      </label>
      <label className="flex flex-col gap-1 text-[12px] text-[color:var(--color-muted)]">
        {t(locale, "contact_message")}
        <textarea
          required
          rows={5}
          placeholder={t(locale, "contact_message_ph")}
          className="px-3 py-2.5 text-[14px] text-[color:var(--color-ink)] border border-[color:var(--color-line)] rounded-[4px] focus:outline-none focus:border-[color:var(--color-orange)] resize-y"
        />
      </label>
      <button
        type="submit"
        className="self-start inline-flex items-center gap-2 px-[1.25rem] py-[0.85rem] rounded-[4px] bg-[color:var(--color-orange)] text-white font-semibold text-[13.5px] border border-[color:var(--color-orange)] hover:bg-[color:var(--color-orange-ink)] hover:border-[color:var(--color-orange-ink)]"
      >
        {sent ? "✓" : t(locale, "contact_send")} <Arrow width={14} height={14} />
      </button>
    </form>
  );
}
