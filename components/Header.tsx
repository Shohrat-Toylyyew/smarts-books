import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-10 sticky bg-white/90 backdrop-blur border-zinc-200 border-b">
      <div className="flex justify-between items-center mx-auto px-6 py-3 w-full max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
          <Image
            src="/logo.webp"
            alt="Smarts Books logo"
            width={512}
            height={512}
            className="rounded-md w-20 h-20 object-cover"
          />
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
