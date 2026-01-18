import { User, UserRole, hasPermission, Permission } from '../../core/entities';
import { IAuthRepository } from '../ports/repository.port';
import { IApiService, ApiError } from '../ports/api.port';

/**
 * Authentication Service
 * Handles authentication business logic
 */
export class AuthService {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly apiService: IApiService,
  ) {}

  /**
   * Initiate OAuth login flow
   */
  async login(): Promise<void> {
    await this.authRepository.login();
  }

  /**
   * Handle OAuth callback
   */
  async handleCallback(code: string, state: string): Promise<{ user: User; accessToken: string; refreshToken?: string }> {
    const result = await this.authRepository.handleCallback(code, state);

    // Set auth token in API service
    this.apiService.setAuthToken(result.accessToken);
    if (result.refreshToken) {
      this.apiService.setRefreshToken(result.refreshToken);
    }

    return result;
  }

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<User> {
    try {
      return await this.authRepository.getCurrentUser();
    } catch (error) {
      if (error instanceof ApiError && error.isUnauthorized()) {
        // Try to refresh token
        try {
          const newToken = await this.authRepository.refreshToken();
          this.apiService.setAuthToken(newToken);
          return await this.authRepository.getCurrentUser();
        } catch {
          throw new Error('Session expired. Please login again.');
        }
      }
      throw error;
    }
  }

  /**
   * Refresh access token
   */
  async refreshToken(): Promise<string> {
    const token = await this.authRepository.refreshToken();
    this.apiService.setAuthToken(token);
    return token;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await this.authRepository.logout();
    this.apiService.setAuthToken(null);
  }

  /**
   * Check if user has a specific permission
   */
  hasPermission(user: User, permission: Permission): boolean {
    return hasPermission(user.role, permission);
  }

  /**
   * Check if user can access another user's data
   */
  canAccessUser(requester: User, targetUserId: string): boolean {
    // Admin can access all
    if (requester.role === UserRole.ADMIN) return true;

    // User can access own data
    if (requester.id === targetUserId) return true;

    // Parent can access student data (if relationship exists)
    // This check would require additional data about parent-student relationships
    // For now, return false - this should be validated on backend
    return false;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.apiService.getAuthToken() !== null;
  }
}
