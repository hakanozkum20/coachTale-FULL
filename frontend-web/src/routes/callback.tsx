import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/auth-store'
import { useEffect } from 'react'
import type { AuthUser } from '@/lib/api'
import { Loader2 } from 'lucide-react'

export const Route = createFileRoute('/callback')({
  component: Callback,
})

function Callback() {
  const navigate = useNavigate({ from: '/callback' })
  const login = useAuthStore((state) => state.login)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const accessToken = params.get('accessToken')
    const userParam = params.get('user')

    if (accessToken && userParam) {
      try {
        const user: AuthUser = JSON.parse(decodeURIComponent(userParam))
        login(user, accessToken)
        navigate({ to: '/', replace: true })
      } catch (error) {
        console.error('Failed to parse user data:', error)
        navigate({ to: '/sign-in', replace: true })
      }
    } else {
      navigate({ to: '/sign-in', replace: true })
    }
  }, [login, navigate])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}
