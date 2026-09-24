"use client"

import { useCurrentUserQuery } from "@/features/users/hooks/use-current-user";
import SocietyOnboardingModel from "../society-onboarding-model";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SocietyOnboardingLoader } from "../society-onboarding-loader";

/**
 * Onboarding Auth checks  
*/


function DashboardOnboardingShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const { data, error, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-40 grid 
        place-items-center overflow-y-auto 
        bg-background/80 p-4 backdrop-blur-sm 
        sm:p-6"
      >
        <Spinner />
      </div>
    )
  }

  if (error?.details?.code === "USER_NOT_PROVISIONED") {
    return <SocietyOnboardingLoader />
  }

  if (!data) {
    return <SocietyOnboardingLoader />
  }

  if (data?.authority?.role !== "admin") {
    return <div className="fixed inset-0 z-40 grid 
      place-items-center overflow-y-auto bg-background/80 
      p-4 backdrop-blur-sm sm:p-6">
      <div>
        <div className="flex items-center justify-center">
          <p>You are not a admin</p>
        </div>
        <Link
          href="/"
          className="mt-1 inline-flex items-center gap-2 
          rounded-md border border-border bg-background px-4 
          py-2 text-sm font-medium transition-colors hover:bg-brand-300"
        >
          <ArrowLeft className="size-4" />
          Back to Public Page
        </Link>
      </div>
    </div>
  }

  return <>{children}</>
}

export default DashboardOnboardingShell