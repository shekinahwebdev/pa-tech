import { images } from "@/lib/images";
import type { QuoteService } from "@/data/content";

export type ServiceIconName =
  | "wifi"
  | "cctv"
  | "cable"
  | "monitor"
  | "shield"
  | "headset";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  cardTitle: string;
  icon: ServiceIconName;
  href: string;
  quoteValue: QuoteService;
  summary: string;
  description: string;
  offerings: string[];
  benefits: string[];
  suitedFor: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "internet-installation",
    title: "Internet & Wi-Fi Solutions",
    shortTitle: "Internet Installation",
    navLabel: "Internet Installation",
    cardTitle: "Internet & Wi-Fi Solutions",
    icon: "wifi",
    href: "/services/internet-installation",
    quoteValue: "Internet Installation",
    summary:
      "Internet installation, Starlink setup, router configuration, and Wi-Fi coverage for homes, offices, campuses, and remote sites.",
    description:
      "PA Tech Services designs and installs practical internet and Wi-Fi systems for homes, businesses, schools, churches, farms, and organizations across Liberia. From a single router to wider wireless coverage and outdoor links, the goal is dependable connectivity that matches the location.",
    offerings: [
      "Internet installation",
      "Starlink installation",
      "Router installation",
      "Wireless networking",
      "Wi-Fi optimization",
      "Wi-Fi extension",
      "Business connectivity",
      "Point-to-point wireless links",
      "Internet troubleshooting",
    ],
    benefits: [
      "Coverage planned around the building or site",
      "Starlink and wireless options for areas with limited wired internet",
      "Router setup that is easier to manage day to day",
      "Support when the connection needs attention",
    ],
    suitedFor: [
      "Homes with weak or incomplete Wi-Fi coverage",
      "Offices that need stable business internet",
      "Schools, campuses, and churches",
      "Farms and sites that need outdoor wireless links",
    ],
    image: images.wifi,
    seoTitle: "Internet Installation Liberia | Wi-Fi & Starlink Setup",
    seoDescription:
      "Internet installation, Starlink setup, router configuration, and Wi-Fi coverage for homes and businesses in Liberia. Serving Monrovia, Brewerville, and surrounding areas.",
    keywords: [
      "Internet installation Liberia",
      "Wi-Fi installation Liberia",
      "Starlink installation Liberia",
    ],
  },
  {
    slug: "cctv-security",
    title: "CCTV & Security Cameras",
    shortTitle: "CCTV & Security",
    navLabel: "CCTV & Security",
    cardTitle: "CCTV & Security Cameras",
    icon: "cctv",
    href: "/services/cctv-security",
    quoteValue: "CCTV Installation",
    summary:
      "Indoor and outdoor CCTV systems with recording, remote viewing, and professional camera installation.",
    description:
      "PA Tech Services installs CCTV and security camera systems for homes, shops, offices, schools, farms, and commercial properties. Systems can include indoor cameras, outdoor cameras, recording equipment, and remote viewing on a phone so property owners can see what is happening when they are away.",
    offerings: [
      "Indoor cameras",
      "Outdoor cameras",
      "IP camera systems",
      "NVR/DVR installation",
      "Remote mobile viewing",
      "Camera maintenance",
      "Camera system upgrades",
      "Business surveillance systems",
    ],
    benefits: [
      "Camera placement planned for the property",
      "Indoor and outdoor coverage options",
      "Recording systems for later review",
      "Remote viewing from a phone where the system supports it",
    ],
    suitedFor: [
      "Homes and residential compounds",
      "Shops, offices, and warehouses",
      "Schools and churches",
      "Farms and commercial sites",
    ],
    image: images.security,
    seoTitle: "CCTV Installation Liberia | Security Cameras",
    seoDescription:
      "CCTV camera installation in Liberia for homes and businesses, including indoor and outdoor cameras, NVR/DVR systems, and remote mobile viewing.",
    keywords: [
      "CCTV installation Liberia",
      "CCTV cameras Liberia",
      "Security camera installation Liberia",
    ],
  },
  {
    slug: "network-cabling",
    title: "Structured Network Cabling",
    shortTitle: "Network Cabling",
    navLabel: "Network Cabling",
    cardTitle: "Structured Network Cabling",
    icon: "cable",
    href: "/services/network-cabling",
    quoteValue: "Network Cabling",
    summary:
      "Cat6, Cat6A, ethernet cabling, racks, patch panels, and office network installation.",
    description:
      "A reliable network starts with clean cabling. PA Tech Services installs structured network cabling for offices, schools, and organizations that need stable wired connections, organized racks, and room to grow. Work can include Cat6 or Cat6A runs, patch panels, switches, and testing.",
    offerings: [
      "Cat6 installation",
      "Cat6A installation",
      "Ethernet cabling",
      "Network racks",
      "Patch panels",
      "Switch installation",
      "Office networking",
      "Fiber optic solutions",
      "Network testing",
    ],
    benefits: [
      "Neater, more dependable wired connections",
      "Racks and patch panels that are easier to manage",
      "Support for office computers, cameras, and access points",
      "A foundation that can be expanded later",
    ],
    suitedFor: [
      "New offices and renovations",
      "Schools and campus buildings",
      "Businesses adding cameras or extra workstations",
      "Organizations replacing messy or unreliable cabling",
    ],
    image: images.cabling,
    seoTitle: "Network Cabling Liberia | Cat6 & Office Networking",
    seoDescription:
      "Structured network cabling in Liberia including Cat6, Cat6A, ethernet installation, racks, patch panels, and office network setup in Monrovia and surrounding areas.",
    keywords: [
      "Network cabling Liberia",
      "Network installation Monrovia",
      "Cat6 installation Liberia",
    ],
  },
  {
    slug: "web-design",
    title: "Website Design",
    shortTitle: "Website Design",
    navLabel: "Website Design",
    cardTitle: "Website Design",
    icon: "monitor",
    href: "/services/web-design",
    quoteValue: "Website Design",
    summary:
      "Business websites, company sites, portfolios, and e-commerce with hosting, domains, and SEO basics.",
    description:
      "PA Tech Services builds professional websites for businesses, organizations, and individuals who need a clear online presence. Work can include company websites, portfolios, e-commerce, domain setup, hosting configuration, mobile-responsive design, and ongoing maintenance.",
    offerings: [
      "Business websites",
      "Company websites",
      "Portfolios",
      "E-commerce websites",
      "Domain setup",
      "Hosting configuration",
      "Mobile-responsive design",
      "SEO",
      "Maintenance",
    ],
    benefits: [
      "A site that explains what you do and how to reach you",
      "Layouts that work on phones and computers",
      "Help with domain and hosting setup",
      "A foundation for local search visibility",
    ],
    suitedFor: [
      "Local businesses that need a professional website",
      "Organizations publishing services and contact details",
      "Professionals who need a portfolio",
      "Shops exploring simple e-commerce",
    ],
    image: images.webDesign,
    seoTitle: "Website Design Liberia | Business & Company Websites",
    seoDescription:
      "Website design in Liberia for businesses and organizations, including company websites, portfolios, e-commerce, domain setup, hosting, and mobile-responsive design.",
    keywords: ["Website design Liberia", "Business websites Liberia"],
  },
  {
    slug: "alarm-systems",
    title: "Alarm & Smart Security",
    shortTitle: "Alarm Systems",
    navLabel: "Alarm Systems",
    cardTitle: "Alarm & Smart Security",
    icon: "shield",
    href: "/services/alarm-systems",
    quoteValue: "Alarm System",
    summary:
      "Alarm systems, motion detectors, door sensors, access control, and office security solutions.",
    description:
      "PA Tech Services installs alarm and smart security systems that complement CCTV. This can include motion detectors, door sensors, access control, and security automation for homes, offices, and commercial properties that need more than cameras alone.",
    offerings: [
      "Alarm systems",
      "Motion detectors",
      "Door sensors",
      "Smart security",
      "Access control",
      "Security automation",
      "Office security solutions",
    ],
    benefits: [
      "Alerts when doors, windows, or motion zones are triggered",
      "Can work alongside CCTV for a fuller security setup",
      "Options for homes and commercial properties",
      "Installation planned around how the building is used",
    ],
    suitedFor: [
      "Homes that need an alarm in addition to cameras",
      "Offices and shops after hours",
      "Properties that need door and motion sensors",
      "Sites exploring access control",
    ],
    image: images.alarm,
    seoTitle: "Alarm Systems Liberia | Smart Security Installation",
    seoDescription:
      "Alarm system installation in Liberia including motion detectors, door sensors, smart security, and access control for homes, offices, and commercial properties.",
    keywords: ["Alarm systems Liberia", "Smart security Liberia"],
  },
  {
    slug: "it-support",
    title: "IT Support",
    shortTitle: "IT Support",
    navLabel: "IT Support",
    cardTitle: "IT Support",
    icon: "headset",
    href: "/services/it-support",
    quoteValue: "IT Support",
    summary:
      "Computer troubleshooting, network support, router configuration, hardware help, and technical maintenance.",
    description:
      "When computers, Wi-Fi, or office equipment stop working, PA Tech Services provides practical IT support. That includes troubleshooting computers and networks, configuring routers, assisting with hardware and software issues, and helping businesses keep everyday technology running.",
    offerings: [
      "Computer troubleshooting",
      "Network troubleshooting",
      "Router configuration",
      "Wi-Fi troubleshooting",
      "Hardware support",
      "Software support",
      "Business IT support",
      "Technical maintenance",
    ],
    benefits: [
      "Help diagnosing common computer and network problems",
      "Router and Wi-Fi configuration support",
      "Practical assistance for homes and small offices",
      "Follow-up support after installations",
    ],
    suitedFor: [
      "Homes with internet or computer problems",
      "Small businesses without an in-house IT team",
      "Offices that need router or Wi-Fi help",
      "Customers who need support after an installation",
    ],
    image: images.itSupport,
    seoTitle: "IT Support Liberia | Computer & Network Troubleshooting",
    seoDescription:
      "IT support in Liberia for homes and businesses, including computer troubleshooting, network issues, router configuration, Wi-Fi help, and technical maintenance.",
    keywords: ["IT support Liberia", "Technology services Liberia"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
