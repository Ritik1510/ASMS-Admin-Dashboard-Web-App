import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface FeatureDevelopmentCardProps {
  title: string
  description?: string
}

export function FeatureDevelopmentCard({
  title,
  description,
}: FeatureDevelopmentCardProps) {
  return (
    <Card className="mt-6 overflow-hidden border-border/70 shadow-sm">
      <CardContent className="flex min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-muted">
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
            {description ??
              `We’re actively working on the ${title.toLowerCase()} module and
              refining it as part of the ASMS MVP.`}
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Thank you for visiting ASMS and taking the time to explore the
            platform. We’re building this product step by step, and this
            section will become available as development progresses.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <ArrowLeft className="size-4" />
          Back to Public Page
        </Link>
      </CardContent>
    </Card>
  )
}