import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, Home, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { services } from "@/content/services";
import { serviceAccent } from "@/lib/palette";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Building2> = {
  medical: HeartPulse,
  property: Home,
  planning: LineChart,
  business: Building2,
};

/** Home: four service cards linking to the matching section on /services. */
export function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          How we help
        </h2>
        <p className="mt-4 text-muted-foreground">
          Specialist accounting tailored to the people and businesses of
          Brisbane&rsquo;s north.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = icons[service.slug] ?? Building2;
          const accent = serviceAccent(service.slug);
          return (
            <Card key={service.slug} className="flex flex-col p-6">
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-xl",
                  accent.bg,
                  accent.fg,
                )}
              >
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {service.summary}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
