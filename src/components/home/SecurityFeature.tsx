import Image from "next/image";
import { images } from "@/lib/images";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  "Remote mobile viewing",
  "Indoor & outdoor cameras",
  "Recording systems",
  "Motion detection",
  "Professional configuration",
  "Maintenance & support",
];

export function SecurityFeature() {
  return (
    <section className="grid bg-black text-offwhite lg:min-h-[90svh] lg:grid-cols-2">
      <div className="relative min-h-[60svh] lg:min-h-full">
        <Image
          src={images.security.src}
          alt={images.security.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="img-cinematic"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      </div>
      <div className="flex items-center bg-black px-4 py-20 md:px-12 lg:px-16 lg:py-28">
        <Reveal>
          <SectionLabel>Security</SectionLabel>
          <EditorialHeading size="md" className="mt-6 max-w-xl">
            Know what’s happening, even when you’re away.
          </EditorialHeading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-offwhite/75">
            Professionally installed CCTV and security systems provide better
            visibility and greater peace of mind for homes, stores, offices,
            schools and commercial properties.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-offwhite/80">
                <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PillButton href="/services/cctv-security" variant="outline">
              Explore Security
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
