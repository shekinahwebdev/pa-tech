"use client";

import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

type MobileNavProps = {
  open: boolean;
  menuId: string;
  onNavigate: () => void;
};

export function MobileNav({ open, menuId, onNavigate }: MobileNavProps) {
  return (
    <div
      id={menuId}
      hidden={!open}
      className="border-t border-white/10 bg-navy lg:hidden"
    >
      <Container className="flex max-h-[calc(100dvh-72px)] flex-col gap-1 overflow-y-auto py-4">
        {mainNav.map((item) => {
          if ("children" in item && item.children) {
            return (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block min-h-11 rounded-xl px-3 py-2 text-sm font-semibold text-white"
                >
                  {item.label}
                </Link>
                <div className="mt-1 space-y-1 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onNavigate}
                      className="block min-h-11 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
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
              className="block min-h-11 rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          );
        })}
        <div className="pt-3" onClick={onNavigate}>
          <Button href="/contact" className="w-full">
            Get a Free Quote
          </Button>
        </div>
      </Container>
    </div>
  );
}

