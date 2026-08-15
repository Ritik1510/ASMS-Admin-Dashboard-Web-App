import { ROLES } from '@/components/layouts/marketing/configs/how-it-works.config'

function howItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            How ASMS works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            One society. Three roles. One connected system.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            ASMS connects the people responsible for running the society with
            the people who live in it.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {ROLES.map((role) => {
            const Icon = role.icon

            return (
              <article
                key={role.role}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted">
                    <Icon className="size-5" style={{color: 'var(--c-brand-500)'}} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{color: 'var(--c-brand-500)'}}>
                      {role.role}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-card-foreground">
                      {role.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  {role.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
          <p className="text-lg font-medium leading-8 tracking-tight text-foreground sm:text-xl">
            From the society office to the entrance gate to the resident&apos;s
            phone, everyone works with the same source of information.
          </p>
        </div>
      </div>
    </section>
  )
}

export default howItWorks