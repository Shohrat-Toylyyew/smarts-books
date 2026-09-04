interface BookCardProps {
  title: string;
  subtitle?: string;
}

export default function TitlePage({ title, subtitle }: BookCardProps) {
  return (
    <div>
      <h1 className="font-semibold text-zinc-900 text-3xl sm:text-5xl tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-zinc-600 text-lg">{subtitle}</p>
    </div>
  );
}
