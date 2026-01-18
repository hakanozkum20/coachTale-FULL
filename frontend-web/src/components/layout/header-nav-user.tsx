import { Link } from '@tanstack/react-router'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LogOut,
} from 'lucide-react'
import useDialogState from '@/hooks/use-dialog-state'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth-store'
import { SignOutDialog } from '@/components/sign-out-dialog'

export function HeaderNavUser() {
  const [open, setOpen] = useDialogState()
  const { user } = useAuthStore()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='h-9 w-9 rounded-full p-0'
          >
            <Avatar className='h-8 w-8'>
              <AvatarImage src={user?.avatarUrl} alt={user?.name} />
              <AvatarFallback className='rounded-lg bg-purple-600 text-white'>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='min-w-56 rounded-lg'
          side='bottom'
          align='end'
          sideOffset={4}
        >
          <DropdownMenuLabel className='p-0 font-normal'>
            <div className='flex items-center gap-2 px-1 py-1.5 text-start text-sm'>
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className='rounded-lg bg-purple-600 text-white'>
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-start text-sm leading-tight'>
                <span className='truncate font-semibold'>{user?.name}</span>
                <span className='truncate text-xs text-muted-foreground'>
                  {user?.email}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to='/settings'>
                <BadgeCheck className='mr-2 h-4 w-4' />
                Profil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to='/settings'>
                <Bell className='mr-2 h-4 w-4' />
                Bildirimler
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='text-destructive focus:text-destructive'
            onClick={() => setOpen(true)}
          >
            <LogOut className='mr-2 h-4 w-4' />
            Çıkış Yap
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  )
}
