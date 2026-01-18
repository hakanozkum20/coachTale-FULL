import {
  Badge,
  UserBadge,
  type CreateBadgeRequest,
  type BadgeDTO,
  type UserBadgeDTO,
} from '../../core/entities';
import { IBadgeRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Badge Repository Adapter
 */
export class BadgeRepositoryAdapter implements IBadgeRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Get all badges
   */
  async getAllBadges(): Promise<Badge[]> {
    const badges = await this.apiService.get<BadgeDTO[]>('/badges');
    return badges.map((b) => Badge.fromDTO(b));
  }

  /**
   * Get badges earned by user
   */
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    const userBadges = await this.apiService.get<UserBadgeDTO[]>('/badges/me', { userId });
    return userBadges.map((ub) => UserBadge.fromDTO(ub));
  }

  /**
   * Create new badge (admin only)
   */
  async createBadge(request: CreateBadgeRequest): Promise<Badge> {
    const badge = await this.apiService.post<BadgeDTO>('/badges', request);
    return Badge.fromDTO(badge);
  }

  /**
   * Delete badge (admin only)
   */
  async deleteBadge(id: string): Promise<void> {
    await this.apiService.delete<void>(`/badges/${id}`);
  }

  /**
   * Check and award new badges to user
   */
  async checkAndAwardBadges(userId: string): Promise<UserBadge[]> {
    // This would trigger backend to check achievements and award badges
    const userBadges = await this.apiService.post<UserBadgeDTO[]>('/badges/check', { userId });
    return userBadges.map((ub) => UserBadge.fromDTO(ub));
  }
}
