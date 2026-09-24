export const complaintQueryKeys = {
  all: ["complaints"] as const,

  detail: (complaintId: string) =>
    [...complaintQueryKeys.all, "detail", complaintId] as const,

  byApartment: (apartmentId: string) =>
    [...complaintQueryKeys.all, "by-apartment", apartmentId] as const,
} as const;