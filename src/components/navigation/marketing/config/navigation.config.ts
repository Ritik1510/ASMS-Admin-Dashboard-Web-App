import { MARKETING_ROUTES } from "@/components/navigation/dashboard/routes/marketing/marketing.routes";
import { NavigationItem } from "../types/types";

export const navigation: NavigationItem[] = [
  {
    id: "why-asms",
    label: "Why ASMS",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.WHY_ASMS}`,
  },
  {
    id: "how-it-works",
    label: "How It Works",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.HOW_IT_WORKS}`,
  },
  {
    id: "features",
    label: "Features",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.FEATURES}`,
  },
  {
    id: "for-everyone",
    label: "For Everyone",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.FOR_EVERYONE}`,
  },
  {
    id: "pricing",
    label: "Pricing",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.PRICING}`,
  },
  {
    id: "early-access",
    label: "Early Access",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.EARLY_ACCESS}`,
  },
]