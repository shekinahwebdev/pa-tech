import { site } from "@/lib/site";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

export function CTASection() {
  return (
    <section className="border-t border-line bg-black py-20 text-offwhite md:py-28 lg:py-36">
      <Container className="max-w-4xl">
        <Reveal>
          <SectionLabel>Let&apos;s work together</SectionLabel>
          <EditorialHeading className="mt-6">
            Need better internet, security or IT infrastructure?
          </EditorialHeading>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PillButton href="/contact">Get a Free Quote</PillButton>
            <PillButton href={site.phoneHref} variant="outline">
              Call {site.phone}
            </PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { CTASection as CtaSection };
