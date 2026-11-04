import { PageHeader } from "@/components/blocks/page-header";
import { TeamGrid } from "@/components/blocks/team-grid";
import { AwardsStrip } from "@/components/blocks/awards-strip";
import { Testimonials } from "@/components/blocks/testimonials";
import { ContactStrip } from "@/components/blocks/contact-strip";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { principal, community } from "@/content/team";

export const metadata = pageMetadata({
  title: "About our team",
  description:
    "Meet the registered tax agents and public accountants behind Accountants Brisbane North — our story, team, awards and community.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        title="About us"
        intro="A trusted accounting partner for Brisbane's north."
      />

      {/* Principal's story */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold">
            Our story
          </h2>
          <p className="mt-4 text-muted-foreground">{principal.story}</p>
        </div>
      </section>

      <TeamGrid />

      {/* Awards */}
      <AwardsStrip />

      {/* Community */}
      <section className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-balance text-3xl font-semibold">
            In our community
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{community}</p>
        </div>
      </section>

      <Testimonials heading="In our clients' words" />
      <ContactStrip />
    </>
  );
}
