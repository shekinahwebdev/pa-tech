import { industries } from "@/data/content";
import { industryIcons } from "@/components/shared/icons";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function IndustriesSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            label="Who We Serve"
            title="Solutions for Every Environment"
            description="PA Tech Services works with residential and commercial customers across Liberia."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = industryIcons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.03}>
                <article className="h-full rounded-2xl border border-line bg-white p-5">
                  <Icon className="size-6 text-blue" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
