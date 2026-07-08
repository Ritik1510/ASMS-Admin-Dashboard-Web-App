import MarketingFooter from '@/components/shared/marketing/footer'
import MarketingHeader from '@/components/shared/marketing/header'
import React from 'react'

export default function MarketingLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <div className='grid'>
      <MarketingHeader />
      <main className='h-screen w-screen'>{children}</main>
      <MarketingFooter />
    </div>
  )
}
