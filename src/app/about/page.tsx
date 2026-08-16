import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/images";
import { processSteps } from "@/data/content";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CtaSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Industries } from "@/components/home/Industries";

export const metadata: Metadata = {
  title: "About PA Tech Services",
  description:
    "PA Tech Services provides internet installation, CCTV, networking, websites, alarm systems, and IT support for homes and organizations across Liberia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Technology should work around people — not the other way around."
        description="PA Tech Services installs and supports internet, security, networking, websites, and IT systems that people can actually use."
        image={images.install}
      />

      <section className="bg-black py-20 text-offwhite md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Our story</SectionLabel>
            <EditorialHeading size="md" className="mt-5">
              Practical technology for homes and organizations in Liberia.
            </EditorialHeading>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PillButton href="/contact">Get a Free Quote</PillButton>
              <PillButton href="/services" variant="outline">
                View Services
              </PillButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-line">
            <Image
              src={images.technician.src}
              alt={images.technician.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="img-cinematic"
            />
          </div>
        </Container>
      </section>

      <section className="bg-near py-20 text-offwhite md:py-28">
        <Container>
          <SectionLabel>How we work</SectionLabel>
          <EditorialHeading size="md" className="mt-5">
            From first conversation to final connection.
          </EditorialHeading>
          <Divider className="mt-10" />
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number}>
                <p className="font-serif text-5xl text-offwhite/25">{step.number}</p>
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Industries />
      <CTASection />
    </>
  );
}
