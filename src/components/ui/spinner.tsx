import { cn } from "cn"
import { LoaderIcon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon data-slot="spinner" role="status" aria-label="Loading" className={cn("size-4 lg:size-6 animate-spin", className)} {...props} />
  )
}

export { Spinner }
