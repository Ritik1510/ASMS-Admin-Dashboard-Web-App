import AppSidebar from '@/components/layouts/dashboard/sidebar/appSidebar.layout'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <SidebarProvider>
      <div className='font-product flex min-h-screen w-full'>
        <AppSidebar />
        <SidebarTrigger />
        <main className='flex-1 overflow-y-auto p-1 md:p-1.5 lg:p-2'>
          <div>
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
