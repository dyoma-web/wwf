"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { asset } from "@/lib/asset";
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
    { id: "proposal-builder", label: t(locale, "nav_builder") },
  ];

  const hrefFor = (id: string) => `/${locale}${id ? `/${id}` : ""}`;
  const isActive = (id: string) => {
    if (id === "") return pathNoLocale === "/" || pathNoLocale === "";
    return pathNoLocale === `/${id}` || pathNoLocale.startsWith(`/${id}/`);
  };

  return (
    <header className="site-hd">
      <div className="wrap site-hd-inner">
        <Link className="brand" href={hrefFor("")}>
          <div className="brand-mark">
            <Image
              src={asset("/images/wwf-logo-full.png")}
              alt="WWF"
              width={60}
              height={60}
              style={{ objectFit: "contain", width: "auto", height: "60px" }}
              priority
            />
          </div>
          <div>
            <div className="brand-name">{t(locale, "brand_name")}</div>
            <div className="brand-sub">{t(locale, "brand_sub")}</div>
          </div>
        </Link>

        <nav className="nav-main">
          {items.map((it) => (
            <Link
              key={it.id || "home"}
              href={hrefFor(it.id)}
              className={isActive(it.id) ? "active" : ""}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="hd-end">
          <LocaleSwitcher current={locale} pathNoLocale={pathNoLocale} />
          <Link href={`${hrefFor("")}#contact`} className="btn orange sm">
            {t(locale, "nav_contact")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          style={{
            borderTop: "1px solid var(--line)",
            background: "#fff",
          }}
        >
          <div className="wrap" style={{ display: "flex", flexDirection: "column", padding: "12px 24px" }}>
            {items.map((it) => (
              <Link
                key={it.id || "home"}
                href={hrefFor(it.id)}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 0",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: isActive(it.id) ? "var(--orange)" : "var(--ink-2)",
                }}
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
    <div className="lang" role="tablist" aria-label="Language">
      {locales.map((l) => {
        const href = `/${l}${pathNoLocale === "/" ? "" : pathNoLocale}`;
        return (
          <Link
            key={l}
            href={href}
            className={l === current ? "on" : ""}
            role="tab"
            aria-selected={l === current}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
