import Link from 'next/link'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import MarketingWhyAsms from './about/page'
import MarketingHowItWorks from './how-it-works/page'
import MarketingFeatures from './features/page'
import MarketingForEveryone from './marketing-for-everyone/page'
import MarketingPricing from './pricing/page'
import MarketingEarlyAccess from './early-access/page'
import { Show } from '@clerk/nextjs'

export default function PublicHomePage() {
  return (
    <div className='relative'>
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-linear-to-br from-violet-50 via-white to-zinc-100 px-6 py-16">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[0.3em] text-brand-600">
            Gate-G
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Manage your society from one connected system.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Gate-G gives admins, residents, and guards a shared platform to
            manage the everyday operations of a residential society.
          </p>

          <Show when="signed-out">
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={MARKETING_ROUTES.AUTH.SIGN_IN}
                className="rounded-full px-6 py-3 text-sm font-medium transition hover:border-[0.654px] inline-flex items-center gap-2 hover:border-brand-900 hover:bg-brand-300"
              >
                Sign in
              </Link>

              <Link
                href={MARKETING_ROUTES.AUTH.SIGN_UP}
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition border-brand-900 hover:bg-brand-300"
              >
                Create account
              </Link>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="mt-10 flex justify-center">
              <Link
                target="_blank"
                href={MARKETING_ROUTES.PRODUCT.DASHBOARD}
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition border-brand-900 hover:bg-brand-300"
              >
                Dashboard
              </Link>
            </div>
          </Show>
        </div>
      </section>

      {/* Why GATE-G Section */}
      <section id={MARKETING_ROUTES.SECTIONS.WHY_GATE_G}>
        <MarketingWhyAsms />
      </section>

      {/* How It Works Section */}
      <section id={MARKETING_ROUTES.SECTIONS.HOW_IT_WORKS}>
        <MarketingHowItWorks />
      </section>

      {/* Features Section */}
      <section id={MARKETING_ROUTES.SECTIONS.FEATURES}>
        <MarketingFeatures />
      </section>

      {/* For Everyone Section */}
      <section id={MARKETING_ROUTES.SECTIONS.FOR_EVERYONE}>
        <MarketingForEveryone />
      </section>

      {/* Pricing Section */}
      <section id={MARKETING_ROUTES.SECTIONS.PRICING}>
        <MarketingPricing />
      </section>

      {/* Early Access Section */}
      <section id={MARKETING_ROUTES.SECTIONS.EARLY_ACCESS}>
        <MarketingEarlyAccess />
      </section>
    </div>
  )
}
