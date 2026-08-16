import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { processSteps } from "@/data/content";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CtaSection";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const installSteps = service.install?.steps ?? processSteps;
  const installLabel = service.install?.label ?? "How we typically work";

  return (
    <>
      <PageHero
        label="Services"
        title={service.title}
        description={service.description}
        image={service.image}
      />
      <section className="bg-black py-20 text-offwhite md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionLabel>Included</SectionLabel>
            <EditorialHeading size="md" className="mt-5">
              What this service includes
            </EditorialHeading>
            <ul className="mt-8 grid gap-0 sm:grid-cols-2">
              {service.offerings.map((item) => (
                <li key={item} className="border-t border-line py-4 text-sm text-offwhite/80">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-12 font-serif text-3xl">
              {service.whyHeading ?? "Why customers request this"}
            </h3>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[22px] border border-line">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="img-cinematic"
            />
          </div>
        </Container>
      </section>

      {service.install ? (
        <section className="bg-near py-20 text-offwhite">
          <Container>
            <SectionLabel>{installLabel}</SectionLabel>
            <EditorialHeading size="md" className="mt-5">
              {service.install.title}
            </EditorialHeading>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {installSteps.map((step) => (
                <li key={step.number} className="border-t border-line pt-6">
                  <p className="font-serif text-4xl text-offwhite/30">{step.number}</p>
                  <h3 className="mt-4 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {service.expansion ? (
        <section className="bg-black py-20 text-offwhite">
          <Container>
            <SectionLabel>{service.expansion.label}</SectionLabel>
            <EditorialHeading size="md" className="mt-5 max-w-3xl">
              {service.expansion.title}
            </EditorialHeading>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              {service.expansion.description}
            </p>
            <ul className="mt-8 grid gap-0 sm:grid-cols-2">
              {service.expansion.items.map((item) => (
                <li key={item} className="border-t border-line py-4 text-sm text-offwhite/80">
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="bg-near py-20 text-offwhite">
        <Container>
          <SectionLabel>A good fit for</SectionLabel>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {service.suitedFor.map((item) => (
              <p key={item} className="bg-near p-6 text-sm leading-relaxed text-offwhite/80">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <PillButton href={`/contact?service=${encodeURIComponent(service.quoteValue)}`}>
              Get a Free Quote
            </PillButton>
          </div>
        </Container>
      </section>

      {service.install ? null : (
        <section className="bg-black py-20 text-offwhite">
          <Container>
            <SectionLabel>{installLabel}</SectionLabel>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {installSteps.map((step) => (
                <li key={step.number} className="border-t border-line pt-6">
                  <p className="font-serif text-4xl text-offwhite/30">{step.number}</p>
                  <h3 className="mt-4 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <section className="bg-near py-20 text-offwhite">
        <Container>
          <SectionLabel>Related services</SectionLabel>
          <Divider className="mt-8" />
          <div className="mt-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="flex items-center justify-between border-b border-line py-6 text-offwhite hover:text-lime"
              >
                <span className="font-serif text-2xl md:text-3xl">{item.cardTitle}</span>
                <span className="text-sm text-muted">Explore →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
