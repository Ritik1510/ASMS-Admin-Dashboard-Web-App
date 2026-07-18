import Link from 'next/link'
import { MARKETING_ROUTES } from '@/components/navigation/dashboard/routes/marketing/marketing.routes'
import MarketingAbout from './about/page'
import MarketingPricing from './pricing/page'
import MarketingFeatures from './features/page'
import MarketingContact from './contact/page'

export default function PublicHomePage() {
  return (
    <div>
      <section className='flex min-h-[calc(100vh-8rem)] items-center justify-center bg-gradient-to-br from-violet-50 via-white to-zinc-100 px-6 py-16'>
        <div className='max-w-3xl text-center'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600'>ASMS Admin Panel</p>
          <h1 className='text-4xl font-semibold tracking-tight sm:text-6xl'>Marketing first, product ready when you sign in.</h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg'>Visitors see the public experience by default, while authenticated users enter the dashboard with a dedicated product layout.</p>
          
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <Link href={MARKETING_ROUTES.AUTH.SIGN_IN} className='rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium transition hover:bg-zinc-800'>Sign in</Link>
            <Link href={MARKETING_ROUTES.AUTH.SIGN_UP} className='rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-zinc-400 hover:bg-white'>Create account</Link>
          </div>
        </div>
      </section>
      <section id={MARKETING_ROUTES.ABOUT.ANCHOR} className='h-[85vh] w-screen'>
        <MarketingAbout />
      </section>
      <section id={MARKETING_ROUTES.PRICING.ANCHOR} className='h-[85vh] w-screen'>
        <MarketingPricing />
      </section>
      <section id={MARKETING_ROUTES.FEATURES.ANCHOR} className='h-[85vh] w-screen'>
        <MarketingFeatures />
      </section>
      <section id={MARKETING_ROUTES.CONTACT.ANCHOR} className='h-[85vh] w-screen'>
        <MarketingContact />
      </section>
    </div>
  )
}
