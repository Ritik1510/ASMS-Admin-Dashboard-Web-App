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
import { DASHBOARD_ROUTES } from "../routes/dashboard/dashboard.routes";
import { Logo } from "@/components/ui/customs/project-logo-provider";

export const getDashboardSidebarHeaderConfig = (username: string): SidebarHeaderConfig => ({
  id: "header",
  icon: Logo, // <--- icon of this project
  label: "Gate-G",
  username: username, // Dynamic value
  href: "#",
});

export const dashboardSidebar_groupConfig: SidebarGroupConfig[] = [
  {
    id: "overview",
    icon: LayoutDashboard,
    label: "Overview",
    href: DASHBOARD_ROUTES.DASHBOARD.HOME
  },
  {
    id: "users",
    label: "Users",
    icon: UsersRound,
    href: DASHBOARD_ROUTES.USERS.LIST,
    items: [
      {
        id: "all",
        title: "All",
        icon: Rows2,
        href: DASHBOARD_ROUTES.USERS.LIST,
      },
      {
        id: "invitation",
        title: "Invitation",
        icon: Rows2,
        href: DASHBOARD_ROUTES.USERS.INVITE,
      }
    ]
  },
  {
    id: "apartments",
    label: "Apartments",
    icon: Building2,
    href: DASHBOARD_ROUTES.APARTMENTS.LIST
  },
  {
    id: "complaints",
    label: "Complaints",
    icon: FileWarning,
    href: DASHBOARD_ROUTES.COMPLAINTS.LIST
  },
  {
    id: "notices",
    icon: Megaphone,
    label: "Notices",
    href: DASHBOARD_ROUTES.NOTICES.LIST
  },
  {
    id: "visitors",
    icon: IdCard,
    label: "Visitors",
    href: DASHBOARD_ROUTES.VISITORS.LIST
  },
]
