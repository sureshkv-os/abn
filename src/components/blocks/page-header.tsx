export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
