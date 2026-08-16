import Image from "next/image";
import { internetHighlights } from "@/data/content";
import { images } from "@/lib/images";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

export function InternetFeature() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-offwhite md:py-32 lg:min-h-[85svh] lg:py-40">
      <Image
        src={images.starlink.src}
        alt={images.starlink.alt}
        fill
        sizes="100vw"
        className="img-cinematic"
      />
      <div className="absolute inset-0 bg-black/72" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/40" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionLabel>Internet Solutions</SectionLabel>
          <EditorialHeading className="mt-6 max-w-4xl">
            A better connection changes everything.
          </EditorialHeading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-offwhite/75">
            Whether you’re connecting a home, farm, school, office or campus, PA
            Tech Services can design a network suited to your environment.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-14 grid border-y border-line sm:grid-cols-2 lg:grid-cols-3">
            {internetHighlights.map((item) => (
              <li
                key={item}
                className="border-line px-0 py-5 text-sm text-offwhite/85 sm:border-r sm:px-6 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PillButton href="/contact?service=Internet%20Installation">
              Request Installation
            </PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
