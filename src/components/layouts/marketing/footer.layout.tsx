import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { FOOTER_GROUPS } from './configs/footer.config'

function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.5fr_3fr] lg:gap-16 lg:px-10 lg:py-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center text-lg font-semibold tracking-tight text-foreground"
            >
              ASMS
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A connected management platform for residential societies,
              bringing admins, guards, and residents into one system.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
            >
              Back to top
              <ArrowUp className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border">
          <div className="flex flex-col gap-4 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} thinkWithLimits.com All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms
              </Link>

              <Link
                href="https://github.com/moder-emissary-org"
                target="_blank"
                rel="noreferrer"
                aria-label="ASMS GitHub"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MarketingFooter