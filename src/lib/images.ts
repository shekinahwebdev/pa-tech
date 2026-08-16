function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;
}

export const images = {
  hero: {
    src: unsplash("photo-1558494949-ef010cbdcc31", 1920),
    alt: "Structured network cabling and ethernet connections in a professional installation rack",
    width: 1920,
    height: 1280,
  },
  internet: {
    src: unsplash("photo-1558494949-ef010cbdcc31", 1600),
    alt: "Network server rack with structured cabling used for business internet and connectivity",
    width: 1600,
    height: 1066,
  },
  security: {
    src: unsplash("photo-1557324232-b8917d3c3dcb", 1600),
    alt: "Outdoor CCTV security camera installed for property surveillance",
    width: 1600,
    height: 1066,
  },
  technician: {
    src: unsplash("photo-1581092918056-0c4c3acd3789", 1600),
    alt: "Technician working with networking and electronics equipment",
    width: 1600,
    height: 1066,
  },
  cabling: {
    src: unsplash("photo-1551703599-6b3e8379aa8c", 1400),
    alt: "Close-up of ethernet network cables prepared for structured cabling installation",
    width: 1400,
    height: 933,
  },
  wifi: {
    src: unsplash("photo-1606904825846-647eb07f5be2", 1400),
    alt: "Wireless router providing Wi-Fi coverage in a home or office",
    width: 1400,
    height: 933,
  },
  webDesign: {
    src: unsplash("photo-1461749280684-dccba630e2f6", 1400),
    alt: "Website code on a computer screen during professional web development",
    width: 1400,
    height: 933,
  },
  cctvOutdoor: {
    src: unsplash("photo-1614064641938-3bbee52942c7", 1400),
    alt: "Security camera mounted outdoors for monitoring a building",
    width: 1400,
    height: 933,
  },
  itSupport: {
    src: unsplash("photo-1588702547919-26089e690ecc", 1400),
    alt: "IT technician providing computer and network support",
    width: 1400,
    height: 933,
  },
  starlink: {
    src: unsplash("photo-1446776811953-b23d57bd21aa", 1400),
    alt: "Satellite view representing satellite internet and remote connectivity solutions",
    width: 1400,
    height: 933,
  },
  starlinkInstall: {
    src: "/service-images/starlink.jpg",
    alt: "Starlink satellite dish professionally mounted outdoors with a clear view of the sky",
    width: 4000,
    height: 3000,
  },
  cctvInstall: {
    src: "/service-images/cctv.jpg",
    alt: "Outdoor CCTV security cameras professionally installed on a building corner",
    width: 5184,
    height: 3456,
  },
  alarm: {
    src: unsplash("photo-1558002038-1055907df827", 1400),
    alt: "Security keypad used for alarm system installation and access control",
    width: 1400,
    height: 933,
  },
  install: {
    src: unsplash("photo-1621905251918-48416bd8575a", 1400),
    alt: "Field technician performing a professional installation with tools",
    width: 1400,
    height: 933,
  },
} as const;
