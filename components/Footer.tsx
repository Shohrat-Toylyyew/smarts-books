interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="bg-zinc-50 border-zinc-200 border-t">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-2 mx-auto px-4 sm:px-6 py-4 sm:py-6 w-full max-w-7xl text-center sm:text-left text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {text}</p>
      </div>
    </footer>
  );
}
