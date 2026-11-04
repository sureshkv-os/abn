import { PageHeader } from "@/components/blocks/page-header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          {/* TODO(client, Q21): review and confirm this policy. This is a
              template and not legal advice (Terms cl.7). */}
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to
            protecting your privacy and handling your personal information in
            accordance with the Australian Privacy Principles under the Privacy
            Act 1988 (Cth).
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide when you contact us or engage our
            services, including your name, email address, phone number and any
            details you include in an enquiry.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your information to respond to enquiries, provide accounting
            and tax services, meet our legal and regulatory obligations, and
            communicate with you about your engagement.
          </p>

          <h2>Disclosure</h2>
          <p>
            We do not sell your personal information. We may disclose it to the
            Australian Taxation Office, regulators or service providers where
            required to deliver our services or comply with the law.
          </p>

          <h2>Data security</h2>
          <p>
            We take reasonable steps to protect your information from misuse,
            loss and unauthorised access.
          </p>

          <h2>Access and correction</h2>
          <p>
            You may request access to or correction of the personal information
            we hold about you by contacting us at{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy questions, contact us at{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or{" "}
            <a href={site.contact.phone.href}>{site.contact.phone.display}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
