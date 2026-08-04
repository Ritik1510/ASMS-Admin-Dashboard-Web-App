import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

function dashboard() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.overview} /> 
    </div>
  )
}

export default dashboard