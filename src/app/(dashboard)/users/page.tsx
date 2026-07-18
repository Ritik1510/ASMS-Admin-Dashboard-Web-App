import { PageHeader } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.component"
import { tabPageHeaderConfig } from "@/components/shared/dashboard/tabPageHeader/tabPageHeader.config"

function users() {
  return (
    <>
      {/* header */}
      <PageHeader config={tabPageHeaderConfig.user} /> 
      {/* invitation +  overview_card */}
      {/* user tabel */}
    </>
  )
}

export default users