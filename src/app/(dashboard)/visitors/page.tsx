import { FeatureDevelopmentCard } from '@/components/Development-and-Maintenance/featureDevelopmentCard.component'
import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'
import React from 'react'

export default function visitors() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.visitors} />
      <FeatureDevelopmentCard title="Visitors" />
    </div>
  )
}
