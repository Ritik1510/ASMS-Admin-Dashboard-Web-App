import {
  Building2,
  ShieldCheck,
  UserRound,
} from "lucide-react"

export const USERS = [
  {
    icon: Building2,
    role: "For administrators",
    title: "Stay in control of the society",
    description:
      "Manage residents, apartments, complaints, notices, and the operational information your society depends on.",
  },
  {
    icon: ShieldCheck,
    role: "For security guards",
    title: "Keep the gate moving",
    description:
      "Register visitors, request resident approvals, and keep visitor activity organized without relying on manual registers.",
  },
  {
    icon: UserRound,
    role: "For residents",
    title: "Stay informed and involved",
    description:
      "Respond to visitor requests, receive important society notices, and raise complaints when something needs attention.",
  },
] as const