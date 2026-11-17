import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { asset } from "@/lib/base-path";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * About page team list: a square photo on the left with name, role and bio on
 * the right, divided row by row. Reads content/team.
 */
export function TeamGrid() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Meet the team
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The people behind {site.name} — here to help you and your business.
        </p>

        <ul className="mt-12 divide-y divide-border/60">
          {team.map((member) => (
            <li
              key={member.photo || member.name}
              className="grid grid-cols-[auto_1fr] gap-5 py-8 first:pt-0 sm:gap-6"
            >
              {/* Photo */}
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted sm:size-24">
                {member.photo ? (
                  <Image
                    src={asset(member.photo)}
                    alt={`${member.name} — ${site.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                ) : (
                  <Avatar className="size-full rounded-xl">
                    <AvatarFallback className="rounded-xl bg-primary/10 text-primary">
                      {initials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>

              {/* Details */}
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  {member.name}
                </h3>
                {(member.role || member.credentials) && (
                  <p className="mt-1 text-sm font-medium text-primary">
                    {[member.role, member.credentials]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                {member.bio && (
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {member.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
