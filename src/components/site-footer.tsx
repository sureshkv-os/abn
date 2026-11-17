import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/content/site";

// Evaluated once at build time (not during render) to stay compatible with
// Next.js cacheComponents prerendering.
const CURRENT_YEAR = new Date().getFullYear();

const footerNav = [
  {
    group: "Services",
    items: [
      { title: "Medical accountants", href: "/services#medical" },
      { title: "Property tax", href: "/services#property" },
      { title: "Tax planning", href: "/services#planning" },
      { title: "Business accounting", href: "/services#business" },
    ],
  },
  {
    group: "Company",
    items: [
      { title: "About / Team", href: "/about" },
      { title: "How We Work", href: "/how-we-work" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export function SiteFooter() {
  const { contact, compliance } = site;

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + NAP */}
          <div className="md:col-span-2">
            <Link href="/" aria-label={`${site.name} home`} className="block w-fit">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {site.description}
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
              {contact.address.suburb && (
                <p>
                  {[contact.address.suburb, contact.address.state, contact.address.postcode]
                    .filter(Boolean)
                    .join(" ")}
                </p>
              )}
              <p>
                <a href={contact.phone.href} className="hover:text-foreground">
                  {contact.phone.display}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </p>
              <p>Hours: {contact.hours}</p>
            </address>
          </div>

          {/* Nav groups */}
          {footerNav.map((group) => (
            <nav key={group.group} aria-label={group.group} className="space-y-3">
              <span className="block text-sm font-semibold text-foreground">
                {group.group}
              </span>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        {/* Legal / compliance */}
        <div className="mt-12 space-y-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>{compliance.disclaimer}</p>
          {/* TODO(client, Q21): TPB registration number and professional-standards statement. */}
          {compliance.tpbRegistration && (
            <p>Tax Practitioners Board registration: {compliance.tpbRegistration}</p>
          )}
          {compliance.abn && <p>ABN: {compliance.abn}</p>}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span>
              © {CURRENT_YEAR} {site.legalName}. All rights reserved.
            </span>
            {/* Small developer credit — Terms cl.15. */}
            <span>
              Website by{" "}
              <a
                href="https://evaquest.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                EvaQuest
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
