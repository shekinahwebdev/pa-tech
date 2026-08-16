import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const cards = [
  {
    icon: Phone,
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: site.location.line,
  },
];

export function ContactPreview() {
  return (
    <section className="bg-white py-16 sm:py-24" id="contact-preview">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Request a Quote or Ask a Question"
            description="Share a few details about your project and we will help you choose a practical next step. You can also call or WhatsApp us directly."
          />
          <ul className="mt-8 space-y-3">
            {cards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-surface text-blue">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {card.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-navy break-all">
                      {card.value}
                    </span>
                  </span>
                </>
              );

              if (card.href) {
                return (
                  <li key={card.label}>
                    <a
                      href={card.href}
                      className="flex items-center gap-3 rounded-2xl border border-line p-4 transition-colors hover:bg-surface"
                    >
                      {inner}
                    </a>
                  </li>
                );
              }

              return (
                <li key={card.label}>
                  <div className="flex items-center gap-3 rounded-2xl border border-line p-4">
                    {inner}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <QuoteForm compact />
        </Reveal>
      </Container>
    </section>
  );
}
