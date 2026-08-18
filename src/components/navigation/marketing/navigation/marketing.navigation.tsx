import Link from "next/link"
import { navigation } from "../config/navigation.config"

function MarketingHeaderNavigation() {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-5 flex-wrap">
      {navigation.map((item) => (
        <Link 
        key={item.id}
        href={item.href || '#' }
        className="text-lg underline sm:underline-offset-2 md:underline-offset-4 tracking-tight hover:text-brand-600"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MarketingHeaderNavigation