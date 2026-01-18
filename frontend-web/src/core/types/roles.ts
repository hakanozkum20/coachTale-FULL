// User Roles
export enum UserRole {
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  ADMIN = 'ADMIN',
}

// Subscription Plans
export enum UserPlan {
  FREE = 'FREE',
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
}

// Permission Types for RBAC
export enum Permission {
  // User Management
  USER_READ_OWN = 'user:read:own',
  USER_READ_ALL = 'user:read:all',
  USER_UPDATE_OWN = 'user:update:own',
  USER_UPDATE_ALL = 'user:update:all',
  USER_DELETE_OWN = 'user:delete:own',
  USER_DELETE_ALL = 'user:delete:all',

  // Student Data (Parent access)
  STUDENT_READ = 'student:read',
  STUDENT_UPDATE = 'student:update',

  // Pomodoro
  POMODORO_READ_OWN = 'pomodoro:read:own',
  POMODORO_MANAGE_OWN = 'pomodoro:manage:own',
  POMODORO_READ_ALL = 'pomodoro:read:all',

  // AI Chat
  AI_CHAT_OWN = 'ai:chat:own',
  AI_CHAT_READ_ALL = 'ai:chat:read:all',

  // Solutions
  SOLUTIONS_OWN = 'solutions:own',
  SOLUTIONS_READ_ALL = 'solutions:read:all',

  // Exams
  EXAMS_READ_OWN = 'exams:read:own',
  EXAMS_MANAGE_OWN = 'exams:manage:own',
  EXAMS_READ_ALL = 'exams:read:all',

  // Study Plans
  STUDY_PLANS_OWN = 'study:plans:own',
  STUDY_PLANS_READ_ALL = 'study:plans:read:all',

  // Badges
  BADGES_READ = 'badges:read',
  BADGES_MANAGE = 'badges:manage',

  // Notifications
  NOTIFICATIONS_OWN = 'notifications:own',
  NOTIFICATIONS_MANAGE = 'notifications:manage',

  // Analytics
  ANALYTICS_OWN = 'analytics:own',
  ANALYTICS_ALL = 'analytics:all',
}
