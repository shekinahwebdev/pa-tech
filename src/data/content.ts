export const whyChooseUs = [
  {
    title: "Professional Installation",
    description:
      "Every project is installed carefully and configured for dependable everyday use.",
    icon: "wrench" as const,
  },
  {
    title: "Affordable Solutions",
    description:
      "Solutions can be tailored to the customer’s requirements and budget.",
    icon: "wallet" as const,
  },
  {
    title: "Residential & Commercial",
    description:
      "Support homes, businesses, institutions, campuses, farms, and organizations.",
    icon: "buildings" as const,
  },
  {
    title: "Fast Response",
    description:
      "Responsive technical support when customers need assistance.",
    icon: "clock" as const,
  },
  {
    title: "Quality Equipment",
    description:
      "Use dependable networking and security equipment selected for the installation environment.",
    icon: "badge" as const,
  },
  {
    title: "Customer-Focused Support",
    description:
      "Guide customers before, during, and after installation.",
    icon: "users" as const,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Tell us what service or problem you need help with.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We evaluate your location, requirements, and available infrastructure.",
  },
  {
    number: "03",
    title: "Recommendation & Quote",
    description:
      "We recommend an appropriate solution and provide pricing.",
  },
  {
    number: "04",
    title: "Installation & Support",
    description:
      "Our technicians install, configure, test, and support your system.",
  },
];

export const industries = [
  {
    title: "Homes",
    description: "Wi-Fi, CCTV, and home internet installations that are easier to live with.",
    icon: "home" as const,
  },
  {
    title: "Businesses",
    description: "Connectivity, cameras, and networks for shops and growing companies.",
    icon: "briefcase" as const,
  },
  {
    title: "Schools",
    description: "Practical internet and security setups for classrooms and school grounds.",
    icon: "school" as const,
  },
  {
    title: "Universities & Campuses",
    description: "Wider coverage, cabling, and support across campus buildings.",
    icon: "campus" as const,
  },
  {
    title: "Farms",
    description: "Outdoor wireless links, cameras, and connectivity for agricultural sites.",
    icon: "farm" as const,
  },
  {
    title: "Churches",
    description: "Internet, sound-adjacent networking, and property security for church facilities.",
    icon: "church" as const,
  },
  {
    title: "NGOs",
    description: "Dependable office networks, internet, and security for program operations.",
    icon: "ngo" as const,
  },
  {
    title: "Offices & Organizations",
    description: "Structured cabling, business internet, and IT support for daily operations.",
    icon: "office" as const,
  },
];

export const internetHighlights = [
  "Starlink Setup",
  "Wi-Fi Coverage",
  "Outdoor Wireless Links",
  "Router Configuration",
  "Network Expansion",
  "Business Internet Solutions",
];

export const securityBenefits = [
  "24/7 surveillance",
  "Remote phone viewing",
  "Indoor and outdoor cameras",
  "Recording systems",
  "Motion detection",
  "Professional setup",
  "Maintenance and support",
];

export const trustItems = [
  "Residential & Commercial",
  "Professional Installation",
  "Fast Support",
  "Serving Liberia",
];

export const customerTypes = [
  "Home",
  "Business",
  "School",
  "Church",
  "Farm",
  "NGO",
  "Organization",
  "Other",
] as const;

export const quoteServices = [
  "Internet Installation",
  "Starlink Installation",
  "Wi-Fi Setup",
  "CCTV Installation",
  "Network Cabling",
  "Alarm System",
  "Website Design",
  "IT Support",
  "Other",
] as const;

export type QuoteService = (typeof quoteServices)[number];

export const contactMethods = ["Phone", "WhatsApp", "Email"] as const;
