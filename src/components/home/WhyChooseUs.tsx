import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";

const items = [
  {
    number: "01",
    title: "Professional installation",
    copy: "Systems are carefully installed, configured and tested for reliable everyday use.",
  },
  {
    number: "02",
    title: "Practical solutions",
    copy: "Recommendations are tailored to the site, the requirement, and the available budget.",
  },
  {
    number: "03",
    title: "Residential & commercial",
    copy: "Support for homes, businesses, institutions, campuses, farms and organizations.",
  },
  {
    number: "04",
    title: "Responsive support",
    copy: "Technical help when a connection, camera or network needs attention.",
  },
  {
    number: "05",
    title: "Reliable equipment",
    copy: "Networking and security equipment selected for the installation environment.",
  },
  {
    number: "06",
    title: "Customer-focused service",
    copy: "Guidance before, during and after installation so the system is understood.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-offwhite py-20 text-black md:py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel tone="onLight">Why PA Tech</SectionLabel>
          <EditorialHeading className="mt-6 max-w-3xl">
            Technology installed with purpose.
          </EditorialHeading>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.03}>
              <article
                className="border-line-dark px-0 py-8 sm:border-r sm:px-8 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <p className="text-xs tracking-[0.16em] text-black/35">{item.number}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Divider tone="onLight" className="mt-4" />
      </Container>
    </section>
  );
}
