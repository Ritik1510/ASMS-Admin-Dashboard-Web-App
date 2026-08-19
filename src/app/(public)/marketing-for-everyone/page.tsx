import { USERS } from "@/components/layouts/marketing/configs/marketingForEveryone.config"
import {
  Building2,
  ShieldCheck,
  UserRound,
} from "lucide-react"

export default function MarketingForEveryone() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{color: 'var(--c-brand-500)'}}>
            One society, everyone connected
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built for the people who make a society work.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Every role has different responsibilities. Gate-G gives each one the
            right tools while keeping the entire society connected.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {USERS.map((user) => {
            const Icon = user.icon

            return (
              <article
                key={user.role}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted" style={{borderColor: 'var(--c-brand-300)'}}>
                  <Icon className="size-5" style={{color: 'var(--c-brand-500)'}} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-wider" style={{color: 'var(--c-brand-500)'}}>
                  {user.role}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-card-foreground">
                  {user.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {user.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground">
            Admin <span className="mx-2 text-muted-foreground">→</span>
            Society <span className="mx-2 text-muted-foreground">→</span>
            Guard & Resident
          </div>
        </div>
      </div>
    </section>
  )
}