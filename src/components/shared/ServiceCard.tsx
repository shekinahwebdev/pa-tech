import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { serviceIcons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const preview = service.offerings.slice(0, 5);

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:border-tech/30 hover:shadow-lg",
        featured && "md:p-7",
      )}
    >
      <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-surface text-blue">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-navy">
        {service.cardTitle}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-ink">
        {preview.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-tech" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-navy"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
