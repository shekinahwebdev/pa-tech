import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/shared/Container";

const rows = [
  { title: "Homes", href: "/services" },
  { title: "Businesses", href: "/services" },
  { title: "Schools & Campuses", href: "/services" },
  { title: "Farms", href: "/services" },
  { title: "Churches", href: "/services" },
  { title: "NGOs", href: "/services" },
  { title: "Offices & Organizations", href: "/services" },
];

export function Industries() {
  return (
    <section className="bg-near py-20 text-offwhite md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>Who we serve</SectionLabel>
          <EditorialHeading className="mt-6 max-w-3xl">
            Built for different environments.
          </EditorialHeading>
        </Reveal>
        <div className="mt-14">
          {rows.map((row, index) => (
            <Reveal key={row.title} delay={index * 0.03}>
              <Link
                href={row.href}
                className="group flex items-center justify-between border-b border-line py-5 transition hover:pl-2 md:py-7"
              >
                <span className="font-serif text-[clamp(1.6rem,3vw,2.75rem)] leading-none">
                  {row.title}
                </span>
                <ArrowUpRight className="size-6 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
