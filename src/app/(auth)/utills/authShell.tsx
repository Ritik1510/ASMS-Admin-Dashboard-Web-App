import type { ReactNode } from 'react'
import { ClerkLoaded, ClerkLoading, ClerkFailed } from '@clerk/nextjs'
import { Spinner } from '@/components/ui/spinner'

interface AuthShellProps {
  title: string
  description: string
  children: ReactNode
}

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <div className="grid w-auto items-center justify-center gap-4 font-marketing!">
      <ClerkLoading>
        <div className="flex items-center justify-center py-4">
          <Spinner />
          <span className="ml-2 text-sm font-bold animate-pulse">Loading form...</span>
        </div>
      </ClerkLoading>

      <ClerkFailed>
        <div role="alert" className="grid justify-items-center gap-2 py-4 text-center">
          <p className="text-sm font-semibold">We couldn&apos;t load the sign-in form.</p>
          <p className="text-sm">
            Check your connection or disable any content blockers, then try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-2 rounded-md px-4 py-2 text-sm text-white"
            style={{ backgroundColor: 'var(--c-brand-900)' }}
          >
            Reload page
          </button>
        </div>
      </ClerkFailed>

      <ClerkLoaded>
        <div className="grid gap-0">
          <h1 className="mx-auto text-xl font-semibold">{title}</h1>
          <p className="mx-auto text-sm">{description}</p>
        </div>
        {children}
      </ClerkLoaded>
    </div>
  )
}