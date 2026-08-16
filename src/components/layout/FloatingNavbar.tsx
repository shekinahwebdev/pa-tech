"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 md:top-5"
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto mx-auto flex h-16 max-w-[820px] items-center justify-between gap-3 rounded-[28px] bg-offwhite px-3 pl-3 text-black shadow-[0_10px_40px_-18px_rgba(0,0,0,0.45)] md:h-[68px] md:px-3 md:pl-3",
          scrolled && "bg-offwhite/92 backdrop-blur-md",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if ("children" in item && item.children) {
              const active = pathname.startsWith("/services");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-1 rounded-full px-3 text-[13px] text-black/75 transition hover:text-black",
                      active && "text-black",
                    )}
                    aria-expanded={servicesOpen}
                    onFocus={() => setServicesOpen(true)}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" aria-hidden="true" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-offwhite p-2 shadow-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-xl px-3 py-2.5 text-sm text-black/70 transition hover:bg-black/[0.04] hover:text-black"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-full px-3 text-[13px] text-black/75 transition hover:text-black",
                  active && "text-black",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-full bg-black px-4 text-[13px] font-medium text-offwhite transition hover:bg-soft"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-black lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        menuId={menuId}
        onNavigate={() => setMobileOpen(false)}
      />
    </motion.header>
  );
}

export function Header() {
  return <FloatingNavbar />;
}
