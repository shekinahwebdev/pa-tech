import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "onDark" | "onLight";
  className?: string;
};

export function SectionLabel({
  children,
  tone = "onDark",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] sm:text-xs",
        tone === "onDark" ? "text-offwhite/75" : "text-black/60",
        className,
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
      {children}
    </p>
  );
}
