import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for PA Tech Services.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms"
        description="This page is a placeholder until full terms of use are supplied."
      />
      <section className="bg-black py-16 text-muted">
        <Container className="max-w-3xl space-y-4">
          <p>
            The PA Tech Services website is provided to help people understand
            available services and request a quote. Service work, pricing, and
            installation details are confirmed directly with the customer.
          </p>
          <p>
            A complete terms of use document will be published here once it is
            reviewed and approved.
          </p>
          <p>
            For questions, contact{" "}
            <a className="text-offwhite" href={site.emailHref}>
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
