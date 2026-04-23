import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

function resolveLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((p) => p.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((code) => (locales as readonly string[]).includes(code));
  return preferred ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) return NextResponse.next();

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
