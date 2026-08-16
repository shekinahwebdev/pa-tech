import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";

export function IntroStatement() {
  return (
    <section className="bg-black py-20 text-offwhite md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>About PA Tech</SectionLabel>
          <EditorialHeading className="mt-6 max-w-5xl">
            Technology that keeps homes, businesses and communities connected.
          </EditorialHeading>
        </Reveal>
        <Divider className="mt-12" />
        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              Our purpose
            </p>
            <div>
              <p className="max-w-xl text-lg leading-relaxed text-offwhite/75">
                PA Tech Services provides practical connectivity, networking,
                security and IT solutions designed around real-world environments
                across Liberia.
              </p>
              <div className="mt-8">
                <PillButton href="/about" variant="outline">
                  About PA Tech
                </PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
