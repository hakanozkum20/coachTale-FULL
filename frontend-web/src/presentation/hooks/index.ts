// Presentation Layer - Hooks Export

export {
  useAuth,
  useCurrentUser,
  useIsAuthenticated,
  useHasPermission,
  useHasAnyPermission,
  useHasAllPermissions,
  useIsAdmin,
  useIsParent,
  useIsStudent,
} from './use-auth';

export {
  usePomodoroSettings,
  usePomodoroSession,
  useDailyFocusStats,
  useWeeklyFocusStats,
  useDailyGoalProgress,
  useMostProductiveLesson,
} from './use-pomodoro';

export {
  useChatSessions,
  useChatSession,
  useSendMessage,
  useRecentSessions,
  useSearchSessions,
} from './use-chat';

export {
  useExamResults,
  useExamResult,
  useExamResultsByType,
  useExamAnalysis,
  useLatestResultsByType,
  useAverageScores,
  useLessonTrend,
  useLessonPerformance,
} from './use-exam';

export {
  useStudyPlans,
  useActiveStudyPlan,
  useStudyPlan,
  useGenerateStudyPlan,
  useTodaysTasks,
  useUpcomingTasks,
  useStudyStats,
} from './use-study-plan';

export {
  useSolutions,
  useSolution,
  useSolutionsByLesson,
  useRecentSolutions,
  useSolutionLessonStats,
} from './use-solution';

export {
  useAllBadges,
  useUserBadges,
  useBadgeProgress,
  useBadgeCount,
  useRecentBadges,
  useCreateBadge,
  useDeleteBadge,
} from './use-badge';

export {
  useNotificationSettings,
  useRegisterPushToken,
  useUnregisterPushToken,
  useTestNotification,
  useTogglePushNotifications,
  useToggleStudyReminders,
  useTogglePomodoroReminders,
  useToggleAchievementAlerts,
} from './use-notification';
