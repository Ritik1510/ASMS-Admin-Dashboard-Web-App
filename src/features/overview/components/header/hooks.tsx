"use client";

import { useCurrentUserQuery } from "@/features/users/hooks/use-current-user";
import type { OverviewHeaderData } from "./types";

export function useOverviewHeader(): OverviewHeaderData {
  const { data, isPending } = useCurrentUserQuery();

  return {
    administratorName: data?.user.fullName?.trim() || null,
    isPending,
    societyName: data?.scope.society.name?.trim() || null,
  };
}
