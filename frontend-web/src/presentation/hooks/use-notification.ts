import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  NotificationSettings,
  type RegisterPushTokenRequest,
  type TestNotificationRequest,
} from '../../core/entities';

/**
 * Use Notification Settings Hook
 */
export function useNotificationSettings(userId: string) {
  const queryClient = useQueryClient();
  const notificationService = getServiceContainer().notificationService;

  const query = useQuery({
    queryKey: ['notifications', 'settings', userId],
    queryFn: () => notificationService.getSettings(userId),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const updateMutation = useMutation({
    mutationFn: (settings: Partial<Omit<NotificationSettings, 'userId'>>) =>
      notificationService.updateSettings(userId, settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', 'settings', userId] });
    },
  });

  return {
    ...query,
    updateSettings: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}

/**
 * Use Register Push Token Hook
 */
export function useRegisterPushToken() {
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: (request: RegisterPushTokenRequest) =>
      notificationService.registerPushToken(request),
  });

  return {
    registerToken: mutation.mutateAsync,
    isRegistering: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Unregister Push Token Hook
 */
export function useUnregisterPushToken() {
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: (token: string) => notificationService.unregisterPushToken(token),
  });

  return {
    unregisterToken: mutation.mutateAsync,
    isUnregistering: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Test Notification Hook
 */
export function useTestNotification() {
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: (request?: TestNotificationRequest) =>
      notificationService.testNotification(request),
  });

  return {
    testNotification: mutation.mutateAsync,
    isTesting: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Toggle Push Notifications Hook
 */
export function useTogglePushNotifications(userId: string) {
  const queryClient = useQueryClient();
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: () => {
      const settings = queryClient.getQueryData<NotificationSettings>([
        'notifications',
        'settings',
        userId,
      ]);
      return settings?.pushEnabled
        ? notificationService.disablePushNotifications(userId)
        : notificationService.enablePushNotifications(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', 'settings', userId] });
    },
  });

  return {
    toggle: mutation.mutateAsync,
    isToggling: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Toggle Study Reminders Hook
 */
export function useToggleStudyReminders(userId: string) {
  const queryClient = useQueryClient();
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: () => notificationService.toggleStudyReminders(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', 'settings', userId] });
    },
  });

  return {
    toggle: mutation.mutateAsync,
    isToggling: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Toggle Pomodoro Reminders Hook
 */
export function useTogglePomodoroReminders(userId: string) {
  const queryClient = useQueryClient();
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: () => notificationService.togglePomodoroReminders(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', 'settings', userId] });
    },
  });

  return {
    toggle: mutation.mutateAsync,
    isToggling: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Toggle Achievement Alerts Hook
 */
export function useToggleAchievementAlerts(userId: string) {
  const queryClient = useQueryClient();
  const notificationService = getServiceContainer().notificationService;

  const mutation = useMutation({
    mutationFn: () => notificationService.toggleAchievementAlerts(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', 'settings', userId] });
    },
  });

  return {
    toggle: mutation.mutateAsync,
    isToggling: mutation.isPending,
    error: mutation.error,
  };
}

import { getServiceContainer } from '../../infrastructure/service-container';
