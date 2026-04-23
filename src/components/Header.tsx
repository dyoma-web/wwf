"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Menu, Close } from "./Icons";

type Props = { locale: Locale };

function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if ((locales as readonly string[]).includes(segments[0])) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}

export function Header({ locale }: Props) {
  const rawPath = usePathname() ?? "/";
  const pathNoLocale = stripLocale(rawPath);
  const [open, setOpen] = useState(false);

  const items = [
    { id: "", label: t(locale, "nav_home") },
    { id: "learning", label: t(locale, "nav_learn") },
    { id: "navigator", label: t(locale, "nav_finance") },
    { id: "toolkit", label: t(locale, "nav_toolkit") },
  ];

  const hrefFor = (id: string) => `/${locale}${id ? `/${id}` : ""}`;
  const isActive = (id: string) => {
    if (id === "") return pathNoLocale === "/" || pathNoLocale === "";
    return pathNoLocale === `/${id}` || pathNoLocale.startsWith(`/${id}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[color:var(--color-line)]">
      <div className="wrap flex items-center justify-between gap-5 h-[72px]">
        <Link href={hrefFor("")} className="flex items-center gap-3 no-underline text-[color:var(--color-ink)]">
          <div className="w-11 h-11 bg-black text-white grid place-items-center font-extrabold text-sm tracking-[0.05em] rounded-[2px]">
            SFC
          </div>
          <div className="leading-none">
            <div className="font-bold text-[14px] tracking-[0.08em]">
              {t(locale, "brand_name")}
            </div>
            <div className="text-[10.5px] text-[color:var(--color-muted)] mt-[3px] tracking-[0.05em]">
              {t(locale, "brand_sub")}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-[2px]">
          {items.map((it) => (
            <Link
              key={it.id || "home"}
              href={hrefFor(it.id)}
              className={`no-underline px-[0.9rem] py-[0.6rem] text-[13.5px] font-medium rounded-[2px] hover:text-[color:var(--color-orange)] ${
                isActive(it.id)
                  ? "text-[color:var(--color-orange)]"
                  : "text-[color:var(--color-ink-2)]"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]">
          <LocaleSwitcher current={locale} pathNoLocale={pathNoLocale} />
          <Link
            href={`${hrefFor("")}#contact`}
            className="hidden sm:inline-flex items-center gap-2 px-[0.85rem] py-[0.55rem] rounded-[4px] bg-[color:var(--color-orange)] text-white font-semibold text-[12.5px] border border-[color:var(--color-orange)] hover:bg-[color:var(--color-orange-ink)] hover:border-[color:var(--color-orange-ink)]"
          >
            {t(locale, "nav_contact")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 grid place-items-center border border-[color:var(--color-line)] bg-white rounded-[2px]"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[color:var(--color-line)] bg-white">
          <div className="wrap flex flex-col py-3">
            {items.map((it) => (
              <Link
                key={it.id || "home"}
                href={hrefFor(it.id)}
                onClick={() => setOpen(false)}
                className={`py-3 text-[14px] font-medium ${
                  isActive(it.id)
                    ? "text-[color:var(--color-orange)]"
                    : "text-[color:var(--color-ink-2)]"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function LocaleSwitcher({
  current,
  pathNoLocale,
}: {
  current: Locale;
  pathNoLocale: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Language"
      className="flex items-center gap-[1px] border border-[color:var(--color-line)] rounded-[2px] overflow-hidden"
    >
      {locales.map((l) => {
        const href = `/${l}${pathNoLocale === "/" ? "" : pathNoLocale}`;
        const on = l === current;
        return (
          <Link
            key={l}
            href={href}
            className={`px-[10px] py-[5px] text-[11.5px] font-semibold tracking-[0.06em] uppercase ${
              on
                ? "bg-[color:var(--color-ink)] text-white"
                : "bg-white text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            }`}
            aria-selected={on}
            role="tab"
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
