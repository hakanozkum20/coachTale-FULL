import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PomodoroSession, PomodoroSettings, DailyFocusStats } from '../../core/entities';

/**
 * Use Pomodoro Settings Hook
 */
export function usePomodoroSettings(userId: string) {
  const queryClient = useQueryClient();
  const pomodoroService = getServiceContainer().pomodoroService;

  const query = useQuery({
    queryKey: ['pomodoro', 'settings', userId],
    queryFn: () => pomodoroService.getSettings(userId),
    staleTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!userId,
  });

  const updateMutation = useMutation({
    mutationFn: (settings: Partial<Omit<PomodoroSettings, 'userId'>>) =>
      pomodoroService.updateSettings(userId, settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pomodoro', 'settings', userId] });
    },
  });

  return {
    ...query,
    updateSettings: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}

/**
 * Use Pomodoro Session Hook
 */
export function usePomodoroSession(userId: string) {
  const queryClient = useQueryClient();
  const pomodoroService = getServiceContainer().pomodoroService;

  const activeSessionQuery = useQuery({
    queryKey: ['pomodoro', 'active', userId],
    queryFn: () => pomodoroService.getActiveSession(userId),
    refetchInterval: (data) => {
      // Refetch every 10 seconds if there's an active session
      return data ? 10000 : false;
    },
    staleTime: 30 * 1000, // 30 seconds
    enabled: !!userId,
  });

  const startMutation = useMutation({
    mutationFn: (params: { duration?: number; lesson?: string; topic?: string }) =>
      pomodoroService.startSession(userId, params.duration, params.lesson, params.topic),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pomodoro', 'active', userId] });
      queryClient.invalidateQueries({ queryKey: ['pomodoro', 'stats'] });
    },
  });

  const completeMutation = useMutation({
    mutationFn: (sessionId: string) => pomodoroService.completeSession(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pomodoro', 'active', userId] });
      queryClient.invalidateQueries({ queryKey: ['pomodoro', 'stats'] });
    },
  });

  return {
    activeSession: activeSessionQuery.data,
    isLoading: activeSessionQuery.isLoading,
    error: activeSessionQuery.error,
    startSession: startMutation.mutateAsync,
    completeSession: completeMutation.mutateAsync,
    isStarting: startMutation.isPending,
    isCompleting: completeMutation.isPending,
  };
}

/**
 * Use Daily Focus Stats Hook
 */
export function useDailyFocusStats(userId: string, date?: Date) {
  const pomodoroService = getServiceContainer().pomodoroService;

  return useQuery({
    queryKey: ['pomodoro', 'stats', 'daily', userId, date?.toISOString()],
    queryFn: () => pomodoroService.getDailyStats(userId, date),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!userId,
  });
}

/**
 * Use Weekly Focus Stats Hook
 */
export function useWeeklyFocusStats(userId: string) {
  const pomodoroService = getServiceContainer().pomodoroService;

  return useQuery({
    queryKey: ['pomodoro', 'stats', 'weekly', userId],
    queryFn: () => pomodoroService.getWeeklyStats(userId),
    staleTime: 15 * 60 * 1000, // 15 minutes
    enabled: !!userId,
  });
}

/**
 * Use Daily Goal Progress Hook
 */
export function useDailyGoalProgress(userId: string) {
  const pomodoroService = getServiceContainer().pomodoroService;

  return useQuery({
    queryKey: ['pomodoro', 'goal', userId],
    queryFn: () => pomodoroService.getDailyGoalProgress(userId),
    staleTime: 2 * 60 * 1000, // 2 minutes
    enabled: !!userId,
  });
}

/**
 * Use Most Productive Lesson Hook
 */
export function useMostProductiveLesson(userId: string) {
  const pomodoroService = getServiceContainer().pomodoroService;

  return useQuery({
    queryKey: ['pomodoro', 'productive', userId],
    queryFn: () => pomodoroService.getMostProductiveLesson(userId),
    staleTime: 60 * 60 * 1000, // 1 hour
    enabled: !!userId,
  });
}

import { getServiceContainer } from '../../infrastructure/service-container';
