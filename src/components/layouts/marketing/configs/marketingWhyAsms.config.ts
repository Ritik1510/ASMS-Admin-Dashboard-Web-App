import { AlertCircle, Bell, ClipboardList, Users } from "lucide-react"


export const PROBLEMS = [
  {
    icon: Users,
    title: "Visitor management",
    description:
      "Visitor approvals shouldn't depend on calls, messages, or paper registers.",
  },
  {
    icon: ClipboardList,
    title: "Complaints & requests",
    description:
      "Residents need a clear way to raise issues and admins need a reliable way to manage them.",
  },
  {
    icon: Bell,
    title: "Important notices",
    description:
      "Society announcements should reach residents without getting buried in everyday conversations.",
  },
  {
    icon: AlertCircle,
    title: "Scattered information",
    description:
      "When society operations live across different tools, important details become difficult to track.",
  },
] as const