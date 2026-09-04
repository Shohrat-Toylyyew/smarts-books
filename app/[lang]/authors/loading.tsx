/** Loading skeleton for the authors grid page. */
export default function AuthorsLoading() {
  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <div className="h-9 sm:h-12 w-40 bg-zinc-200 rounded-lg animate-pulse" />
      <div className="h-5 w-72 max-w-full bg-zinc-100 rounded mt-4 animate-pulse" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 sm:p-6 border border-zinc-200 rounded-xl"
          >
            <div className="bg-zinc-200 rounded-full w-20 h-20 sm:w-28 sm:h-28 animate-pulse" />
            <div className="bg-zinc-200 rounded h-4 w-24 mt-4 animate-pulse" />
            <div className="bg-zinc-100 rounded h-3 w-14 mt-2 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
