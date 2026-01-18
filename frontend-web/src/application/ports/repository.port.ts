import {
  User,
  PomodoroSession,
  PomodoroSettings,
  DailyFocusStats,
  ChatSession,
  QuestionSolution,
  ExamResult,
  StudyPlan,
  Badge,
  UserBadge,
  NotificationSettings,
  type AddExamResultRequest,
  type ExamAnalysis,
  type GenerateStudyPlanResponse,
  type SendMessageRequest,
  type SendMessageResponse,
  type SolveQuestionRequest,
  type SolveQuestionResponse,
  type CreateBadgeRequest,
  type RegisterPushTokenRequest,
  type TestNotificationRequest,
} from '../../core/entities';

/**
 * Authentication Repository Port
 */
export interface IAuthRepository {
  login(): Promise<void>; // OAuth redirect
  handleCallback(code: string, state: string): Promise<{ user: User; accessToken: string; refreshToken?: string }>;
  getCurrentUser(): Promise<User>;
  refreshToken(): Promise<string>;
  logout(): Promise<void>;
}

/**
 * Pomodoro Repository Port
 */
export interface IPomodoroRepository {
  getSettings(userId: string): Promise<PomodoroSettings>;
  updateSettings(userId: string, settings: Partial<Omit<PomodoroSettings, 'userId'>>): Promise<PomodoroSettings>;
  startSession(userId: string, duration: number, lesson?: string, topic?: string): Promise<PomodoroSession>;
  completeSession(sessionId: string): Promise<PomodoroSession>;
  getDailyStats(userId: string, date: Date): Promise<DailyFocusStats>;
  getActiveSession(userId: string): Promise<PomodoroSession | null>;
}

/**
 * AI Chat Repository Port
 */
export interface IChatRepository {
  sendMessage(request: SendMessageRequest): Promise<SendMessageResponse>;
  getSessions(): Promise<ChatSession[]>;
  getSession(sessionId: string): Promise<ChatSession>;
  deleteSession(sessionId: string): Promise<void>;
  clearHistory(sessionId: string): Promise<void>;
}

/**
 * Solutions Repository Port
 */
export interface ISolutionRepository {
  solveQuestion(request: SolveQuestionRequest): Promise<SolveQuestionResponse>;
  getHistory(): Promise<QuestionSolution[]>;
  getSolution(id: string): Promise<QuestionSolution>;
  deleteSolution(id: string): Promise<void>;
}

/**
 * Exam Repository Port
 */
export interface IExamRepository {
  addResult(request: AddExamResultRequest): Promise<ExamResult>;
  getResults(): Promise<ExamResult[]>;
  getResult(id: string): Promise<ExamResult>;
  deleteResult(id: string): Promise<void>;
  analyzeResults(examType?: string): Promise<ExamAnalysis>;
  getResultsByExamType(examType: string): Promise<ExamResult[]>;
}

/**
 * Study Plan Repository Port
 */
export interface IStudyPlanRepository {
  generatePlan(): Promise<GenerateStudyPlanResponse>;
  getPlans(): Promise<StudyPlan[]>;
  getPlan(id: string): Promise<StudyPlan>;
  updatePlan(id: string, updates: Partial<StudyPlan>): Promise<StudyPlan>;
  deletePlan(id: string): Promise<void>;
  archivePlan(id: string): Promise<StudyPlan>;
  completePlan(id: string): Promise<StudyPlan>;
  updateTask(planId: string, taskId: string, completed: boolean): Promise<StudyPlan>;
}

/**
 * Badge Repository Port
 */
export interface IBadgeRepository {
  getAllBadges(): Promise<Badge[]>;
  getUserBadges(userId: string): Promise<UserBadge[]>;
  createBadge(request: CreateBadgeRequest): Promise<Badge>;
  deleteBadge(id: string): Promise<void>;
  checkAndAwardBadges(userId: string): Promise<UserBadge[]>;
}

/**
 * Notification Repository Port
 */
export interface INotificationRepository {
  registerPushToken(request: RegisterPushTokenRequest): Promise<void>;
  unregisterPushToken(token: string): Promise<void>;
  testNotification(request: TestNotificationRequest): Promise<void>;
  getSettings(userId: string): Promise<NotificationSettings>;
  updateSettings(userId: string, settings: Partial<Omit<NotificationSettings, 'userId'>>): Promise<NotificationSettings>;
}

/**
 * User Repository Port
 */
export interface IUserRepository {
  getProfile(userId?: string): Promise<User>;
  updateProfile(data: Partial<Omit<User, 'id' | 'email' | 'createdAt' | 'updatedAt'>>): Promise<User>;
  deleteAccount(): Promise<void>;
  getStudents(parentId: string): Promise<User[]>;
}
