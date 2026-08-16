"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/data/navigation";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";

type MobileMenuProps = {
  open: boolean;
  menuId: string;
  onNavigate: () => void;
};

export function MobileMenu({ open, menuId, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={menuId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="pointer-events-auto mt-3 overflow-hidden rounded-[28px] border border-line bg-black lg:hidden"
        >
          <Container className="flex max-h-[min(80svh,640px)] flex-col gap-1 overflow-y-auto py-6">
            <Logo size="menu" className="mb-4" />
            {mainNav.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div key={item.label} className="py-2">
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="block min-h-12 py-2 font-serif text-3xl text-offwhite"
                    >
                      {item.label}
                    </Link>
                    <div className="mt-1 space-y-1 border-t border-line pt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onNavigate}
                          className="block min-h-11 py-2 text-sm text-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="block min-h-12 py-2 font-serif text-3xl text-offwhite"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={onNavigate}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-offwhite text-sm font-medium text-black"
            >
              Get a Quote
            </Link>
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
