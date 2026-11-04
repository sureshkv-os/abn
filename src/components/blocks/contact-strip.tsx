import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/** One-line CTA band used at the foot of most pages. */
export function ContactStrip() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="text-2xl font-semibold">Ready to talk?</h2>
          <p className="mt-1 text-primary-foreground/80">
            Book a no-obligation consultation and see how we can help.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={site.primaryCta.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-background text-foreground",
            )}
          >
            {site.primaryCta.label}
          </Link>
          <a
            href={site.contact.phone.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            <Phone aria-hidden /> {site.contact.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
