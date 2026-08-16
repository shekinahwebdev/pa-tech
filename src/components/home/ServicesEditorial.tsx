import { services } from "@/data/services";
import { ImageCard } from "@/components/ui/ImageCard";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

const editorial = {
  "internet-installation": {
    label: "Internet & Wi-Fi",
    heading: "Reliable connectivity wherever you need it.",
  },
  "cctv-security": {
    label: "CCTV & Security",
    heading: "See more. Protect more.",
  },
  "network-cabling": {
    label: "Network Cabling",
    heading: "Infrastructure built behind the scenes.",
  },
  "web-design": {
    label: "Website Design",
    heading: "A stronger digital presence.",
  },
  "alarm-systems": {
    label: "Alarm Systems",
    heading: "Security that stays alert.",
  },
  "it-support": {
    label: "IT Support",
    heading: "Technical support when it matters.",
  },
} as const;

const spans = [
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
];

export function ServicesEditorial() {
  return (
    <section className="bg-near py-20 text-offwhite md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>Our Services</SectionLabel>
          <EditorialHeading className="mt-6 max-w-4xl">
            Infrastructure designed around the way you live and work.
          </EditorialHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            From reliable internet access to physical security and digital
            systems, we design and install technology that works where you need it.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-3 lg:grid-cols-5">
          {services.map((service, index) => {
            const copy = editorial[service.slug as keyof typeof editorial];
            return (
              <Reveal key={service.slug} delay={index * 0.04} className={spans[index]}>
                <ImageCard
                  href={service.href}
                  src={service.image.src}
                  alt={service.image.alt}
                  label={copy.label}
                  title={copy.heading}
                  description={service.summary}
                  className="h-full"
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
