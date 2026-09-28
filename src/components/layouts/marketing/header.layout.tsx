"use client"

import { useEffect, useState } from "react"
import MarketingHeaderNavigation from '@/components/navigation/marketing/navigation/marketing.navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MarketingAuthButtons } from "@/components/navigation/marketing/auth/authButtonProvider"

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
        sticky top-3 z-20 min-h-16 
        grid rounded-lg p-1 m-3
        
        transition-all duration-400 ease-out
        
        ${isScrolled
          ? "border-b border-black/5 bg-brand-300/70 shadow-sm backdrop-blur-sm backdrop-saturate-150 dark:border-white/10 dark:bg-black/50"
          : "bg-transparent"
        }
      `}
    >
      <div className="flex justify-between items-center w-full px-2 pt-2">
        <div className="min-h-10">
          <Link
            href="#"
            className="h-full w-full"
          >
            <Image
              src="/logo.png"
              alt="Gate-G"
              width={40}
              height={40}
              priority
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        {/* Auth buttons */}
        <MarketingAuthButtons />
      </div>
      <div className="">
        <MarketingHeaderNavigation />
      </div>

    </header>
  )
}

export default MarketingHeader