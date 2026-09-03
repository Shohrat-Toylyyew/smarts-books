import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Welcome to Smarts Books
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-600">
        Discover your next read. Browse a curated collection of books and explore
        categories that match your interests.
      </p>
      <Link
        href="/categories"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Browse Categories
      </Link>
    </div>
  );
}
