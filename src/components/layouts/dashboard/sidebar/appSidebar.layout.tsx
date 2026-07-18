import {
  dashboardSidebar_groupConfig,
  getDashboardSidebarHeaderConfig
} from '@/components/navigation/dashboard/config/dashbooard.config'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function AppSidebar() {
  const user = await currentUser();
  const fullName = user?.fullName ?? "nameIsNotAvilable";
  const headerConfig = getDashboardSidebarHeaderConfig(fullName);
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* TODO: make the configuratiion data for these components */}

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <a href={headerConfig.href} className='flex justify-items-start items-center gap-1.5 md:gap-2 lg:gap-2.5'>
                <headerConfig.icon className='shrink-0' />
                <div className='grid'>
                  <span>{headerConfig.label}</span>
                  <span className='text-sm'>{headerConfig.username.toLowerCase()}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {
                dashboardSidebar_groupConfig.map((tab) => (
                  <SidebarMenuItem key={tab.id}>
                    <SidebarMenuButton>
                      <Link href={tab.href} className='flex gap-1.5 md:gap-2 lg:gap-2.5'>
                        <tab.icon />
                        <span>{tab.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <UserButton />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail>

      </SidebarRail>
    </Sidebar>
  )
}
