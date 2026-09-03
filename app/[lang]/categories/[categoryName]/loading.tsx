export default function Loading() {
  return (
    <div className="mx-auto w-full flex-1 max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
      <div className="bg-zinc-100 rounded-lg h-10 w-48 animate-pulse" />
      <div className="bg-zinc-100 rounded h-5 w-56 mt-4 animate-pulse" />

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <li key={index}>
            <div className="bg-zinc-100 rounded-xl w-full h-60 animate-pulse" />
            <div className="bg-zinc-100 rounded h-4 w-3/4 mt-3 animate-pulse" />
            <div className="bg-zinc-100 rounded h-3 w-1/2 mt-2 animate-pulse" />
          </li>
        ))}
      </ul>
    </div>
  );
}
