import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-balance text-3xl font-semibold">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page may have moved. Try one of these, or get in touch and
        we&rsquo;ll point you the right way.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
          Back to home
        </Link>
        <Link
          href={site.primaryCta.href}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {site.primaryCta.label}
        </Link>
      </div>
      <nav aria-label="Helpful links" className="mt-10">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {[
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "How We Work", href: "/how-we-work" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-primary hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
