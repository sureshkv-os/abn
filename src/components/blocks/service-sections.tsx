import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { services } from "@/content/services";
import { site } from "@/content/site";

/**
 * Services page: each service as a separated section with an anchor id, "who
 * it's for", what's included, a case-study highlight and a CTA (proposal §2).
 */
export function ServiceSections() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          // scroll-mt offsets the sticky header when jumping to the anchor.
          className={cn(
            "scroll-mt-24 border-border/60 py-16",
            i > 0 && "border-t",
          )}
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold">
                {service.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-primary">
                For {service.audience}
              </p>
              <p className="mt-4 text-muted-foreground">{service.summary}</p>
              <Link
                href={site.primaryCta.href}
                className={cn(buttonVariants(), "mt-6")}
              >
                {site.primaryCta.label}
              </Link>
            </div>

            <div className="space-y-6">
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.caseStudy && (
                <Card variant="soft" className="p-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Case study:{" "}
                  </span>
                  {service.caseStudy}
                </Card>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
