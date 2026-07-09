import Link from 'next/link'
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
          <h1 className='text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl'>Marketing first, product ready when you sign in.</h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg text-zinc-600'>Visitors see the public experience by default, while authenticated users enter the dashboard with a dedicated product layout.</p>
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <Link href='/sign-in' className='rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800'>Sign in</Link>
            <Link href='/sign-up' className='rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-white'>Create account</Link>
          </div>
        </div>
      </section>
      <section id='about' className='h-[85vh] w-screen'>
        <MarketingAbout />
      </section>
      <section id='pricing' className='h-[85vh] w-screen'>
        <MarketingPricing />
      </section>
      <section id='features' className='h-[85vh] w-screen'>
        <MarketingFeatures />
      </section>
      <section id='contact' className='h-[85vh] w-screen'>
        <MarketingContact />
      </section>
    </div>
  )
}
