import { PageHeader } from "@/components/blocks/page-header";
import { ContactForm } from "@/components/blocks/contact-form";
import { ContactDetails } from "@/components/blocks/contact-details";
import { MapEmbed } from "@/components/blocks/map-embed";
import { Card } from "@/components/ui/card";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Book a consultation with Accountants Brisbane North. Call, email or send an enquiry — we reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        title="Contact us"
        intro="Tell us a little about your situation and we'll be in touch within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <Card interactive={false} className="p-6 sm:p-8">
            <ContactForm />
          </Card>
          <ContactDetails />
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
