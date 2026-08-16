import { cn } from "@/lib/utils";

type DividerProps = {
  tone?: "onDark" | "onLight";
  className?: string;
};

export function Divider({ tone = "onDark", className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full",
        tone === "onDark" ? "bg-line" : "bg-line-dark",
        className,
      )}
      aria-hidden="true"
    />
  );
}
