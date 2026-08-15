"use client"

import { useEffect, useState } from "react"
import MarketingHeaderNavigation from '@/components/navigation/marketing/navigation/marketing.navigation'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import { buttonVariants } from '@/components/ui/button'
import { Show, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        sticky top-2 z-20 mx-1.5 h-16
        flex items-center justify-end flex-wrap
        px-2 gap-3
        transition-all duration-300 ease-out

        rounded-lg

        md:p-2
        lg:p-3

        ${isScrolled
          ? "border-b border-black/5 bg-brand-300/70 shadow-sm backdrop-blur-sm backdrop-saturate-150 dark:border-white/10 dark:bg-black/50"
          : "bg-transparent"
        }
      `}
    >
      <div className="absolute left-2 top-0 h-full w-15 md:left-3 lg:left-4 ml-auto">
        <Link
          href="/"
          className="absolute left-0 top-0 h-full w-full"
        >
          <Image
            src="/logo.png"
            alt="ASMS"
            width={50}
            height={50}
            priority
            className="h-full w-full object-contain"
          />
        </Link>
      </div>

        <div className="marketing-header-navigation-container order-last basis-full lg:order-0 lg:basis-auto">
          <MarketingHeaderNavigation />
        </div>
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5">

        <div className="auth-btn-container flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5">
          <Show when="signed-out">
            <Link
              href={MARKETING_ROUTES.AUTH.SIGN_IN}
              className={buttonVariants({
                variant: "outline",
                size: "default",
              }) + " text-[11px] sm:text-xs md:text-sm lg:text-sm"}
              replace
            >
              Sign-In
            </Link>

            <Link
              href={MARKETING_ROUTES.AUTH.SIGN_UP}
              className={buttonVariants({
                variant: "outline",
                size: "default",
              }) + " text-[11px] sm:text-xs md:text-sm lg:text-sm"}
              replace
            >
              Sign-Up
            </Link>
          </Show>

          <Show when="signed-in">
            <Link
              href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                size: "default",
              }) + " text-[11px] sm:text-xs md:text-sm lg:text-sm"}
              replace
            >
              Dashboard
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