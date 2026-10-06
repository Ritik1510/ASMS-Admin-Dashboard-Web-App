export const societyQueryKeys = {
  all: ["societies"] as const,

  current: () =>
    [...societyQueryKeys.all, "current"] as const,

  detail: (societyId: string) =>
    [...societyQueryKeys.all, "detail", societyId] as const,
} as const;