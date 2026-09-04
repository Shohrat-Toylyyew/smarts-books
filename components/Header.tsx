"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary, Locale } from "@/data/i18n";

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/categories`, label: dict.nav.categories },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contacts`, label: dict.nav.contacts },
  ];

  return (
    <header className="top-0 z-10 sticky bg-white/90 backdrop-blur border-zinc-200 border-b">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 py-2 sm:py-3 w-full max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.webp"
            alt="Smarts Books logo"
            width={512}
            height={512}
            className="rounded-md w-12 h-12 sm:w-20 sm:h-20 object-cover"
          />
        </Link>

        {/* Desktop navigation + language switcher */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6 font-medium text-zinc-600 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-zinc-900 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-zinc-900 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="w-px h-5 bg-zinc-200" aria-hidden />
          <LanguageSwitcher lang={lang} variant="desktop" />
        </div>

        {/* Mobile / tablet hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex md:hidden justify-center items-center p-2 -mr-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile / tablet dropdown menu — fixed overlay below the header */}
      {menuOpen && (
        <nav className="fixed inset-x-0 top-16 sm:top-26 z-10 md:hidden bg-white border-zinc-200 border-b shadow-sm animate-fade-in-down">
          <ul className="mx-auto px-4 py-3 w-full max-w-7xl space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:bg-zinc-50 px-3 py-3 rounded-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Locale switcher — one row, all locales visible */}
          <div className="mx-auto px-4 pb-3 w-full max-w-7xl">
            <LanguageSwitcher lang={lang} variant="mobile" />
          </div>
        </nav>
      )}
    </header>
  );
}
