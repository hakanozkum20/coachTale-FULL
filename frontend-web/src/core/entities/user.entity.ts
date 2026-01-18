import { UserRole, UserPlan } from '../types/roles';

/**
 * Core User Entity - Domain Model
 * This represents the User in the domain layer
 */
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string | null,
    public readonly avatarUrl: string | null,
    public readonly role: UserRole,
    public readonly plan: UserPlan,
    public readonly parentId: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  /**
   * Check if user is a student
   */
  isStudent(): boolean {
    return this.role === UserRole.STUDENT;
  }

  /**
   * Check if user is a parent
   */
  isParent(): boolean {
    return this.role === UserRole.PARENT;
  }

  /**
   * Check if user is an admin
   */
  isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  /**
   * Check if user has a specific plan
   */
  hasPlan(plan: UserPlan): boolean {
    return this.plan === plan;
  }

  /**
   * Check if user is on a paid plan
   */
  isPaid(): boolean {
    return this.plan === UserPlan.STANDARD || this.plan === UserPlan.PREMIUM;
  }

  /**
   * Get display name
   */
  getDisplayName(): string {
    return this.name ?? this.email.split('@')[0];
  }

  /**
   * Create from API response
   */
  static fromDTO(dto: UserDTO): User {
    return new User(
      dto.id,
      dto.email,
      dto.name ?? null,
      dto.avatarUrl ?? null,
      dto.role as UserRole,
      dto.plan as UserPlan,
      dto.parentId ?? null,
      new Date(dto.createdAt),
      new Date(dto.updatedAt),
    );
  }

  /**
   * Convert to DTO
   */
  toDTO(): UserDTO {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatarUrl: this.avatarUrl,
      role: this.role,
      plan: this.plan,
      parentId: this.parentId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}

/**
 * User DTO for API communication
 */
export interface UserDTO {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  role: string;
  plan: string;
  parentId?: string;
  createdAt: string;
  updatedAt: string;
}
