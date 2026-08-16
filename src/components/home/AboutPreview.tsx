import Image from "next/image";
import { images } from "@/lib/images";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            label="About PA Tech Services"
            title="Technology That Helps People Stay Connected and Protected"
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>
              PA Tech Services delivers practical technology solutions for
              residential, commercial, educational, agricultural, religious, and
              organizational environments across Liberia.
            </p>
            <p>
              Our work focuses on reliable connectivity, professional
              installations, secure networking, surveillance systems, and
              dependable technical support.
            </p>
            <p>
              Whether the project involves improving Wi-Fi coverage, installing
              CCTV cameras, building an office network, deploying internet
              connectivity, or creating a professional website, our goal is to
              provide a solution that is reliable, understandable, and suited to
              the customer’s needs.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="outlineDark">
              Learn About PA Tech Services
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.technician.src}
              alt={images.technician.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
