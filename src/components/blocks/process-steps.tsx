import { processSteps, expectations } from "@/content/process";
import { Check } from "lucide-react";

/** How We Work: numbered engagement steps + what clients can expect. */
export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            A simple, proven process
          </h2>
          <ol className="mt-10 space-y-8">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl bg-sky p-6 text-foreground/80">
          <h3 className="font-semibold text-foreground">What you can expect</h3>
          <ul className="mt-4 space-y-3">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-sky-foreground" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
