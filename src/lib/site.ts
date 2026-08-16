export const site = {
  name: "PA Tech Services",
  shortName: "PA Tech",
  legalName: "PA Tech Services",
  tagline: "Reliable Internet. Smarter Security. Better Connectivity.",
  description:
    "PA Tech Services provides professional internet installation, Wi-Fi solutions, CCTV systems, network cabling, website design, alarm systems, and IT support in Liberia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+231 777 121 612",
  phoneHref: "tel:+231777121612",
  email: "info@pktechsolutions.com",
  emailHref: "mailto:info@pktechsolutions.com",
  whatsappNumber: "231777121612",
  whatsappMessage:
    "Hello PA Tech Services, I'm interested in your services and would like to request more information.",
  hours: "Mon–Sat",
  location: {
    line: "Cole Farm, Brewerville",
    full: "Cole Farm, Brewerville, Montserrado County, Liberia",
    locality: "Brewerville",
    region: "Montserrado County",
    country: "LR",
    countryName: "Liberia",
  },
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
