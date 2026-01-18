import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AxiosError } from 'axios'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/auth-store'
import { handleServerError } from '@/lib/handle-server-error'
import { ApiError } from '@/application/ports/api.port'
import { DirectionProvider } from './context/direction-provider'
import { FontProvider } from './context/font-provider'
import { ThemeProvider } from './context/theme-provider'
// Generated Routes
import { routeTree } from './routeTree.gen'
// Styles
import './styles/index.css'

/**
 * Handle token expiration - logout and redirect to sign-in
 */
function handleTokenExpiration() {
  useAuthStore.getState().logout()
  const currentPath = window.location.pathname + window.location.search
  const redirect = currentPath !== '/sign-in' ? currentPath : undefined
  window.location.href = redirect ? `/sign-in?redirect=${encodeURIComponent(redirect)}` : '/sign-in'
}

/**
 * Create query client instance
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // eslint-disable-next-line no-console
        if (import.meta.env.DEV) console.log({ failureCount, error })

        if (failureCount >= 0 && import.meta.env.DEV) return false
        if (failureCount > 3 && import.meta.env.PROD) return false

        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        )
      },
      refetchOnWindowFocus: import.meta.env.PROD,
      staleTime: 10 * 1000, // 10s
    },
    mutations: {
      onError: (error) => {
        // Handle ApiError from custom HttpApiService
        if (error instanceof ApiError) {
          if (error.statusCode === 401) {
            handleTokenExpiration()
            return
          }
        }
        // Handle other errors
        handleServerError(error)

        if (error instanceof AxiosError) {
          if (error.response?.status === 304) {
            toast.error('Content not modified!')
          }
        }
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      // Handle ApiError from custom HttpApiService
      if (error instanceof ApiError) {
        if (error.statusCode === 401) {
          handleTokenExpiration()
          return
        }
        if (error.statusCode === 500) {
          toast.error('Internal Server Error!')
          if (import.meta.env.PROD) {
            router.navigate({ to: '/500' })
          }
        }
        if (error.statusCode === 403) {
          // router.navigate("/forbidden", { replace: true });
        }
        return
      }
      // Handle AxiosError (for backward compatibility)
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          handleTokenExpiration()
          return
        }
        if (error.response?.status === 500) {
          toast.error('Internal Server Error!')
          if (import.meta.env.PROD) {
            router.navigate({ to: '/500' })
          }
        }
        if (error.response?.status === 403) {
          // router.navigate("/forbidden", { replace: true });
        }
      }
    },
  }),
})

/**
 * Create router instance
 */
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

/**
 * Global unhandled rejection handler for promise rejections
 * This catches errors from mutations using mutateAsync that aren't caught
 */
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason instanceof ApiError) {
    const apiError = event.reason as ApiError
    if (apiError.statusCode === 401) {
      // Prevent the default unhandled rejection error
      event.preventDefault()
      handleTokenExpiration()
    }
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <FontProvider>
            <DirectionProvider>
              <RouterProvider router={router} />
            </DirectionProvider>
          </FontProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}
