import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, locales } from "@/data/i18n";

/**
 * Redirects locale-less paths to the locale-prefixed equivalent:
 *   /            ->  /en
 *   /categories  ->  /ru/categories  (based on Accept-Language / cookie)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  // Prefer the saved cookie, then the browser's preferred language.
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const preferred =
    cookieLocale && locales.includes(cookieLocale as never)
      ? cookieLocale
      : request.headers
          .get("accept-language")
          ?.split(",")
          .map((part) => part.split(";")[0].trim().split("-")[0])
          .find((lang) => locales.includes(lang as never));

  const locale = preferred ?? defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static files, API routes and paths that already contain a locale.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
