import { Hero } from "@/components/blocks/hero";
import { CredibilityStrip } from "@/components/blocks/credibility-strip";
import { ServiceCards } from "@/components/blocks/service-cards";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";
import { Testimonials } from "@/components/blocks/testimonials";
import { ContactStrip } from "@/components/blocks/contact-strip";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tax accountants in Brisbane's north",
  description:
    "Registered tax agents in Brisbane's north for medical professionals, property investors and small businesses. Clear advice, fixed fees. Book a consultation.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServiceCards />
      <WhyChooseUs />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
