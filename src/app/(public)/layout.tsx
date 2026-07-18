import MarketingFooter from '@/components/layouts/marketing/footer.layout'
import MarketingHeader from '@/components/layouts/marketing/header.layout'
import React from 'react'

export default function MarketingLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <div className='font-marketing grid'>
      <MarketingHeader />
      <main className='grid'>{children}</main>
      <MarketingFooter />
    </div>
  )
}
