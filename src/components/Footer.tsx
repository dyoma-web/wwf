import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "./Icons";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <Link className="brand" href={`/${locale}`}>
            <div className="brand-mark">SFC</div>
            <div>
              <div className="brand-name">{t(locale, "brand_name")}</div>
              <div className="brand-sub">{t(locale, "brand_sub")}</div>
            </div>
          </Link>

          <div className="foot-links">
            {[0, 1, 2].map((col) => (
              <div key={col}>
                {[0, 1, 2].map((row) => (
                  <a key={row} href="#">
                    Lorem ipsum dolor
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="foot-social">
            <a href="#" aria-label="Facebook"><Facebook width={16} height={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter width={16} height={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram width={16} height={16} /></a>
            <a href="#" aria-label="YouTube"><YouTube width={16} height={16} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedIn width={16} height={16} /></a>
          </div>
        </div>

        <div className="foot-bot">
          <div>{t(locale, "footer_rights")}</div>
          <div>{t(locale, "footer_tech")}</div>
        </div>
      </div>
    </footer>
  );
}
