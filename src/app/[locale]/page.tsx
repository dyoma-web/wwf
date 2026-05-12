import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Arrow, Book, Coin, Leaf, Pin, Phone, Mail, ChevronLeft, ChevronRight } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { asset } from "@/lib/asset";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="page">
      {/* HERO estático con farmer.jpg */}
      <section className="wrap hero">
        <div className="hero-frame">
          <Image
            src={asset("/images/farmer.jpg")}
            alt="Farmer in the field"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 1200px"
            style={{ objectFit: "cover" }}
          />
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

      {/* ABOUT THIS SITE — explica qué es el sitio, dónde se ubica dentro
          de WWF, quién lo opera y a quién sirve. Copy en borrador, pendiente
          de revisión por el equipo de marca. */}
      <section className="wrap sec-sm" style={{ paddingBottom: 0 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">{t(locale, "about_site_eyebrow")}</div>
          <h2 className="h-display h2" style={{ marginTop: 6, marginBottom: 14 }}>
            {t(locale, "about_site_title")}
          </h2>
          <p className="lede" style={{ marginInline: "auto" }}>
            {t(locale, "about_site_body")}
          </p>
        </div>
      </section>

      {/* BY OBJECTIVE / two-col */}
      <section className="wrap sec-sm">
        <div className="two-col">
          <div className="phx canopy" style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src={asset("/images/hands-earth.jpg")}
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

