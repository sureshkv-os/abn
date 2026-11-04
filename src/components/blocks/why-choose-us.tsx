import { Clock, HandshakeIcon, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Specialist expertise",
    body: "Registered tax agents and public accountants with deep sector knowledge.",
  },
  {
    icon: HandshakeIcon,
    title: "Fixed, agreed fees",
    body: "A clear scope and price up front — no surprise bills at the end.",
  },
  {
    icon: Clock,
    title: "Responsive service",
    body: "A single point of contact who knows your file and replies within a day.",
  },
  {
    icon: ShieldCheck,
    title: "Proactive advice",
    body: "Year-round planning, not just a tax return once a year.",
  },
];

/** Home: "why clients choose you" (adapts Tailark mist-content-4). */
export function WhyChooseUs() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">
          Why clients choose us
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <reason.icon className="size-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-medium">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
