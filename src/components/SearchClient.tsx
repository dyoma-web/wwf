"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Search } from "./Icons";

type Props = {
  locale: Locale;
};

const SEARCH_DOMAIN = "panda.org";

export function SearchClient({ locale }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const googleQuery = query ? `site:${SEARCH_DOMAIN} ${query}` : `site:${SEARCH_DOMAIN}`;
  const googleHref = `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`;

  return (
    <section className="search-page">
      <div className="search-band">
        <div className="wrap search-band-inner">
          <form className="search-form" action={`/${locale}/search/`} method="get">
            <Search width={20} height={20} />
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder={t(locale, "search_placeholder")}
              aria-label={t(locale, "nav_search")}
              autoFocus
            />
            <button type="submit">{t(locale, "nav_search")}</button>
          </form>
        </div>
      </div>

      <div className="wrap search-results">
        <div className="search-results-copy">
          <p className="eyebrow">{t(locale, "nav_search")}</p>
          <h1 className="h2">{t(locale, "search_title")}</h1>
          <p>{query ? t(locale, "search_results_hint") : t(locale, "search_empty")}</p>
        </div>

        {query ? (
          <Link href={googleHref} className="btn orange" target="_blank" rel="noreferrer">
            {t(locale, "search_open_google")}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
