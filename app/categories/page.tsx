const categories = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "Technology",
  "History",
  "Biography",
  "Fantasy",
  "Mystery",
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Categories
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-600">
        Explore books by category and find the perfect read for you.
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li
            key={category}
            className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400"
          >
            <h2 className="text-lg font-medium text-zinc-900">{category}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}