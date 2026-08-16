"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";
import { PillButton } from "@/components/ui/PillButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[95svh] items-end overflow-hidden bg-black text-offwhite">
      <Image
        src={images.internet.src}
        alt={images.internet.alt}
        fill
        priority
        sizes="100vw"
        className="hero-zoom img-cinematic"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.62)_50%,rgba(0,0,0,.4)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent"
        aria-hidden="true"
      />

      <Container className="relative w-full pb-16 pt-32 md:pb-20 md:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <SectionLabel>Connectivity. Security. Technology.</SectionLabel>
        </motion.div>
        <Divider className="mt-6" />
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <motion.h1
            className="max-w-[16ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Reliable technology
            <br />
            built for everyday life.
          </motion.h1>
          <motion.div
            className="max-w-md lg:justify-self-end lg:pb-3"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base leading-relaxed text-offwhite/80 sm:text-lg">
              From internet and Wi-Fi installations to CCTV, structured networking
              and IT support, PA Tech Services delivers dependable technology
              solutions for homes and organizations across Liberia.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <PillButton href="/contact">Get a Free Quote</PillButton>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center text-sm text-offwhite/80 transition hover:text-lime"
              >
                Explore Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
