import { FeatureDevelopmentCard } from '@/components/Development-and-Maintenance/featureDevelopmentCard.component'
import OverviewHeader from '@/features/overview/components/header/header'

export default function Overview() {
  return (
    <div>
      <OverviewHeader />
      <FeatureDevelopmentCard title="Dashboard Overview" />
    </div>
  )
}
