"use client"

import Link from "next/link"
import { useAuth, UserButton, ClerkLoading, ClerkLoaded, ClerkFailed } from "@clerk/nextjs"
import { buttonVariants } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { MARKETING_ROUTES } from "@/components/navigation/dashboard/routes/marketing/marketing.routes"

const authLinkClass = "rounded-full px-4 py-2 text-sm font-medium transition hover:border-[0.654px] inline-flex items-center gap-2 hover:border-brand-900 hover:bg-brand-300"

const containerClass =
  "flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5"

/** Only mounted inside <ClerkLoaded>, so isLoaded is guaranteed true here. */
function AuthButtosProvider() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return (
      <div>
        <Link href={MARKETING_ROUTES.AUTH.SIGN_IN} className={authLinkClass}>
          Sign-In
        </Link>
        <Link href={MARKETING_ROUTES.AUTH.SIGN_UP} className={authLinkClass}>
          Sign-Up
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
        target="_blank"
        rel="noopener noreferrer"
        className={authLinkClass}
      >
        Dashboard
      </Link>
      <UserButton />
    </div>
  )
}

export function MarketingAuthButtons() {
  return (
    <div className={containerClass}>
      <ClerkLoading>
        <div className="flex items-center justify-center gap-1.5" role="status" aria-live="polite">
          <p className="text-sm md:text-base underline">Auth Loading</p>
          <Spinner />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <AuthButtosProvider />
      </ClerkLoaded>

      {/* Clerk failed to load: never render Dashboard/UserButton here */}
      <ClerkFailed>
        <p className="text-sm text-muted-foreground" role="alert">
          Authentication unavailable
        </p>
      </ClerkFailed>
    </div>
  )
}