import { categories } from "@/data/books";

export default function CategoriesPage() {
  return (
    <div className="flex-1 mx-auto px-6 py-16 w-full max-w-7xl">
      <h1 className="font-semibold text-zinc-900 text-4xl sm:text-5xl tracking-tight">
        Categories
      </h1>
      <p className="mt-4 max-w-xl text-zinc-600 text-lg">
        Explore books by category and find the perfect read for you.
      </p>
      <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {categories.map((category) => (
          <li
            key={category}
            className="bg-white p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-colors"
          >
            <h2 className="font-medium text-zinc-900 text-lg">{category}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
