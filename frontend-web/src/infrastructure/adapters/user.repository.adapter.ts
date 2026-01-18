import { User, type UserDTO } from '../../core/entities';
import { IUserRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * User Repository Adapter
 */
export class UserRepositoryAdapter implements IUserRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Get user profile
   */
  async getProfile(userId?: string): Promise<User> {
    const params = userId ? { userId } : undefined;
    const user = await this.apiService.get<UserDTO>('/auth/profile', params);
    return User.fromDTO(user);
  }

  /**
   * Update user profile
   */
  async updateProfile(
    data: Partial<Omit<User, 'id' | 'email' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    const updated = await this.apiService.patch<UserDTO>('/auth/profile', data);
    return User.fromDTO(updated);
  }

  /**
   * Delete user account
   */
  async deleteAccount(): Promise<void> {
    await this.apiService.delete<void>('/auth/account');
  }

  /**
   * Get students for a parent
   */
  async getStudents(parentId: string): Promise<User[]> {
    const users = await this.apiService.get<UserDTO[]>('/users', { parentId });
    return users.map((u) => User.fromDTO(u));
  }
}
