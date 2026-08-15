import { Building2, ShieldCheck, UserRound } from "lucide-react"

export const ROLES = [
  {
    icon: Building2,
    role: "Admin",
    title: "Run the society",
    description:
      "Manage residents, apartments, notices, complaints, and the day-to-day operations of the community.",
  },
  {
    icon: ShieldCheck,
    role: "Guard",
    title: "Manage the gate",
    description:
      "Handle visitors at the entrance and coordinate approvals with residents in real time.",
  },
  {
    icon: UserRound,
    role: "Resident",
    title: "Stay connected",
    description:
      "Receive important updates, respond to visitor requests, and raise issues with the society.",
  },
] as const