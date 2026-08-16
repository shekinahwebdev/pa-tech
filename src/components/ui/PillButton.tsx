import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  light: "bg-offwhite text-black hover:bg-white",
  dark: "bg-black text-offwhite hover:bg-soft",
  outline:
    "border border-white/25 bg-transparent text-offwhite hover:border-offwhite hover:bg-offwhite hover:text-black",
  outlineDark:
    "border border-black/20 bg-transparent text-black hover:bg-black hover:text-offwhite",
  ghost: "bg-transparent text-offwhite hover:text-lime",
  whatsapp: "bg-whatsapp text-white hover:bg-[#1ebe5d]",
} as const;

type Variant = keyof typeof variants;

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function PillButton({
  children,
  className,
  variant = "light",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition duration-200 hover:scale-[1.02]",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return (
        <a
          href={href}
          className={classes}
          {...(external || href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
