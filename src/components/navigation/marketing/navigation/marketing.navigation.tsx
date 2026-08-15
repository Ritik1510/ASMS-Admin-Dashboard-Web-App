import Link from "next/link"
import { navigation } from "../config/navigation.config"

function MarketingHeaderNavigation() {
  return (
    <div className="flex justify-center items-center gap-2.5 md:gap-3 lg:gap-5">
      {navigation.map((item) => (
        <Link 
        key={item.id}
        href={item.href || '#' }
        className="text-[8px] min-[400px]:text-[9px] sm:text-xs md:text-sm underline sm:underline-offset-2 md:underline-offset-4 tracking-tight"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MarketingHeaderNavigation