import type { Metadata } from "next";
import { site, whatsappUrl } from "@/lib/site";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";
import { QuoteForm } from "@/components/shared/QuoteForm";

export const metadata: Metadata = {
  title: "Contact PA Tech Services",
  description:
    "Need internet installation, CCTV cameras, networking, a website, or technical support in Liberia? Contact PA Tech Services for a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-black pt-32 pb-24 text-offwhite md:pt-40 md:pb-32">
      <Container>
        <SectionLabel>Start a project</SectionLabel>
        <EditorialHeading as="h1" className="mt-6 max-w-4xl">
          Tell us what you need.
          <br />
          We’ll help you build the right solution.
        </EditorialHeading>
        <Divider className="mt-12" />
        <div className="mt-14 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <dl className="space-y-8">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Phone
                </dt>
                <dd className="mt-2 font-serif text-2xl">
                  <a href={site.phoneHref} className="hover:text-lime">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-2 text-lg">
                  <a href={site.emailHref} className="break-all hover:text-lime">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Location
                </dt>
                <dd className="mt-2 max-w-xs text-lg leading-relaxed text-offwhite/80">
                  Cole Farm, Brewerville
                  <br />
                  Montserrado County, Liberia
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PillButton href={site.phoneHref}>Call Now</PillButton>
              <PillButton href={whatsappUrl()} variant="whatsapp" external>
                WhatsApp Us
              </PillButton>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
