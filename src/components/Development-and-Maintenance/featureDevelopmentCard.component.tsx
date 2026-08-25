'use client'

import Link from 'next/link'
import { ArrowLeft, Construction, ExternalLink } from 'lucide-react'

interface FeatureDevelopmentCardProps {
  title: string
  description?: string
}

function DeveloperAccess() {
  return (
    <div className="mt-8 w-full max-w-2xl rounded-xl border border-border/70 bg-muted/30 p-5 text-left sm:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
          <ExternalLink className="size-4 text-muted-foreground" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Developer access
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            If you&apos;re a developer or software engineer, you can explore
            Gate-G through its APIs while the platform is under development.
            The current MVP exposes authenticated endpoints for testing the
            core society-management flow.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            1. Get an access token
          </p>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Use our test frontend to obtain a temporary Clerk access token from browser developer console tool.
            This token is required when calling authenticated API endpoints.
          </p>

          <Link
            href="https://public-fe-me.vercel.app"
            target="_blank"
            className="mt-2 inline-flex text-sm font-medium text-red-600 hover:underline"
          >
            Open the test frontend
          </Link>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            2. Create a society
          </p>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Start with the society bootstrap endpoint. The authenticated
            caller becomes the first administrator of the newly created
            society.
          </p>

          <div className="mt-2 overflow-x-auto rounded-md border border-border bg-background px-3 py-2">
            <code className="text-xs text-foreground">
              POST /api/v1/societies/bootstrap
            </code>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            3. Verify your society context
          </p>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            After authentication or society creation, you can inspect the
            current user, role, society, and apartment scope through the
            current-user endpoint.
          </p>

          <div className="mt-2 overflow-x-auto rounded-md border border-border bg-background px-3 py-2">
            <code className="text-xs text-foreground">
              GET /api/v1/users/me
            </code>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-sm leading-6 text-muted-foreground">
            You can continue exploring implemented endpoints for apartments,
            visitors, complaints, and notices. For the complete API inventory,
            implementation status, and backend details, see the project
            documentation.
          </p>

          <Link
            href="https://github.com/moder-emissary-org/be-me"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:underline"
          >
            View backend README
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FeatureDevelopmentCard({
  title,
  description,
}: FeatureDevelopmentCardProps) {
  return (
    <div className="mt-6 overflow-hidden border border-border/70 bg-muted/30">
      <div className="flex min-h-105 flex-col items-center justify-center text-center p-3">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-brand-300">
          <Construction className="size-6 text-muted-foreground" />
        </div>

        <div className="mt-6 max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">
            Currently under development
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {title} is being built
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {description ?? (
              <>
                We're actively working on the{" "}
                <span className="font-semibold text-brand-900"> {/* Change text-blue-500 to your preferred color */}
                  {title.toLowerCase()}
                </span>{" "}
                module and refining it as part of the Gate-G MVP.
              </>
            )}
          </p>


          <DeveloperAccess />

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Thank you for visiting Gate-G and taking the time to explore the
            platform. We&apos;re building this product step by step, and this
            section will become available as development progresses.
          </p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-300"
        >
          <ArrowLeft className="size-4" />
          Back to Public Page
        </Link>
      </div>
    </div>
  )
}