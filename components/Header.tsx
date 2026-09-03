import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Smarts Books
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/" className="transition-colors hover:text-zinc-900">
            Home
          </Link>
          <Link href="/categories" className="transition-colors hover:text-zinc-900">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
}