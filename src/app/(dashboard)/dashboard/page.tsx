import { FeatureDevelopmentCard } from '@/components/Development-and-Maintenance/featureDevelopmentCard.component'
import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

function dashboard() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.overview} /> 
      <FeatureDevelopmentCard title="Dashboard Overview" />
    </div>
  )
}

export default dashboard