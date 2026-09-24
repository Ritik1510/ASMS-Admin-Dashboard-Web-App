export const apartmentQueryKeys = {
  all: ["apartments"] as const,

  current: () =>
    [...apartmentQueryKeys.all, "current"] as const,

  detail: (apartmentId: string) =>
    [...apartmentQueryKeys.all, "detail", apartmentId] as const,

  bySociety: (societyId: string) =>
    [...apartmentQueryKeys.all, "by-society", societyId] as const,
} as const;