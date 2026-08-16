import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for PA Tech Services.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="This page is a placeholder until a full privacy policy is supplied."
      />
      <section className="bg-black py-16 text-muted">
        <Container className="max-w-3xl space-y-4">
          <p>
            PA Tech Services respects the information people share when they call,
            email, WhatsApp, or use the quote form on this website.
          </p>
          <p>
            Contact details submitted through the website are intended only for
            responding to service inquiries. A complete privacy policy will be
            published here once it is reviewed and approved.
          </p>
          <p>
            For privacy questions, contact{" "}
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
