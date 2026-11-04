import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { principal, team } from "@/content/team";

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
 * About page team grid (adapts Tailark mist-team-1). Reads content/team.
 * TODO(client, Q6): supply professional photos to replace the initials.
 */
export function TeamGrid() {
  const members = [
    {
      name: principal.name,
      role: principal.role,
      credentials: "",
      bio: principal.story,
    },
    ...team,
  ];

  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Meet the team
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="size-14">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {initials(member.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                {member.credentials && (
                  <p className="text-sm text-muted-foreground">
                    {member.credentials}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
