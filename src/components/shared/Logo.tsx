import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  nav: { height: 44, width: 49 },
  menu: { height: 56, width: 63 },
  footer: { height: 112, width: 126 },
} as const;

type LogoProps = {
  className?: string;
  inverted?: boolean;
  size?: keyof typeof sizes;
};

export function Logo({ className, size = "nav" }: LogoProps) {
  const dimensions = sizes[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="PA Tech Services home"
    >
      <Image
        src="/brand/pa-tech-logo.png"
        alt="PA Tech Services"
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-auto rounded-md object-contain"
        style={{ height: dimensions.height, width: "auto" }}
        priority={size === "nav"}
      />
    </Link>
  );
}
