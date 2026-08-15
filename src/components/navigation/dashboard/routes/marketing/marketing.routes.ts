export const MARKETING_ROUTES = {
  HOME: {
    ROOT: "/",
  },

  // Single-page marketing sections
  // Use as: href={`#${MARKETING_ROUTES.SECTIONS.FEATURES}`} or id={MARKETING_ROUTES.SECTIONS.FEATURES}
  SECTIONS: {
    WHY_ASMS: "why-asms",
    HOW_IT_WORKS: "how-it-works",
    FEATURES: "features",
    FOR_EVERYONE: "for-everyone",
    PRICING: "pricing",
    EARLY_ACCESS: "early-access",
  },

  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
  },

  PRODUCT: {
    DASHBOARD: "/dashboard",
  },
} as const;
