import React from 'react'

export default function dashboardLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <div>
      {children}
    </div>
  )
}
