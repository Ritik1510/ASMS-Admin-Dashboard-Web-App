import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MARKETING_ROUTES } from "@/components/navigation/dashboard/routes/marketing/marketing.routes"

export default function MarketingEarlyAccess() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            Early access
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ready to bring your society onto Gate-G?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            We&apos;re working with a limited number of societies during the
            early stage of Gate-G. Join us, try the platform, and help shape
            what we build next.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={MARKETING_ROUTES.AUTH.SIGN_UP}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-zinc-400 hover:bg-brand-300"
            >
              Get early access
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}