import { ReactNode } from "react"

export type NavigationItem = {
  id: string
  label: string
  type:
    | "section"
    | "route"
    | "dropdown"
  href?: string
  children?: NavigationItem[]
  icon?: ReactNode
  badge?: string
  external?: boolean
  visible?: boolean
}