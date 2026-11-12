import Image from "next/image";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GradientCta } from "@/components/ui/gradient-cta";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { AnimatedHeadline } from "@/components/blocks/animated-headline";
import heroImage from "../../../public/hero.png";

/**
 * Home hero: the client-supplied image covers the full section as a background.
 * A soft navy gradient sits over the left (where the copy lives) and fades to
 * transparent, so the headline and CTAs stay readable while most of the photo
 * shows through uncovered on the right.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt=""
        aria-hidden
        fill
        priority
        placeholder="blur"
        className="-z-20 object-cover"
        sizes="100vw"
      />
      {/* Soft navy gradient over the left, fading to reveal the photo */}
      <div
        aria-hidden
        className="-z-10 absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 via-45% to-transparent to-80%"
      />

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-primary-foreground">
          <p className="font-medium text-primary-foreground/80">{site.name}</p>
          <AnimatedHeadline
            lines={["Accounting that moves", "your business forward"]}
            className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-xl text-balance text-lg text-primary-foreground/90 sm:text-xl">
            Registered tax agents in Brisbane&rsquo;s north for medical
            professionals, property investors and small businesses. Clear
            advice, fixed fees, and a team that knows your file.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GradientCta href={site.primaryCta.href}>
              {site.primaryCta.label}
            </GradientCta>
            <a
              href={site.contact.phone.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary-foreground/30 bg-transparent text-primary-foreground ring-0 hover:bg-primary-foreground/10",
              )}
            >
              <Phone aria-hidden /> {site.contact.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
