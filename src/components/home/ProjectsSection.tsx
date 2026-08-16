import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProjectsSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            label="Our Work"
            title="Installation Work Across Liberia"
            description="These cards are placeholders for completed PA Tech Services installations. They will be replaced with real project photos and details as they are supplied."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <MapPin className="size-4" aria-hidden="true" />
                    {project.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
