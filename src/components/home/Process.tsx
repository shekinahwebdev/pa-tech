import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

const steps = [
  { number: "01", title: "Tell us what you need" },
  { number: "02", title: "We assess the environment" },
  { number: "03", title: "We recommend a solution" },
  { number: "04", title: "We install and support it" },
];

export function Process() {
  return (
    <section className="bg-black py-20 text-offwhite md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
          <EditorialHeading className="mt-6 max-w-4xl">
            From first conversation to final connection.
          </EditorialHeading>
        </Reveal>
        <ol className="mt-16 grid gap-8 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <li className="relative md:px-6 md:first:pl-0">
                {index < steps.length - 1 ? (
                  <span
                    className="absolute top-7 right-0 hidden h-px w-full bg-line md:block"
                    aria-hidden="true"
                  />
                ) : null}
                <p className="relative font-serif text-5xl text-offwhite/30 md:text-6xl">
                  {step.number}
                </p>
                <h3 className="relative mt-6 max-w-[12ch] text-lg text-offwhite">
                  {step.title}
                </h3>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
