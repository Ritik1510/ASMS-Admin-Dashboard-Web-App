import { PageHeader } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.component'
import { tabPageHeaderConfig } from '@/components/shared/dashboard/tabPageHeader/tabPageHeader.config'

export default function Complaints() {
  return (
    <div>
      <PageHeader config={tabPageHeaderConfig.complaint} /> 
    </div>
  )
}
