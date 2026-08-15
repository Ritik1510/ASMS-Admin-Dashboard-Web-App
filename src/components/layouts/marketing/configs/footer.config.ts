import { MARKETING_ROUTES } from "@/components/navigation/dashboard/routes/marketing/marketing.routes"

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: `#${MARKETING_ROUTES.SECTIONS.FEATURES}`,
      },
      {
        label: "Pricing",
        href: `#${MARKETING_ROUTES.SECTIONS.PRICING}`,
      },
      {
        label: "Early Access",
        href: `#${MARKETING_ROUTES.SECTIONS.EARLY_ACCESS}`,
      },
    ],
  },
  {
    title: "Platform",
    links: [
      {
        label: "For Admins",
        href: `#${MARKETING_ROUTES.SECTIONS.HOW_IT_WORKS}`,
      },
      {
        label: "For Guards",
        href: `#${MARKETING_ROUTES.SECTIONS.HOW_IT_WORKS}`,
      },
      {
        label: "For Residents",
        href: `#${MARKETING_ROUTES.SECTIONS.HOW_IT_WORKS}`,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Why ASMS",
        href: `#${MARKETING_ROUTES.SECTIONS.WHY_ASMS}`,
      },
      {
        label: "For Everyone",
        href: `#${MARKETING_ROUTES.SECTIONS.FOR_EVERYONE}`,
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        label: "Sign in",
        href: MARKETING_ROUTES.AUTH.SIGN_IN,
      },
      {
        label: "Create account",
        href: MARKETING_ROUTES.AUTH.SIGN_UP,
      },
      {
        label: "Dashboard",
        href: MARKETING_ROUTES.PRODUCT.DASHBOARD,
      },
    ],
  },
] as const