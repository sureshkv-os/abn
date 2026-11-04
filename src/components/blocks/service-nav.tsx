import { services } from "@/content/services";

/** Sticky in-page anchor nav for the Services page. */
export function ServiceNav() {
  return (
    <nav
      aria-label="Services"
      className="sticky top-[57px] z-30 border-b border-border/60 bg-background/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-2">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            {service.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
