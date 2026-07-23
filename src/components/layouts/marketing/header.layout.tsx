"use client"
import MarketingHeaderNavigation from '@/components/navigation/marketing/navigation/marketing.navigation'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import { buttonVariants } from '@/components/ui/button'
import { Show, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function MarketingHeader() {
  return (
    <header className="flex justify-around items-center p-4 gap-4 h-16">
      <div className="logo">
        <h1>
          ASMS
        </h1>
      </div>
      <MarketingHeaderNavigation />
      <div className="auth-btn-container flex justify-center items-center gap-2.5">
        <Show when="signed-out">
          <Link
            href={MARKETING_ROUTES.AUTH.SIGN_IN}
            className={buttonVariants({ variant: "outline", size: "default" })}
            replace
          >
            Sign-In
          </Link>
          <Link
            href={MARKETING_ROUTES.AUTH.SIGN_UP}
            className={buttonVariants({ variant: "outline", size: "default" }) }
            replace
          >
            Sign-Up
          </Link>
        </Show>
        <Show when="signed-in">
          <Link
            href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
            target='_blank'
            className={buttonVariants({ variant: "outline", size: "default" }) }
            replace
          >
            dashboard
          </Link>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}

export default MarketingHeader