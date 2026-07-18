const API_V1 = "/api/v1";

export const DASHBOARD_ROUTES = {
  DASHBOARD: {
    HOME: "/dashboard",
    TAB: "/dashboard",
  },

  HEALTH: {
    // API
    CHECK: `${API_V1}/healthcheck`,
  },

  USERS: {
    TAB: "/users",

    // Pages
    LIST: "/dashboard/users",
    INVITE: "/dashboard/users/invite",
    // DETAILS: (userId: string) => `/dashboard/users/${userId}`,

    // API
    ME: `${API_V1}/users/me`,
    ALL: `${API_V1}/users`,
    INVITE_USER: `${API_V1}/users/invite`,
    DETAILS: (userId: string) => `${API_V1}/users/${userId}`,
    ASSIGN_APARTMENT: (userId: string) =>
      `${API_V1}/users/${userId}/assign-apartment`,
  },

  SOCIETIES: {
    // API
    BOOTSTRAP: `${API_V1}/societies/bootstrap`,
  },

  APARTMENTS: {
    TAB: "/apartments",

    // Pages
    LIST: "/dashboard/apartments",
    CREATE: "/dashboard/apartments/new",
    // DETAILS: (id: string) => `/dashboard/apartments/${id}`,
    // BULK_CREATE: "/dashboard/apartments/bulk-create",

    // API
    ALL: `${API_V1}/apartments/get`,
    CREATE_APARTMENT: `${API_V1}/apartments/create`,
    BULK_CREATE: `${API_V1}/apartments/bulk-create`,
    UPDATE: `${API_V1}/apartments/update`,
    DELETE: `${API_V1}/apartments/delete`,
  },

  VISITORS: {
    TAB: "/visitors",

    // Pages
    LIST: "/dashboard/visitors",
    PENDING: "/dashboard/visitors/pending",

    // API
    ALL: `${API_V1}/visitors/visitors`,
    CREATE: `${API_V1}/visitors/create`,
    PENDING_LIST: `${API_V1}/visitors/pending`,
    CHECK_IN: `${API_V1}/visitors/check-in`,
    CHECK_OUT: `${API_V1}/visitors/check-out`,
    UPDATE_APPROVAL: (visitorId: string) =>
      `${API_V1}/visitors/${visitorId}/approval`,
  },

  COMPLAINTS: {
    TAB: "/complaints",

    // Pages
    LIST: "/dashboard/complaints",
    CREATE: "/dashboard/complaints/new",

    // API
    ALL: `${API_V1}/complaints`,
    BY_APARTMENT: `${API_V1}/complaints/by-apartment`,
    CREATE_COMPLAINT: `${API_V1}/complaints/create`,
    UPDATE_STATUS: (complaintId: string) =>
      `${API_V1}/complaints/${complaintId}/status`,
    DELETE: (id: string) => `${API_V1}/complaints/${id}/delete`,
  },

  NOTICES: {
    TAB: "/notices",

    // Pages
    LIST: "/dashboard/notices",
    CREATE: "/dashboard/notices/new",

    // API
    ALL: `${API_V1}/notices/get`,
    CREATE_NOTICE: `${API_V1}/notices/create`,
    UPDATE: `${API_V1}/notices/update`,
    DELETE: `${API_V1}/notices/delete`,
  },
} as const;
