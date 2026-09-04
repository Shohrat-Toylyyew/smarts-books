"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, type Locale } from "@/data/i18n";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  tr: "TR",
  tk: "TK",
};

interface LanguageSwitcherProps {
  lang: Locale;
  variant: "desktop" | "mobile";
}

/** Returns the current path with the locale segment replaced. */
function localizedPath(pathname: string, lang: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  return `/${segments.join("/")}`;
}

function setLocaleCookie(lang: Locale) {
  document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000;samesite=lax`;
}

/**
 * Locale switcher.
 * - desktop: globe button + dropdown of locales
 * - mobile: all locales visible on a single row
 */
export default function LanguageSwitcher({ lang, variant }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function select(nextLang: Locale) {
    setOpen(false);
    setLocaleCookie(nextLang);
    router.push(localizedPath(pathname, nextLang));
  }

  // Close the dropdown on outside click or Escape (desktop variant only).
  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (variant === "mobile") {
    return (
      <div className="flex gap-2 pt-3 mt-3 border-t border-zinc-200">
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => select(locale)}
            aria-current={locale === lang ? "true" : undefined}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              locale === lang
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
            }`}
          >
            {localeLabels[locale]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 p-2 rounded-lg font-medium text-zinc-600 text-sm hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.5 3.75-5.5 3.75-9S14.5 5.5 12 3m0 18c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3M3.5 9h17m-17 6h17"
          />
        </svg>
        {localeLabels[lang]}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="right-0 absolute bg-white shadow-md border border-zinc-200 rounded-lg py-1 w-24 mt-1 animate-fade-in-down">
          {locales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                onClick={() => select(locale)}
                aria-current={locale === lang ? "true" : undefined}
                className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                  locale === lang
                    ? "bg-zinc-100 font-semibold text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {localeLabels[locale]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
