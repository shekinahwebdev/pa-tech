import {
  BadgeCheck,
  Briefcase,
  Building2,
  Cable,
  Church,
  Cctv,
  Clock3,
  GraduationCap,
  Headset,
  Home,
  Landmark,
  Monitor,
  Shield,
  Tractor,
  Users,
  Wallet,
  Wifi,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  wifi: Wifi,
  cctv: Cctv,
  cable: Cable,
  monitor: Monitor,
  shield: Shield,
  headset: Headset,
};

export const benefitIcons = {
  wrench: Wrench,
  wallet: Wallet,
  buildings: Building2,
  clock: Clock3,
  badge: BadgeCheck,
  users: Users,
} as const;

export const industryIcons = {
  home: Home,
  briefcase: Briefcase,
  school: GraduationCap,
  campus: Landmark,
  farm: Tractor,
  church: Church,
  ngo: Users,
  office: Building2,
} as const;
