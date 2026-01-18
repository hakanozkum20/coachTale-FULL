/**
 * Legacy API Layer - Maintained for backward compatibility
 *
 * New code should use the Onion Architecture:
 * - Use hooks from src/presentation/hooks
 * - Use services from src/application
 * - Use entities from src/core/entities
 */

import { getServiceContainer } from '@/infrastructure/service-container';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface AuthUser {
  userId: string;
  email: string;
  name: string;
  role: string;
  plan: string;
  avatarUrl?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * @deprecated Use useAuth() hook instead
 */
// Auth API
export const authApi = {
  // OAuth login başlat
  initiateOAuth: async () => {
    const authService = getServiceContainer().authService;
    await authService.login();
  },

  // Access token ile kullanıcı bilgilerini al
  getMe: async (accessToken: string): Promise<AuthUser> => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  // Logout
  logout: async (): Promise<void> => {
    const authService = getServiceContainer().authService;
    await authService.logout();
  },
};

/**
 * @deprecated Use the specific hooks from src/presentation/hooks instead
 */
// Generic API fetch with auth
export async function apiFetch<T = any>(
  endpoint: string,
  accessToken: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get the service container instance
 * Use this to access services in non-component code
 */
export function getServices() {
  return getServiceContainer();
}
