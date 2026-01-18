import {
  User,
  type UserDTO,
} from '../../core/entities';
import { IAuthRepository } from '../../application/ports/repository.port';
import { IApiService, ApiError } from '../../application/ports/api.port';

/**
 * Authentication Repository Adapter
 * Implements auth repository using API service
 */
export class AuthRepositoryAdapter implements IAuthRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Initiate OAuth login
   * Redirects to backend OAuth endpoint
   */
  async login(): Promise<void> {
    // Store current URL for redirect after login
    const redirectUrl = window.location.pathname + window.location.search;
    sessionStorage.setItem('redirect_after_login', redirectUrl);

    // Redirect to backend OAuth endpoint
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
    window.location.href = `${apiUrl}/auth/login`;
  }

  /**
   * Handle OAuth callback
   */
  async handleCallback(code: string, state: string): Promise<{ user: User; accessToken: string; refreshToken?: string }> {
    const response = await this.apiService.post<{
      user: UserDTO;
      accessToken: string;
      refreshToken?: string;
    }>('/auth/callback', { code, state });

    return {
      user: User.fromDTO(response.user),
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    };
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<User> {
    const user = await this.apiService.get<UserDTO>('/auth/me');
    return User.fromDTO(user);
  }

  /**
   * Refresh access token
   */
  async refreshToken(): Promise<string> {
    const response = await this.apiService.post<{ accessToken: string }>('/auth/refresh');
    return response.accessToken;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await this.apiService.post<void>('/auth/logout');
  }
}
