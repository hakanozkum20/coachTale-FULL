/**
 * Badge Entity
 */
export class Badge {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly icon: string,
    public readonly requirement: string,
    public readonly createdAt: Date,
  ) {}

  static fromDTO(dto: BadgeDTO): Badge {
    return new Badge(
      dto.id,
      dto.name,
      dto.description,
      dto.icon,
      dto.requirement,
      new Date(dto.createdAt),
    );
  }

  toDTO(): BadgeDTO {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      icon: this.icon,
      requirement: this.requirement,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export interface BadgeDTO {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  createdAt: string;
}

/**
 * User Badge Entity (Join table)
 */
export class UserBadge {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly badgeId: string,
    public readonly badge: Badge,
    public readonly earnedAt: Date,
  ) {}

  static fromDTO(dto: UserBadgeDTO): UserBadge {
    return new UserBadge(
      dto.id,
      dto.userId,
      dto.badgeId,
      Badge.fromDTO(dto.badge),
      new Date(dto.earnedAt),
    );
  }

  toDTO(): UserBadgeDTO {
    return {
      id: this.id,
      userId: this.userId,
      badgeId: this.badgeId,
      badge: this.badge.toDTO(),
      earnedAt: this.earnedAt.toISOString(),
    };
  }
}

export interface UserBadgeDTO {
  id: string;
  userId: string;
  badgeId: string;
  badge: BadgeDTO;
  earnedAt: string;
}

/**
 * Create Badge Request (Admin only)
 */
export interface CreateBadgeRequest {
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

/**
 * Get Badges Response
 */
export interface GetBadgesResponse {
  badges: BadgeDTO[];
}

/**
 * Get User Badges Response
 */
export interface GetUserBadgesResponse {
  userBadges: UserBadgeDTO[];
}
