import React from 'react'

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 px-1.5 py-12'>
      <div className='w-full max-w-md rounded-2xl border border-zinc-200 bg-white px-1.5 py-4 shadow-sm'>
        {children}
      </div>
    </div>
  )
}
