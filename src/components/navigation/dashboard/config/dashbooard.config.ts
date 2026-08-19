import {
  Building2,
  FileWarning,
  IdCard,
  LayoutDashboard,
  Megaphone,
  Rows2,
  UsersRound
} from "lucide-react";

import { SidebarGroupConfig, SidebarHeaderConfig } from "../types/dashboardNavigation.type";
import { Logo } from "@/components/ui/customs/project-logo-provider";

export const getDashboardSidebarHeaderConfig = (username: string): SidebarHeaderConfig => ({
  id: "header",
  icon: Logo, // <--- icon of this project
  label: "AxSMS",
  username: username, // Dynamic value
  href: "#",
});

export const dashboardSidebar_groupConfig: SidebarGroupConfig[] = [
  {
    id: "overview",
    icon: LayoutDashboard,
    label: "Overview",
    href: "/overview"
  },
  {
    id: "users",
    label: "Users",
    icon: UsersRound,
    href: "/users",
    items: [
      {
        id: "all",
        title: "All",
        icon: Rows2,
        href: "/Users",
      },
      {
        id: "invitation",
        title: "Invitation",
        icon: Rows2,
        href: "/invitation",
      }
    ]
  },
  {
    id: "apartments",
    label: "Apartments",
    icon: Building2,
    href: "/apartments"
  },
  {
    id: "complaints",
    label: "Complaints",
    icon: FileWarning,
    href: "/complaints"
  },
  {
    id: "notices",
    icon: Megaphone,
    label: "Notices",
    href: "/notices"
  },
  {
    id: "visitors",
    icon: IdCard,
    label: "Visitors",
    href: "/visitors"
  },
]