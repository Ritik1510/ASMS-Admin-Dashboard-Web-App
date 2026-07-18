import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

function ApartmentsPage() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.apartment} /> 
    </div>
  )
}

export default ApartmentsPage