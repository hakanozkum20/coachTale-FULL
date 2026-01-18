// Core Entities Export
export { User, type UserDTO } from './user.entity';
export {
  PomodoroSession,
  PomodoroSettings,
  DailyFocusStats,
  type PomodoroSessionDTO,
  type PomodoroSettingsDTO,
  type DailyFocusStatsDTO,
} from './pomodoro.entity';
export {
  ChatMessage,
  ChatSession,
  type ChatMessageDTO,
  type ChatSessionDTO,
  type SendMessageRequest,
  type SendMessageResponse,
} from './chat.entity';
export {
  ExamResult,
  ExamDetail,
  ExamType,
  type ExamResultDTO,
  type ExamDetailDTO,
  type AddExamResultRequest,
  type ExamAnalysis,
} from './exam.entity';
export {
  QuestionSolution,
  type QuestionSolutionDTO,
  type SolveQuestionRequest,
  type SolveQuestionResponse,
} from './solution.entity';
export {
  StudyPlan,
  StudyPlanStatus,
  type StudyPlanDTO,
  type StudyPlanContent,
  type StudyDay,
  type StudyTask,
  type GenerateStudyPlanRequest,
  type GenerateStudyPlanResponse,
} from './study-plan.entity';
export {
  Badge,
  UserBadge,
  type BadgeDTO,
  type UserBadgeDTO,
  type CreateBadgeRequest,
  type GetBadgesResponse,
  type GetUserBadgesResponse,
} from './badge.entity';
export {
  NotificationSettings,
  PushToken,
  type NotificationSettingsDTO,
  type PushTokenDTO,
  type RegisterPushTokenRequest,
  type TestNotificationRequest,
} from './notification.entity';

// Types Export
export { UserRole, UserPlan, Permission } from '../types/roles';
export {
  ROLE_PERMISSIONS,
  PLAN_LIMITS,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  getPlanLimit,
} from '../types/permissions';
