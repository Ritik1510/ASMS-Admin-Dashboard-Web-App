"use client"
import MarketingHeaderNavigation from '@/components/navigation/marketing/navigation/marketing.navigation'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import { buttonVariants } from '@/components/ui/button'
import { Show, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

function MarketingHeader() {
  return (
    <header className="flex justify-end items-center md:p-2 lg:p-3 gap-4 h-16 sticky top-0">
      <div className="h-full w-15 absolute top-0 md:left-3 lg:left-4">
        <Link href="/" className="logo w-full h-full absolute top-0 left-0">
          <Image
            src="/logo.png"
            alt="ASMS"
            width={50}
            height={50}
            priority
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2.5">
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
              className={buttonVariants({ variant: "outline", size: "default" })}
              replace
            >
              Sign-Up
            </Link>
          </Show>
          <Show when="signed-in">
            <Link
              href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
              target='_blank'
              className={buttonVariants({ variant: "outline", size: "default" })}
              replace
            >
              dashboard
            </Link>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  )
}

export default MarketingHeader