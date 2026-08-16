import Image from "next/image";
import { images } from "@/lib/images";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/shared/Container";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  label,
  title,
  description,
  image = images.internet,
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-black pt-24 text-offwhite">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="img-cinematic"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.55)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black" aria-hidden="true" />
      <Container className="relative w-full pb-16 md:pb-20">
        {label ? <SectionLabel>{label}</SectionLabel> : null}
        <EditorialHeading as="h1" size="lg" className="mt-6 max-w-4xl">
          {title}
        </EditorialHeading>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-offwhite/75 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
