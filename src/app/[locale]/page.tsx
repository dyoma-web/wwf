import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow, Book, Coin, Leaf, Pin, Phone, Mail, ChevronLeft, ChevronRight } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero wrap">
        <div className="hero-frame">
          <div className="phx soil">
            <Image
              src="/images/hero-farmer.jpg"
              alt="Farmer walking at sunrise through a landscape of crops and mountains"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-overlay-card">
            <div className="kicker">{t(locale, "hero_eyebrow")}</div>
            <h1>{t(locale, "hero_title")}</h1>
            <p>{t(locale, "hero_sub")}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href={`/${locale}/learning`} className="btn orange">
                {t(locale, "hero_cta1")} <Arrow width={14} height={14} />
              </Link>
              <Link href={`/${locale}/navigator`} className="btn ghost-light">
                {t(locale, "hero_cta2")}
              </Link>
            </div>
          </div>
          <div className="hero-dots">
            <span className="on" />
            <span />
            <span />
          </div>
          <div className="hero-arrows">
            <button aria-label="Prev">
              <ChevronLeft width={14} height={14} />
            </button>
            <button aria-label="Next">
              <ChevronRight width={14} height={14} />
            </button>
          </div>
        </div>
      </section>

      {/* BY OBJECTIVE / two-col */}
      <section className="wrap sec-sm">
        <div className="two-col">
          <div className="phx canopy" style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/images/hands-earth.jpg"
              alt="Hands holding soil with a young plant and a globe motif"
              fill
              sizes="(max-width: 800px) 100vw, 500px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="eyebrow">{t(locale, "about_eyebrow")}</div>
            <h2 className="h-display">{t(locale, "about_title")}</h2>
            <p>{t(locale, "about_body")}</p>
            <Link href={`/${locale}/navigator`} className="btn orange">
              {t(locale, "about_cta")} <Arrow width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 TILES */}
      <section className="wrap sec-sm" style={{ paddingTop: 0 }}>
        <div className="tiles">
          <Link href={`/${locale}/learning`} className="tile">
            <div className="ic">
              <Book width={26} height={26} />
            </div>
            <div className="t">{t(locale, "tile1")}</div>
          </Link>
          <Link href={`/${locale}/navigator`} className="tile">
            <div className="ic">
              <Coin width={26} height={26} />
            </div>
            <div className="t">{t(locale, "tile2")}</div>
          </Link>
          <Link href={`/${locale}/toolkit`} className="tile">
            <div className="ic">
              <Leaf width={26} height={26} />
            </div>
            <div className="t">{t(locale, "tile3")}</div>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="wrap sec-sm">
        <div className="sec-hd">
          <div>
            <div className="eyebrow">{t(locale, "stats_eyebrow")}</div>
            <h2 className="h-display" style={{ fontSize: "clamp(26px,3vw,40px)" }}>
              {t(locale, "stats_t")}
            </h2>
            <p className="lede">{t(locale, "stats_sub")}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="n">{t(locale, "stat1_n")}</div>
            <div className="t">{t(locale, "stat1_t")}</div>
          </div>
          <div className="stat">
            <div className="n green">{t(locale, "stat2_n")}</div>
            <div className="t">{t(locale, "stat2_t")}</div>
          </div>
          <div className="stat">
            <div className="n teal">{t(locale, "stat3_n")}</div>
            <div className="t">{t(locale, "stat3_t")}</div>
          </div>
          <div className="stat">
            <div className="n ink">{t(locale, "stat4_n")}</div>
            <div className="t">{t(locale, "stat4_t")}</div>
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY block */}
      <section className="wrap sec-sm">
        <div className="lib-block">
          <div className="bg phx canopy">
            <div className="cap">CANOPY / CROP FIELDS — TOP DOWN [ placeholder ]</div>
          </div>
          <div className="left">
            <div>
              <div className="eyebrow" style={{ color: "var(--orange)" }}>
                {t(locale, "lib_eyebrow")}
              </div>
              <h2>
                Resource
                <br />
                library
              </h2>
            </div>
            <p style={{ color: "#d8d5ca", fontSize: 14, maxWidth: "36ch", margin: 0 }}>
              {t(locale, "lib_sub")}
            </p>
          </div>
          <div className="right">
            <Link href={`/${locale}/toolkit`} className="lib-pill">
              <span className="dot" />
              <span className="t">{t(locale, "lib_pill1")}</span>
              <span className="arr">
                <Arrow width={14} height={14} />
              </span>
            </Link>
            <Link href={`/${locale}/toolkit`} className="lib-pill">
              <span className="dot" />
              <span className="t">{t(locale, "lib_pill2")}</span>
              <span className="arr">
                <Arrow width={14} height={14} />
              </span>
            </Link>
            <Link href={`/${locale}/toolkit`} className="lib-pill">
              <span className="dot" />
              <span className="t">{t(locale, "lib_pill3")}</span>
              <span className="arr">
                <Arrow width={14} height={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="wrap sec-sm">
        <div className="sec-hd">
          <div>
            <div className="eyebrow">{t(locale, "people_eyebrow")}</div>
            <h2 className="h-display" style={{ fontSize: "clamp(26px,3vw,40px)" }}>
              {t(locale, "people_t")}
            </h2>
            <p className="lede">{t(locale, "people_s")}</p>
          </div>
        </div>
        <div className="personas">
          {[
            { n: "Jane", r: "Generalist — LFA concepts", hue: "var(--forest-2)" },
            { n: "Jessica", r: "Specialist — Financing Green", hue: "var(--teal)" },
            { n: "Jaciele", r: "Narrator — the Cerrado", hue: "var(--orange)" },
            { n: "Ylva", r: "Specialist — Food & Agriculture", hue: "var(--forest-2)" },
            { n: "Divyaa", r: "Specialist — Greening Finance", hue: "var(--teal)" },
            { n: "Santatra", r: "Narrator — Madagascar", hue: "var(--orange)" },
          ].map((p, i) => (
            <div className="persona" key={p.n}>
              <div className="avatar">
                <AvatarPH seed={i} hue={p.hue} />
              </div>
              <div>
                <div className="n">{p.n}</div>
                <div className="r">{p.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="wrap sec-sm" id="contact">
        <div className="contact-block">
          <div>
            <div className="eyebrow">{t(locale, "contact_eyebrow")}</div>
            <h3>{t(locale, "contact_title")}</h3>
            <p>{t(locale, "contact_body")}</p>
            <div className="info">
              <div className="info-row">
                <span className="ic">
                  <Pin width={16} height={16} />
                </span>
                {t(locale, "contact_loc")}
              </div>
              <div className="info-row">
                <span className="ic">
                  <Phone width={16} height={16} />
                </span>
                {t(locale, "contact_phone")}
              </div>
              <div className="info-row">
                <span className="ic">
                  <Mail width={16} height={16} />
                </span>
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

/* -------- Placeholder SVG para avatares de personas -------- */

function AvatarPH({ seed, hue }: { seed: number; hue: string }) {
  const angle = (seed * 37) % 360;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={`av${seed}`} x1="0" y1="0" x2="1" y2="1" gradientTransform={`rotate(${angle} .5 .5)`}>
          <stop offset="0" stopColor={hue} stopOpacity=".9" />
          <stop offset="1" stopColor="#1d1d1b" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#av${seed})`} />
      <circle cx="60" cy="48" r="18" fill="#f4f2eb" opacity=".85" />
      <path d="M20 120 Q60 70 100 120 Z" fill="#f4f2eb" opacity=".85" />
    </svg>
  );
}
