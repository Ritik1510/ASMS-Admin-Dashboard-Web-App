export const usersQueryKeys = {
    all: ["users"] as const,

    current: () =>
      [...usersQueryKeys.all, "current"] as const,

    detail: (userId: string) =>
      [...usersQueryKeys.all, "detail", userId] as const,

    byApartment: (apartmentId: string) =>
      [...usersQueryKeys.all, "by-apartment", apartmentId] as const,
  }