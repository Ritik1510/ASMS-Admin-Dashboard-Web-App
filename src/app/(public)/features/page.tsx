import { FEATURES } from "@/components/layouts/marketing/configs/marketingFeatures.config"

export default function MarketingFeatures() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            Built for society operations
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The everyday tools your society actually needs.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            ASMS brings the core operations of a residential society into one
            connected platform, without adding unnecessary complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className={`group rounded-3xl border bg-card p-7 transition-colors ${feature.className}`}
                style={{borderColor: 'var(--c-brand-300)'}}
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
                  <Icon className="size-5" style={{color: 'var(--c-brand-500)'}} />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-card-foreground">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-tight text-foreground sm:text-2xl">
            Start with the operations that matter most. Expand as your
            society&apos;s needs grow.
          </p>
        </div>
      </div>
    </section>
  )
}