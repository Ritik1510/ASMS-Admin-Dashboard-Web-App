import { PROBLEMS } from "@/components/layouts/marketing/configs/marketingWhyAsms.config"

function MarketingAbout() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            Why Gate-G
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Society management shouldn&apos;t depend on scattered
            conversations and manual processes.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg capitalize">
            A residential society has dozens of everyday operations happening
            at the same time. Visitors arrive, residents raise complaints,
            admins publish notices, and guards coordinate access. When these
            activities happen across different places, things get missed,
            delayed, or forgotten.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon

            return (
              <div
                key={problem.title}
                className="group rounded-2xl border bg-card p-6 transition-colors"
                style={{
                  borderColor: 'var(--c-brand-300)'
                }}
              >
                <div className="flex size-11 items-center justify-center rounded-xl border bg-muted" style={{borderColor: 'var(--c-brand-300)'}}>
                  <Icon className="size-5" style={{color: 'var(--c-brand-500)'}} />
                </div>

                <h3 className="mt-6 text-base font-semibold text-card-foreground">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-tight text-foreground sm:text-2xl">
            Gate-G brings these everyday operations into one connected system
            for the people who actually run and live in the society.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MarketingAbout