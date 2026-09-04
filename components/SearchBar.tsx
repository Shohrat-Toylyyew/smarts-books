"use client";

import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import type { Dictionary, Locale } from "@/data/i18n";

interface SearchBarProps {
  lang: Locale;
  dict: Dictionary;
  className?: string;
}

interface Suggestion {
  name: string;
  author: string;
}

/**
 * Search input with a live results dropdown below it.
 * - Typing queries `/api/search` (debounced 200ms) and shows book matches.
 * - Clicking a result opens the search page featuring that book.
 * - Pressing Enter opens the search page with the typed query.
 */
export default function SearchBar({ lang, dict, className }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced suggestions fetch.
  useEffect(() => {
    const trimmed = query.trim();
    const timer = setTimeout(async () => {
      if (!trimmed) {
        setResults([]);
        setOpen(false);
        return;
      }
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}`,
        );
        if (!response.ok) return;
        const data = (await response.json()) as { results: Suggestion[] };
        setResults(data.results);
        setOpen(true);
      } catch {
        // Network error — keep previous results.
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close the dropdown on outside click, Escape or blur.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
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

  function goToSearch(q: string) {
    setOpen(false);
    router.push(
      `/${lang}/search${q ? `?q=${encodeURIComponent(q)}` : ""}`,
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    goToSearch(query.trim());
  }

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <form onSubmit={handleSubmit} role="search">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder={dict.search.placeholder}
          aria-label={dict.search.title}
          autoComplete="off"
          className="w-full bg-zinc-100 focus:bg-white py-2 pr-9 pl-3 border border-transparent focus:border-zinc-300 focus:ring-2 focus:ring-zinc-200 rounded-lg text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none transition-all duration-200 [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="submit"
          aria-label={dict.search.title}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-zinc-400 hover:text-zinc-900 transition-colors"
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
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>
        </button>
      </form>

      {/* Results dropdown */}
      {open && results.length > 0 && (
        <ul
          role="listbox"
          className="absolute inset-x-0 top-full bg-white mt-1 border border-zinc-200 rounded-lg shadow-lg py-1 max-h-72 overflow-y-auto z-20 animate-fade-in-down"
        >
          {results.map((result) => (
            <li key={result.name}>
              <button
                type="button"
                onClick={() => goToSearch(result.name)}
                className="block w-full text-left px-3 py-2 hover:bg-zinc-50 transition-colors"
              >
                <span className="block text-sm font-medium text-zinc-900 truncate">
                  {result.name}
                </span>
                <span className="block text-xs text-zinc-500 truncate">
                  {result.author}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
