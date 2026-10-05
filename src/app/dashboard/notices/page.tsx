import { FeatureDevelopmentCard } from '@/components/Development-and-Maintenance/featureDevelopmentCard.component'
import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

export default function notices() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.notice} /> 
      <FeatureDevelopmentCard title="Notices" />
    </div>
  )
}
