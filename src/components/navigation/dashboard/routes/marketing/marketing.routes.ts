export const MARKETING_ROUTES = {
  HOME: {
    ROOT: "/",
  },

  // In-page anchor IDs (single-page scroll on homepage)
  // Use as: href={`#${MARKETING_ROUTES.SECTIONS.FEATURES}`} or id={MARKETING_ROUTES.SECTIONS.FEATURES}
  SECTIONS: {
    PRODUCTS: "products",
    FEATURES: "features",
    PRICING: "pricing",
    FAQ: "faq",
    ABOUT: "about",
    CONTACT: "contact",
  },

  ABOUT: {
    PAGE: "/about",
    ANCHOR: "about",
  },

  FEATURES: {
    PAGE: "/features",
    ANCHOR: "features",
  },

  PRICING: {
    PAGE: "/pricing",
    ANCHOR: "pricing",
  },

  CONTACT: {
    PAGE: "/contact",
    ANCHOR: "contact",
  },

  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
  },

  PRODUCT: {
    DASHBOARD: "/dashboard",
  },
} as const;
