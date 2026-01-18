import { Outlet } from '@tanstack/react-router'
import { getCookie } from '@/lib/cookies'
import { cn } from '@/lib/utils'
import { LayoutProvider } from '@/context/layout-provider'
import { SearchProvider } from '@/context/search-provider'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SkipToMain } from '@/components/skip-to-main'
import { Separator } from '@/components/ui/separator'
import { ThemeSwitch } from '@/components/theme-switch'
import { Search } from '@/components/search'
import { HeaderNavUser } from '@/components/layout/header-nav-user'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const defaultOpen = getCookie('sidebar_state') !== 'false'
  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppSidebar />
          <SidebarInset
            className={cn(
              // Set content container, so we can use container queries
              '@container/content',

              // If layout is fixed, set the height
              // to 100svh to prevent overflow
              'has-data-[layout=fixed]:h-svh',

              // If layout is fixed and sidebar is inset,
              // set the height to 100svh - spacing (total margins) to prevent overflow
              'peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]'
            )}
          >
            <header
              className={cn(
                'flex h-16 shrink-0 items-center gap-2 border-b',
                '[&.header-is-sticky]:sticky [&.header-is-sticky]:top-0 [&.header-is-sticky]:z-10',
                'transition-[width,height] ease-linear group-data-[collapsible=icon]:h-12'
              )}
            >
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
              <div className="flex flex-1 items-center justify-end gap-2 px-4">
                <Search placeholder="Ara..." />
                <ThemeSwitch />
                <HeaderNavUser />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
              {children ?? <Outlet />}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  )
}
