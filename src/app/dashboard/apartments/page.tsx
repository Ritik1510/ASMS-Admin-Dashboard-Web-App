import { FeatureDevelopmentCard } from '@/components/Development-and-Maintenance/featureDevelopmentCard.component'
import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

function ApartmentsPage() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.apartment} /> 
      <FeatureDevelopmentCard title="Apartments" />
    </div>
  )
}

export default ApartmentsPage