export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-zinc-200 border-t">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-2 mx-auto px-6 py-6 w-full max-w-7xl text-zinc-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Smarts Books. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
