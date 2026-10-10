"use client";

import { Building2, UserRound } from "lucide-react";

import { Surface } from "@/components/ui/customs/dashboard/surface";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { useOverviewHeader } from "./hooks";

export default function OverviewHeader() {
  const { administratorName, isPending, societyName } = useOverviewHeader();

  return (
    <Surface className="mb-4 flex w-full flex-col gap-4 p-3 sm:p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger
          aria-label="Toggle navigation sidebar"
          className="shrink-0 hover:bg-brand-300"
        />

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-300/40 text-brand-700">
            <Building2 aria-hidden="true" className="size-5" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Society
            </p>
            {isPending ? (
              <Skeleton className="mt-1 h-5 w-40 max-w-full" />
            ) : (
              <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
                {societyName ?? "Society name unavailable"}
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="flex min-w-0 items-center gap-3 border-t border-border pt-3 md:border-l md:border-t-0 md:pl-4 md:pt-0">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <UserRound aria-hidden="true" className="size-4" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Administrator
          </p>
          {isPending ? (
            <Skeleton className="mt-1 h-5 w-32 max-w-full" />
          ) : (
            <p className="truncate text-sm font-medium text-foreground">
              {administratorName ?? "Name unavailable"}
            </p>
          )}
        </div>
      </div>
    </Surface>
  );
}
