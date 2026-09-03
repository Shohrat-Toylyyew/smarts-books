export default function Loading() {
  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <div className="bg-zinc-100 rounded-lg h-10 w-40 animate-pulse" />
      <div className="bg-zinc-100 rounded-lg h-5 w-72 mt-4 animate-pulse" />

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <div className="bg-zinc-100 rounded-xl w-full h-60 animate-pulse" />
            <div className="bg-zinc-100 rounded h-4 w-3/4 mt-3 animate-pulse" />
            <div className="bg-zinc-100 rounded h-3 w-1/2 mt-2 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
