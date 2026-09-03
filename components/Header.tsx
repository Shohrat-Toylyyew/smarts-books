import Link from "next/link";

export default function Header() {
  return (
    <header className="top-0 z-10 sticky bg-white/90 backdrop-blur border-zinc-200 border-b">
      <div className="flex justify-between items-center mx-auto px-6 w-full max-w-7xl h-16">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Smarts Books
        </Link>
        <nav className="flex items-center gap-6 font-medium text-zinc-600 text-sm">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <Link
            href="/categories"
            className="hover:text-zinc-900 transition-colors"
          >
            Categories
          </Link>
          <Link href="/about" className="hover:text-zinc-900 transition-colors">
            About
          </Link>
          <Link
            href="/contacts"
            className="hover:text-zinc-900 transition-colors"
          >
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
