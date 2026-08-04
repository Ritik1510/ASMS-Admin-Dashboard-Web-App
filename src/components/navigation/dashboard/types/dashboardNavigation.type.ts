import { LucideIcon } from "lucide-react";

export interface SidebarHeaderConfig {
  id: string;
  icon: LucideIcon;
  label: string;
  username: string; 
  href: "#"
}

export interface SidebarGroupConfig {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
  items?: SidebarGroupItemConfig[];
}

export interface SidebarGroupItemConfig {
  id: string;
  title: string;
  icon: LucideIcon;
  href: string;
  children?: SidebarGroupItemConfig[];
}

// ------------------------------------------------------ //
// -----------------------tabPages----------------------- //
// ------------------------------------------------------ //

export interface HeaderTag {
  icon?: LucideIcon;
  label: string;
  badge?: string;
}