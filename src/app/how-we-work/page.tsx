import { PageHeader } from "@/components/blocks/page-header";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { ContactStrip } from "@/components/blocks/contact-strip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { tools } from "@/content/process";
import { faqs } from "@/content/faq";

export const metadata = pageMetadata({
  title: "How we work",
  description:
    "Our simple engagement process — discovery, onboarding, ongoing advice and an annual review — plus the tools we use and answers to common questions.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How We Work", path: "/how-we-work" },
        ])}
      />
      <PageHeader
        title="How we work"
        intro="A clear, proven way of working so you always know what happens next."
      />

      <ProcessSteps />

      {/* Tools */}
      <section className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Tools we use
          </h2>
          <div className="mt-4 flex flex-wrap gap-6 text-lg font-medium">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-balance text-3xl font-semibold">
          Frequently asked questions
        </h2>
        <Accordion className="mt-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <ContactStrip />
    </>
  );
}
