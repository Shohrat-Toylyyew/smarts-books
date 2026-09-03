export default function Loading() {
  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <div className="bg-zinc-100 rounded h-4 w-28 animate-pulse" />

      <div className="flex sm:flex-row flex-col gap-6 sm:gap-10 mt-6 sm:mt-8">
        <div className="bg-zinc-100 rounded-xl w-48 sm:w-72 aspect-2/3 mx-auto sm:mx-0 shrink-0 animate-pulse" />

        <div className="flex flex-col w-full">
          <div className="bg-zinc-100 rounded-lg h-10 sm:h-12 w-3/4 animate-pulse" />
          <div className="bg-zinc-100 rounded h-5 w-48 mt-4 animate-pulse" />
          <div className="bg-zinc-100 rounded h-4 w-full mt-6 animate-pulse" />
          <div className="bg-zinc-100 rounded h-4 w-full mt-2 animate-pulse" />
          <div className="bg-zinc-100 rounded h-4 w-2/3 mt-2 animate-pulse" />
          <div className="flex gap-2 mt-6">
            <div className="bg-zinc-100 rounded-full h-7 w-24 animate-pulse" />
            <div className="bg-zinc-100 rounded-full h-7 w-24 animate-pulse" />
          </div>
          <div className="flex gap-4 mt-8">
            <div className="bg-zinc-100 rounded-full h-12 w-40 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
