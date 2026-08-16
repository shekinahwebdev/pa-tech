import type { Metadata } from "next";
import { services } from "@/data/services";
import { ImageCard } from "@/components/ui/ImageCard";
import { PillButton } from "@/components/ui/PillButton";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CtaSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technology Services in Liberia",
  description:
    "Explore PA Tech Services offerings including internet installation, CCTV, network cabling, website design, alarm systems, and IT support in Liberia.",
  alternates: { canonical: "/services" },
};

const headings: Record<string, string> = {
  "internet-installation": "Reliable connectivity wherever you need it.",
  "cctv-security": "See more. Protect more.",
  "network-cabling": "Infrastructure built behind the scenes.",
  "web-design": "A stronger digital presence.",
  "alarm-systems": "Security that stays alert.",
  "it-support": "Technical support when it matters.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Internet, security, networking, and IT support."
        description="PA Tech Services helps homes, businesses, schools, churches, farms, and organizations across Liberia install and support practical technology systems."
        image={images.cabling}
      />
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-muted">
              Choose a service to see what is included, who it is for, and how to
              request a quote.
            </p>
            <PillButton href="/contact">Get a Free Quote</PillButton>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {services.map((service) => (
              <ImageCard
                key={service.slug}
                href={service.href}
                src={service.image.src}
                alt={service.image.alt}
                label={service.cardTitle}
                title={headings[service.slug] ?? service.cardTitle}
                description={service.summary}
              />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
