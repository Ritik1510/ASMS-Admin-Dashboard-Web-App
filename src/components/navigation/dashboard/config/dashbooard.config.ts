import {
  Building2,
  Building2Icon,
  FileStack,
  Flag,
  Home,
  ListTodo,
  Rows2,
  UsersRound
} from "lucide-react";
import { SidebarGroupConfig, SidebarHeaderConfig } from "../types/dashboardNavigation.type";

export const getDashboardSidebarHeaderConfig = (username: string): SidebarHeaderConfig => ({
  id: "header",
  icon: Building2Icon, // <--- icon of this project
  label: "AxSMS",
  username: username, // Dynamic value
  href: "#",
});

export const dashboardSidebar_groupConfig: SidebarGroupConfig[] = [
  {
    id: "overview",
    icon: Building2,
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
    icon: ListTodo,
    href: "/apartments"
  },
  {
    id: "complaints",
    label: "Complaints",
    icon: ListTodo,
    href: "/complaints"
  },
  {
    id: "notices",
    icon: Flag,
    label: "Notices",
    href: "/notices"
  },
  {
    id: "visitors",
    icon: FileStack,
    label: "Visitors",
    href: "/visitors"
  },
]