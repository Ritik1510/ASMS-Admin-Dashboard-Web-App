import React from 'react'

export default function authLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <div>
      {children}
    </div>
  )
}
