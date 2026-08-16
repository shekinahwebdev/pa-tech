import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";

const slug = "alarm-systems";

export const metadata: Metadata = (() => {
  const service = getService(slug);
  return {
    title: service?.seoTitle,
    description: service?.seoDescription,
    keywords: service?.keywords,
    alternates: { canonical: service?.href },
  };
})();

export default function Page() {
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
