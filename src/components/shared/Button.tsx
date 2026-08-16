import { PillButton } from "@/components/ui/PillButton";

type LegacyVariant =
  | "primary"
  | "secondary"
  | "light"
  | "dark"
  | "outline"
  | "outlineDark"
  | "ghost"
  | "whatsapp";

const map: Record<LegacyVariant, "light" | "dark" | "outline" | "outlineDark" | "ghost" | "whatsapp"> = {
  primary: "light",
  secondary: "dark",
  light: "light",
  dark: "dark",
  outline: "outline",
  outlineDark: "outlineDark",
  ghost: "ghost",
  whatsapp: "whatsapp",
};

type Props = Omit<React.ComponentProps<typeof PillButton>, "variant"> & {
  variant?: LegacyVariant;
};

export function Button({ variant = "light", ...props }: Props) {
  return <PillButton variant={map[variant]} {...props} />;
}
