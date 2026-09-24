/**
 * Query keys are not globally declared in this file, 
 * instead they are native to its feature directory. 
*/

export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    currentUser: () => [...queryKeys.auth.all, "current-user"] as const,
  },

  societies: {
    all: ["societies"] as const,

    detail: (societyId: string) =>
      [...queryKeys.societies.all, "detail", societyId] as const,

    members: (societyId: string) =>
      [...queryKeys.societies.all, "members", societyId] as const,
  },
} as const;