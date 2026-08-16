import type { Metadata } from "next";
import { PillButton } from "@/components/ui/PillButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[85svh] items-end bg-black pt-32 pb-24 text-offwhite">
      <Container>
        <SectionLabel>404</SectionLabel>
        <EditorialHeading as="h1" className="mt-6 max-w-3xl">
          This page is not available.
        </EditorialHeading>
        <p className="mt-6 max-w-lg text-muted">
          The page you were looking for does not exist or may have moved. Return
          home, view services, or contact PA Tech Services.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/">Back to Home</PillButton>
          <PillButton href="/services" variant="outline">
            View Services
          </PillButton>
          <PillButton href="/contact" variant="outline">
            Contact Us
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
