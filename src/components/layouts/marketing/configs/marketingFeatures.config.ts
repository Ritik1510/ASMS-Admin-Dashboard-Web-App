import {
  Bell,
  Building2,
  ClipboardList,
  ShieldCheck,
} from "lucide-react"

export const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Visitor Management",
    description:
      "Guards can register visitors at the gate while residents receive approval requests and respond without relying on phone calls.",
    className: "lg:col-span-2",
  },
  {
    icon: ClipboardList,
    title: "Complaint Management",
    description:
      "Give residents a clear way to raise complaints and give admins a structured place to manage them.",
    className: "lg:col-span-1",
  },
  {
    icon: Building2,
    title: "Residents & Apartments",
    description:
      "Keep society apartments and resident accounts organized under one central system.",
    className: "lg:col-span-1",
  },
  {
    icon: Bell,
    title: "Society Notices",
    description:
      "Publish important announcements in one place so residents can find the information that matters.",
    className: "lg:col-span-2",
  },
] as const