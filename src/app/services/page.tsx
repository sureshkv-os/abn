import { PageHeader } from "@/components/blocks/page-header";
import { ServiceNav } from "@/components/blocks/service-nav";
import { ServiceSections } from "@/components/blocks/service-sections";
import { ContactStrip } from "@/components/blocks/contact-strip";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our services",
  description:
    "Medical accountants, property tax, tax planning and business accounting for clients across Brisbane's north.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHeader
        title="Our services"
        intro="Specialist accounting and tax for medical professionals, property investors and small businesses."
      />
      <ServiceNav />
      <ServiceSections />
      <ContactStrip />
    </>
  );
}
