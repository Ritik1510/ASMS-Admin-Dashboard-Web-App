import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className='font-product min-h-screen bg-zinc-50 text-zinc-950'>
      <header className='border-b border-zinc-200 bg-white'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
          <div className='text-lg font-semibold'>ASMS Admin</div>
          <nav className='flex items-center gap-4 text-sm font-medium'>
            <Link href='/dashboard' className='hover:text-violet-600'>Dashboard</Link>
            <Link href='/users' className='hover:text-violet-600'>Users</Link>
          </nav>
          <UserButton />
        </div>
      </header>
      <main className='mx-auto max-w-6xl px-6 py-8'>{children}</main>
    </div>
  )
}
