import Link from "next/link"
import { navigation } from "../config/navigation.config"

function MarketingHeaderNavigation() {
  return (
    <div className="flex justify-center items-center gap-2.5 md:gap-4 lg:gap-5">
      {navigation.map((item) => (
        <Link 
        key={item.id}
        href={item.href || '#' }
        className=""
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MarketingHeaderNavigation