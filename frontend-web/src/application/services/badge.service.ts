import { Badge, UserBadge, type CreateBadgeRequest } from '../../core/entities';
import { IBadgeRepository } from '../ports/repository.port';
import { Permission, hasPermission } from '../../core/entities';

/**
 * Badge Service
 * Handles badge and gamification business logic
 */
export class BadgeService {
  constructor(private readonly badgeRepository: IBadgeRepository) {}

  /**
   * Get all available badges
   */
  async getAllBadges(): Promise<Badge[]> {
    return await this.badgeRepository.getAllBadges();
  }

  /**
   * Get badges earned by user
   */
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    return await this.badgeRepository.getUserBadges(userId);
  }

  /**
   * Create a new badge (admin only)
   */
  async createBadge(request: CreateBadgeRequest): Promise<Badge> {
    return await this.badgeRepository.createBadge(request);
  }

  /**
   * Delete a badge (admin only)
   */
  async deleteBadge(id: string): Promise<void> {
    await this.badgeRepository.deleteBadge(id);
  }

  /**
   * Check and award new badges to user
   */
  async checkAndAwardBadges(userId: string): Promise<UserBadge[]> {
    return await this.badgeRepository.checkAndAwardBadges(userId);
  }

  /**
   * Get badge progress for user
   */
  async getBadgeProgress(userId: string): Promise<
    Array<{ badge: Badge; earned: boolean; earnedAt?: Date }>
  > {
    const [allBadges, userBadges] = await Promise.all([
      this.getAllBadges(),
      this.getUserBadges(userId),
    ]);

    return allBadges.map((badge) => {
      const userBadge = userBadges.find((ub) => ub.badgeId === badge.id);
      return {
        badge,
        earned: !!userBadge,
        earnedAt: userBadge?.earnedAt,
      };
    });
  }

  /**
   * Get badge count for user
   */
  async getBadgeCount(userId: string): Promise<number> {
    const userBadges = await this.getUserBadges(userId);
    return userBadges.length;
  }

  /**
   * Get recent badges (last 30 days)
   */
  async getRecentBadges(userId: string, days: number = 30): Promise<UserBadge[]> {
    const userBadges = await this.getUserBadges(userId);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return userBadges.filter((ub) => ub.earnedAt >= cutoffDate);
  }

  /**
   * Check if user can manage badges (admin only)
   */
  canManageBadges(userRole: string): boolean {
    return hasPermission(userRole as any, Permission.BADGES_MANAGE);
  }
}
