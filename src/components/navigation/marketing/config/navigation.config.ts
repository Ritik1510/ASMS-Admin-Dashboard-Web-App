import { MARKETING_ROUTES } from "@/components/navigation/dashboard/routes/marketing/marketing.routes";
import { NavigationItem } from "../types/types";

export const navigation: NavigationItem[]= [
  {
    id: "products",
    label: "Products",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.PRODUCTS}`,
  },
  {
    id: "features",
    label: "Features",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.FEATURES}`,
  },
  {
    id: "pricing",
    label: "Pricing",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.PRICING}`,
  },
  {
    id: "faq",
    label: "FAQ",
    type: "section",
    href: `#${MARKETING_ROUTES.SECTIONS.FAQ}`,
  },
]