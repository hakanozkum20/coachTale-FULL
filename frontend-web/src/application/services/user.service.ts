import { User, UserRole } from '../../core/entities';
import { IUserRepository } from '../ports/repository.port';
import { Permission, hasPermission } from '../../core/entities';

/**
 * User Service
 * Handles user management business logic
 */
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Get user profile
   */
  async getProfile(userId?: string): Promise<User> {
    return await this.userRepository.getProfile(userId);
  }

  /**
   * Update user profile
   */
  async updateProfile(
    data: Partial<Omit<User, 'id' | 'email' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    return await this.userRepository.updateProfile(data);
  }

  /**
   * Delete user account
   */
  async deleteAccount(): Promise<void> {
    await this.userRepository.deleteAccount();
  }

  /**
   * Get students for a parent
   */
  async getStudents(parentId: string): Promise<User[]> {
    return await this.userRepository.getStudents(parentId);
  }

  /**
   * Check if user can access another user's data
   */
  canAccessUser(requester: User, targetUserId: string): boolean {
    // Admin can access all
    if (requester.role === UserRole.ADMIN) return true;

    // User can access own data
    if (requester.id === targetUserId) return true;

    // Parent can access student data
    if (requester.role === UserRole.PARENT) {
      // This would require checking parent-student relationship
      // For now, backend will handle the authorization check
      return true;
    }

    return false;
  }

  /**
   * Check if user has permission
   */
  hasPermission(user: User, permission: Permission): boolean {
    return hasPermission(user.role, permission);
  }

  /**
   * Get display name for user
   */
  getDisplayName(user: User): string {
    return user.getDisplayName();
  }

  /**
   * Check if user is on a paid plan
   */
  isPaidUser(user: User): boolean {
    return user.isPaid();
  }
}
