"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import { ChevronDown } from 'lucide-react'

export default function dropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <SidebarMenuButton>
            Select Workspace
            <ChevronDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger> 
        <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
          <DropdownMenuItem>
            <span>Acme Inc</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
