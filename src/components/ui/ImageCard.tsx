import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type ImageCardProps = {
  href: string;
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  className?: string;
  cta?: string;
};

export function ImageCard({
  href,
  src,
  alt,
  label,
  title,
  description,
  className,
  cta = "Explore service",
}: ImageCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[420px] overflow-hidden rounded-[22px] border border-line md:min-h-[520px] lg:min-h-[560px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="img-cinematic transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-black/10"
        aria-hidden="true"
      />
      <div className="relative mt-auto flex flex-col p-6 sm:p-8">
        <SectionLabel>{label}</SectionLabel>
        <h3 className="mt-4 font-serif text-[clamp(1.7rem,2.4vw,2.6rem)] leading-[1.05] text-offwhite">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-offwhite/70">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm text-offwhite/80 transition group-hover:text-lime">
          {cta}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
