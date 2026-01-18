import { Permission, UserRole, UserPlan } from './roles';

/**
 * Role-Based Access Control Matrix
 * Defines which permissions each role has
 */
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.STUDENT]: [
    // Self access
    Permission.USER_READ_OWN,
    Permission.USER_UPDATE_OWN,

    // Pomodoro
    Permission.POMODORO_READ_OWN,
    Permission.POMODORO_MANAGE_OWN,

    // AI Chat
    Permission.AI_CHAT_OWN,

    // Solutions
    Permission.SOLUTIONS_OWN,

    // Exams
    Permission.EXAMS_READ_OWN,
    Permission.EXAMS_MANAGE_OWN,

    // Study Plans
    Permission.STUDY_PLANS_OWN,

    // Badges
    Permission.BADGES_READ,

    // Notifications
    Permission.NOTIFICATIONS_OWN,

    // Analytics
    Permission.ANALYTICS_OWN,
  ],

  [UserRole.PARENT]: [
    // Self access
    Permission.USER_READ_OWN,
    Permission.USER_UPDATE_OWN,

    // Student access
    Permission.STUDENT_READ,
    Permission.STUDENT_UPDATE,

    // Pomodoro
    Permission.POMODORO_READ_OWN,
    Permission.POMODORO_MANAGE_OWN,

    // AI Chat
    Permission.AI_CHAT_OWN,

    // Solutions
    Permission.SOLUTIONS_OWN,

    // Exams
    Permission.EXAMS_READ_OWN,
    Permission.EXAMS_MANAGE_OWN,

    // Study Plans
    Permission.STUDY_PLANS_OWN,

    // Badges
    Permission.BADGES_READ,

    // Notifications
    Permission.NOTIFICATIONS_OWN,

    // Analytics
    Permission.ANALYTICS_OWN,
  ],

  [UserRole.ADMIN]: [
    // All permissions
    Permission.USER_READ_OWN,
    Permission.USER_READ_ALL,
    Permission.USER_UPDATE_OWN,
    Permission.USER_UPDATE_ALL,
    Permission.USER_DELETE_OWN,
    Permission.USER_DELETE_ALL,

    Permission.STUDENT_READ,
    Permission.STUDENT_UPDATE,

    Permission.POMODORO_READ_OWN,
    Permission.POMODORO_MANAGE_OWN,
    Permission.POMODORO_READ_ALL,

    Permission.AI_CHAT_OWN,
    Permission.AI_CHAT_READ_ALL,

    Permission.SOLUTIONS_OWN,
    Permission.SOLUTIONS_READ_ALL,

    Permission.EXAMS_READ_OWN,
    Permission.EXAMS_MANAGE_OWN,
    Permission.EXAMS_READ_ALL,

    Permission.STUDY_PLANS_OWN,
    Permission.STUDY_PLANS_READ_ALL,

    Permission.BADGES_READ,
    Permission.BADGES_MANAGE,

    Permission.NOTIFICATIONS_OWN,
    Permission.NOTIFICATIONS_MANAGE,

    Permission.ANALYTICS_OWN,
    Permission.ANALYTICS_ALL,
  ],
};

/**
 * Plan-based usage limits
 */
export const PLAN_LIMITS: Record<UserPlan, { aiChatsPerDay: number; solutionsPerDay: number }> = {
  [UserPlan.FREE]: {
    aiChatsPerDay: 10,
    solutionsPerDay: 5,
  },
  [UserPlan.STANDARD]: {
    aiChatsPerDay: 50,
    solutionsPerDay: 25,
  },
  [UserPlan.PREMIUM]: {
    aiChatsPerDay: -1, // Unlimited
    solutionsPerDay: -1, // Unlimited
  },
};

/**
 * Check if a role has a specific permission
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

/**
 * Check if a role has any of the specified permissions
 */
export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some((p) => ROLE_PERMISSIONS[role]?.includes(p));
}

/**
 * Check if a role has all of the specified permissions
 */
export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every((p) => ROLE_PERMISSIONS[role]?.includes(p));
}

/**
 * Get usage limit for a plan
 */
export function getPlanLimit(plan: UserPlan, type: 'aiChatsPerDay' | 'solutionsPerDay'): number {
  return PLAN_LIMITS[plan]?.[type] ?? 0;
}
