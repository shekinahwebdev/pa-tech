import { cn } from "@/lib/utils";

const sizes = {
  xl: "text-[clamp(3rem,7vw,7rem)] leading-[0.95]",
  lg: "text-[clamp(2.25rem,4.6vw,4.75rem)] leading-[1]",
  md: "text-[clamp(1.75rem,3vw,3.25rem)] leading-[1.05]",
  sm: "text-[clamp(1.4rem,2.2vw,2.25rem)] leading-[1.1]",
} as const;

type EditorialHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof sizes;
  className?: string;
};

export function EditorialHeading({
  children,
  as: Tag = "h2",
  size = "lg",
  className,
}: EditorialHeadingProps) {
  return (
    <Tag className={cn("font-serif tracking-[-0.02em] text-balance", sizes[size], className)}>
      {children}
    </Tag>
  );
}
