import Link from 'next/link'
import { ClerkFailed, ClerkLoaded, ClerkLoading, Show } from '@clerk/nextjs'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import { Spinner } from '@/components/ui/spinner'

export function HeroAuthActions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <ClerkLoading>
        <div
          role="status"
          aria-live="polite"
        >
          <div className="flex" aria-hidden="true">
            <div className="h-11 p-2 w-auto rounded-full bg-brand-300 flex items-center justify-center gap-1">
              <Spinner />
              <p className="text-xs font-bold"><span className='animate-pulse'>Preparing Access Options…</span></p>
            </div>
          </div>
        </div>
      </ClerkLoading>

      <ClerkFailed>
        <p role="alert" className="text-[0.65rem] md:text-xs text-muted-foreground">
          Sign-in is unavailable right now. Check your connection or disable
          content blockers, then refresh the page.
        </p>
      </ClerkFailed>

      <ClerkLoaded>
        <Show
          when="signed-out"
          fallback={
            <Link
              href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
              className="inline-flex items-center gap-2 rounded-full border border-brand-900 px-6 py-3 text-sm font-medium transition hover:bg-brand-300"
            >
              Go to dashboard
            </Link>
          }
        >
          <Link
            href={MARKETING_ROUTES.AUTH.SIGN_IN}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:border-[0.654px] hover:border-brand-900 hover:bg-brand-300"
          >
            Sign in
          </Link>

          <Link
            href={MARKETING_ROUTES.AUTH.SIGN_UP}
            className="inline-flex items-center gap-2 rounded-full border border-brand-900 px-6 py-3 text-sm font-medium transition hover:bg-brand-300"
          >
            Create account
          </Link>
        </Show>
      </ClerkLoaded>
    </div>
  )
}