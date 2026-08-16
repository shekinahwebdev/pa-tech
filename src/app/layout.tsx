import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PA Tech Services | Internet, CCTV, Networking & IT Solutions Liberia",
    template: "%s | PA Tech Services",
  },
  description: site.description,
  keywords: [
    "Internet installation Liberia",
    "Wi-Fi installation Liberia",
    "CCTV installation Liberia",
    "Network cabling Liberia",
    "Starlink installation Liberia",
    "IT support Liberia",
    "Website design Liberia",
    "Technology services Liberia",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_LR",
    url: site.url,
    siteName: site.name,
    title: "PA Tech Services | Internet, CCTV, Networking & IT Solutions Liberia",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "PA Tech Services | Internet, CCTV, Networking & IT Solutions Liberia",
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-offwhite">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-offwhite focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
