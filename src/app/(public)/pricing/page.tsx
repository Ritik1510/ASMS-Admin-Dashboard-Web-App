import { Check } from "lucide-react"
import { INCLUDED_FEATURES } from "@/components/layouts/marketing/configs/marketingPricing.config"

export default function MarketingPricing() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Simple pricing for your society.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Start with the tools your society needs today. As Gate-G grows, your
            plan can grow with it.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm sm:p-10" style={{borderColor: 'var(--c-brand-300)'}}>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--c-brand-500)'}}>
                  Early Access
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-card-foreground">
                  Society Plan
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Everything your society needs to start managing its everyday
                  operations through Gate-G.
                </p>
              </div>

              <div className="shrink-0">
                <p className="text-4xl font-semibold tracking-tight text-foreground">
                  Free
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  during early access
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-border" />

            <ul className="grid gap-4 sm:grid-cols-2">
              {INCLUDED_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full" style={{backgroundColor: 'color-mix(in srgb, var(--c-brand-500) 10%, transparent)'}}>
                    <Check className="size-3.5" style={{color: 'var(--c-brand-500)'}} />
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm leading-6 text-muted-foreground">
                We&apos;re currently working with a limited number of societies
                as we build and improve the first version of Gate-G.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}