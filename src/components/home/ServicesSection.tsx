import { services } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/shared/Button";

export function ServicesSection() {
  return (
    <section className="bg-surface py-16 sm:py-24" id="services">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              label="What We Do"
              title="Technology Solutions Built Around Your Needs"
              description="From reliable internet connectivity to advanced security systems, PA Tech Services helps homes and organizations build dependable technology infrastructure."
            />
            <Button href="/services" variant="outlineDark" className="self-start lg:self-auto">
              View Services
            </Button>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
