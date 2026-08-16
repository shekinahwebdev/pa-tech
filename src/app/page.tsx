import type { Metadata } from "next";
import { CTASection } from "@/components/home/CtaSection";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { InternetFeature } from "@/components/home/InternetFeature";
import { IntroStatement } from "@/components/home/IntroStatement";
import { Process } from "@/components/home/Process";
import { SecurityFeature } from "@/components/home/SecurityFeature";
import { ServicesEditorial } from "@/components/home/ServicesEditorial";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PA Tech Services | Internet, CCTV, Networking & IT Solutions Liberia",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ServicesEditorial />
      <InternetFeature />
      <SecurityFeature />
      <WhyChooseUs />
      <Process />
      <Industries />
      <WorkShowcase />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
