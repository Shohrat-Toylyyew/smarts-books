import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-zinc-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Smarts Books. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="/" className="transition-colors hover:text-zinc-900">
            Home
          </Link>
          <Link href="/categories" className="transition-colors hover:text-zinc-900">
            Categories
          </Link>
        </nav>
      </div>
    </footer>
  );
}