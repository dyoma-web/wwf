import Link from "next/link";
import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow, Book, Coin, Leaf, Pin, Phone, Mail, ChevronLeft, ChevronRight } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div>
      {/* HERO */}
      <section className="wrap py-6">
        <div className="relative rounded-[8px] overflow-hidden bg-[color:var(--color-ink)]">
          <div className="phx soil relative aspect-[16/7] min-h-[320px]">
            <span className="cap">{t(locale, "hero_cap")}</span>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[540px] ml-6 md:ml-14 bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-[6px] text-white">
              <div className="text-[13px] font-semibold text-[color:var(--color-orange)] mb-1.5">
                {t(locale, "hero_eyebrow")}
              </div>
              <h1 className="h-display text-[clamp(28px,4vw,48px)] text-white">
                {t(locale, "hero_title")}
              </h1>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/90">
                {t(locale, "hero_sub")}
              </p>
              <div className="flex flex-wrap gap-2.5 mt-5">
                <Link
                  href={`/${locale}/learning`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[color:var(--color-orange)] text-white font-semibold text-[13.5px] border border-[color:var(--color-orange)] hover:bg-[color:var(--color-orange-ink)] hover:border-[color:var(--color-orange-ink)]"
                >
                  {t(locale, "hero_cta1")} <Arrow width={14} height={14} />
                </Link>
                <Link
                  href={`/${locale}/navigator`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-transparent text-white font-semibold text-[13.5px] border border-white hover:bg-white hover:text-[color:var(--color-ink)]"
                >
                  {t(locale, "hero_cta2")}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-[3px] bg-white rounded-full" />
              <span className="w-3 h-[3px] bg-white/40 rounded-full" />
              <span className="w-3 h-[3px] bg-white/40 rounded-full" />
            </div>
            <div className="flex items-center gap-1 ml-3">
              <button aria-label="Prev" className="w-7 h-7 grid place-items-center rounded-full bg-white/20 text-white hover:bg-white/30">
                <ChevronLeft width={14} height={14} />
              </button>
              <button aria-label="Next" className="w-7 h-7 grid place-items-center rounded-full bg-white/20 text-white hover:bg-white/30">
                <ChevronRight width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BY OBJECTIVE */}
      <section className="wrap py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="phx canopy relative aspect-[5/4] rounded-[6px]">
            <span className="cap">HANDS HOLDING A SEEDLING EARTH [ placeholder ]</span>
          </div>
          <div>
            <div className="eyebrow">{t(locale, "about_eyebrow")}</div>
            <h2 className="h-display text-[clamp(26px,3vw,40px)] mt-2">
              {t(locale, "about_title")}
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-2)] max-w-[55ch]">
              {t(locale, "about_body")}
            </p>
            <Link
              href={`/${locale}/navigator`}
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[color:var(--color-orange)] text-white font-semibold text-[13.5px] border border-[color:var(--color-orange)] hover:bg-[color:var(--color-orange-ink)] hover:border-[color:var(--color-orange-ink)]"
            >
              {t(locale, "about_cta")} <Arrow width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 TILES */}
      <section className="wrap pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: `/${locale}/learning`, icon: <Book width={22} height={22} />, label: t(locale, "tile1") },
            { href: `/${locale}/navigator`, icon: <Coin width={22} height={22} />, label: t(locale, "tile2") },
            { href: `/${locale}/toolkit`, icon: <Leaf width={22} height={22} />, label: t(locale, "tile3") },
          ].map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group flex items-center gap-3 p-5 bg-[color:var(--color-ink)] text-white rounded-[6px] hover:bg-black transition-colors"
            >
              <div className="w-10 h-10 grid place-items-center rounded-[4px] bg-white/10 text-[color:var(--color-orange)] group-hover:bg-[color:var(--color-orange)] group-hover:text-white transition-colors">
                {tile.icon}
              </div>
              <div className="font-semibold text-[14px] flex-1">{tile.label}</div>
              <Arrow width={16} height={16} />
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="wrap py-10">
        <div className="mb-8">
          <div className="eyebrow">{t(locale, "stats_eyebrow")}</div>
          <h2 className="h-display text-[clamp(26px,3vw,40px)] mt-2">
            {t(locale, "stats_t")}
          </h2>
          <p className="lede mt-2">{t(locale, "stats_sub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat n={t(locale, "stat1_n")} color="orange" text={t(locale, "stat1_t")} />
          <Stat n={t(locale, "stat2_n")} color="green" text={t(locale, "stat2_t")} />
          <Stat n={t(locale, "stat3_n")} color="teal" text={t(locale, "stat3_t")} />
          <Stat n={t(locale, "stat4_n")} color="ink" text={t(locale, "stat4_t")} />
        </div>
      </section>

      {/* RESOURCE LIBRARY */}
      <section className="wrap py-10">
        <div className="relative overflow-hidden rounded-[8px] bg-[color:var(--color-ink)] text-white">
          <div className="phx canopy absolute inset-0 opacity-40" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="eyebrow">{t(locale, "lib_eyebrow")}</div>
                <h2 className="h-display text-[clamp(32px,4vw,54px)] mt-2 leading-[1.05] text-white">
                  {t(locale, "lib_title")}
                </h2>
              </div>
              <p className="text-[#d8d5ca] text-[14px] max-w-[36ch]">
                {t(locale, "lib_sub")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                t(locale, "lib_pill1"),
                t(locale, "lib_pill2"),
                t(locale, "lib_pill3"),
              ].map((label) => (
                <Link
                  key={label}
                  href={`/${locale}/toolkit`}
                  className="flex items-center gap-3 px-5 py-4 rounded-[6px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-orange)]" />
                  <span className="flex-1 font-semibold text-[13.5px]">{label}</span>
                  <Arrow width={14} height={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE / GUIDES */}
      <section className="wrap py-10">
        <div className="mb-8">
          <div className="eyebrow">{t(locale, "people_eyebrow")}</div>
          <h2 className="h-display text-[clamp(26px,3vw,40px)] mt-2">
            {t(locale, "people_t")}
          </h2>
          <p className="lede mt-2">{t(locale, "people_s")}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { n: "Jane", r: "Generalist — LFA concepts", hue: "var(--color-forest-2)" },
            { n: "Jessica", r: "Specialist — Financing Green", hue: "var(--color-teal)" },
            { n: "Jaciele", r: "Narrator — the Cerrado", hue: "var(--color-orange)" },
            { n: "Ylva", r: "Specialist — Food & Agriculture", hue: "var(--color-forest-2)" },
            { n: "Divyaa", r: "Specialist — Greening Finance", hue: "var(--color-teal)" },
            { n: "Santatra", r: "Narrator — Madagascar", hue: "var(--color-orange)" },
          ].map((p) => (
            <div key={p.n} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-20 h-20 rounded-full grid place-items-center text-white font-bold text-lg"
                style={{ background: p.hue }}
                aria-hidden="true"
              >
                {p.n[0]}
              </div>
              <div>
                <div className="font-semibold text-[13.5px]">{p.n}</div>
                <div className="text-[11.5px] text-[color:var(--color-muted)]">{p.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="wrap py-10 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[color:var(--color-paper)] rounded-[8px] p-8 md:p-12">
          <div>
            <div className="eyebrow">{t(locale, "contact_eyebrow")}</div>
            <h3 className="h-display text-[clamp(24px,2.6vw,34px)] mt-2">
              {t(locale, "contact_title")}
            </h3>
            <p className="mt-3 text-[color:var(--color-ink-2)] max-w-[50ch]">
              {t(locale, "contact_body")}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[13.5px] text-[color:var(--color-ink-2)]">
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-orange)]"><Pin width={16} height={16} /></span>
                {t(locale, "contact_loc")}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-orange)]"><Phone width={16} height={16} /></span>
                {t(locale, "contact_phone")}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-orange)]"><Mail width={16} height={16} /></span>
                {t(locale, "contact_mail")}
              </div>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}

function Stat({
  n,
  text,
  color,
}: {
  n: string;
  text: string;
  color: "orange" | "green" | "teal" | "ink";
}) {
  const colorClass = {
    orange: "text-[color:var(--color-orange)]",
    green: "text-[color:var(--color-green)]",
    teal: "text-[color:var(--color-teal)]",
    ink: "text-[color:var(--color-ink)]",
  }[color];
  return (
    <div className="border-t border-[color:var(--color-line)] pt-4">
      <div className={`text-[clamp(38px,4vw,56px)] font-bold leading-none ${colorClass}`}>
        {n}
      </div>
      <div className="mt-3 text-[13.5px] text-[color:var(--color-ink-2)] leading-relaxed">
        {text}
      </div>
    </div>
  );
}
