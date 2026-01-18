import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User, Permission } from '../../core/entities';
import { AuthService } from '../../application';
import { ApiError } from '../../application/ports/api.port';
import { useAuthStore } from '@/stores/auth-store';
import type { AuthUser } from '@/lib/api';

/**
 * Auth Hook - Return type
 */
interface UseAuthReturn {
  user: User | undefined;
  isLoading: boolean;
  error: Error | null;
  isAuthenticated: boolean;
  hasPermission: (permission: Permission) => boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

/**
 * Convert AuthUser from store to User entity
 */
function convertAuthUserToUser(authUser: AuthUser | null): User | undefined {
  if (!authUser) return undefined;

  return new User(
    authUser.userId,
    authUser.email,
    authUser.name || null,
    authUser.avatarUrl || null,
    authUser.role as any,
    authUser.plan as any,
    null, // parentId
    new Date(),
    new Date(),
  );
}

/**
 * Authentication Hook
 * Provides authentication state and actions
 */
export function useAuth(): UseAuthReturn {
  const queryClient = useQueryClient();
  const authStore = useAuthStore();
  const serviceContainer = getServiceContainer();
  const authService: AuthService = serviceContainer.authService;

  // Get user from store (not from API)
  const user = convertAuthUserToUser(authStore.user);

  // Set token in API service from store
  if (authStore.accessToken) {
    serviceContainer.apiService.setAuthToken(authStore.accessToken);
  }

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: () => authService.login(),
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      authStore.logout();
      queryClient.clear();
    },
  });

  // Check if user is authenticated
  const isAuthenticated = !!user && authStore.isAuthenticated;

  // Check permission helper
  const checkPermission = (permission: Permission): boolean => {
    return user ? authService.hasPermission(user, permission) : false;
  };

  return {
    user,
    isLoading: false,
    error: null,
    isAuthenticated,
    hasPermission: checkPermission,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    refreshUser: () => queryClient.invalidateQueries({ queryKey: ['auth', 'user'] }),
  };
}

/**
 * Use Current User Hook
 * Shorthand for getting just the user
 */
export function useCurrentUser(): User | undefined {
  const { user } = useAuth();
  return user;
}

/**
 * Use Is Authenticated Hook
 * Shorthand for checking authentication
 */
export function useIsAuthenticated(): boolean {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}

/**
 * Use Has Permission Hook
 * Check if current user has a specific permission
 */
export function useHasPermission(permission: Permission): boolean {
  const { hasPermission } = useAuth();
  return hasPermission(permission);
}

/**
 * Use Has Any Permission Hook
 * Check if current user has any of the specified permissions
 */
export function useHasAnyPermission(permissions: Permission[]): boolean {
  const { user } = useAuth();
  if (!user) return false;

  return permissions.some((p) => {
    const authService = getServiceContainer().authService;
    return authService.hasPermission(user, p);
  });
}

/**
 * Use Has All Permissions Hook
 * Check if current user has all of the specified permissions
 */
export function useHasAllPermissions(permissions: Permission[]): boolean {
  const { user } = useAuth();
  if (!user) return false;

  return permissions.every((p) => {
    const authService = getServiceContainer().authService;
    return authService.hasPermission(user, p);
  });
}

/**
 * Use Is Admin Hook
 * Check if current user is an admin
 */
export function useIsAdmin(): boolean {
  const { user } = useAuth();
  return user?.isAdmin() ?? false;
}

/**
 * Use Is Parent Hook
 * Check if current user is a parent
 */
export function useIsParent(): boolean {
  const { user } = useAuth();
  return user?.isParent() ?? false;
}

/**
 * Use Is Student Hook
 * Check if current user is a student
 */
export function useIsStudent(): boolean {
  const { user } = useAuth();
  return user?.isStudent() ?? false;
}

// Import helper
import { getServiceContainer } from '../../infrastructure/service-container';
