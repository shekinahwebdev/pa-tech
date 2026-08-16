import { projects } from "@/data/projects";
import { ImageCard } from "@/components/ui/ImageCard";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

const labels = ["CCTV", "Wi-Fi", "Network Cabling", "Starlink", "Networking", "Security"];

export function WorkShowcase() {
  return (
    <section className="bg-black py-20 text-offwhite md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>Our Work</SectionLabel>
          <EditorialHeading className="mt-6 max-w-3xl">
            Technology in the field.
          </EditorialHeading>
          <p className="mt-5 max-w-xl text-muted">
            These entries are placeholders until PA Tech Services installation
            photography is supplied. They are not completed client case studies.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <ImageCard
                href="/contact"
                src={project.image.src}
                alt={project.image.alt}
                label={labels[index] ?? project.category}
                title={project.title.replace(" Project", "")}
                description="Project details coming soon."
                cta="Request similar work"
                className="min-h-[420px] md:min-h-[480px] lg:min-h-[480px]"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
