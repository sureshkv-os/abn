import { type Accent, houseAccent } from "@/lib/palette";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  intro,
  accent = houseAccent,
}: {
  title: string;
  intro?: string;
  /** Hue of the short rule under the title. Defaults to the house accent. */
  accent?: Accent;
}) {
  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <div className={cn("mt-5 h-1 w-12 rounded-full", accent.solid)} />
        {intro && (
          <p className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
