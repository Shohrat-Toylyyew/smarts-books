export default function Loading() {
  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <div className="bg-zinc-100 rounded h-4 w-28 animate-pulse" />
      <div className="bg-zinc-100 rounded-lg h-10 w-64 mt-6 sm:mt-8 animate-pulse" />
      <div className="bg-zinc-100 rounded h-5 w-40 mt-4 animate-pulse" />

      <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <li
            key={index}
            className="bg-white p-6 border border-zinc-200 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="bg-zinc-100 rounded-lg w-16 aspect-[2/3] shrink-0 animate-pulse" />
              <div className="w-full">
                <div className="bg-zinc-100 rounded h-4 w-3/4 animate-pulse" />
                <div className="bg-zinc-100 rounded h-3 w-1/2 mt-2 animate-pulse" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
