import { processSteps } from "@/data/content";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProcessSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            label="How It Works"
            title="From Consultation to Installation"
            description="A clear process from the first call through installation and support."
            align="center"
          />
        </Reveal>
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-line md:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <li className="relative text-center md:px-2">
                <span className="relative z-10 mx-auto mb-5 flex size-14 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-blue">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
