import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/dict";
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "./Icons";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  return (
    <footer className="mt-20 bg-[color:var(--color-paper)] border-t border-[color:var(--color-line)]">
      <div className="wrap py-12">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 items-start">
          <Link href={`/${locale}`} className="flex items-center gap-3 no-underline text-[color:var(--color-ink)]">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[13.5px]">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex flex-col gap-2">
                {[0, 1, 2].map((row) => (
                  <a
                    key={row}
                    href="#"
                    className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-orange)] no-underline"
                  >
                    Lorem ipsum dolor
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[color:var(--color-ink-2)]">
            <a href="#" aria-label="Facebook" className="hover:text-[color:var(--color-orange)]">
              <Facebook width={18} height={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[color:var(--color-orange)]">
              <Twitter width={18} height={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[color:var(--color-orange)]">
              <Instagram width={18} height={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[color:var(--color-orange)]">
              <YouTube width={18} height={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[color:var(--color-orange)]">
              <LinkedIn width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--color-line)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[12px] text-[color:var(--color-muted)]">
          <div>{t(locale, "footer_rights")}</div>
          <div>{t(locale, "footer_tech")}</div>
        </div>
      </div>
    </footer>
  );
}
