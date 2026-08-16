import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/shared/Container";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location.line,
  },
  {
    icon: Clock3,
    label: "Hours",
    value: site.hours,
  },
];

export function ContactStrip() {
  return (
    <section className="relative z-10 bg-white" aria-label="Quick contact">
      <Container className="py-6 sm:py-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[var(--shadow-card)] md:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface text-blue">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-navy break-all">
                    {item.value}
                  </span>
                </span>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-surface"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={item.label} className="flex items-center gap-3 bg-white px-5 py-4">
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
