import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { StudyPlan, StudyPlanStatus } from '../../core/entities';

/**
 * Use Study Plans Hook
 */
export function useStudyPlans() {
  const queryClient = useQueryClient();
  const studyPlanService = getServiceContainer().studyPlanService;

  const query = useQuery({
    queryKey: ['study-plans'],
    queryFn: () => studyPlanService.getPlans(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => studyPlanService.deletePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans'] });
    },
  });

  return {
    ...query,
    deletePlan: deleteMutation.mutateAsync,
    isDeleting: deleteMutation.isPending,
  };
}

/**
 * Use Active Study Plan Hook
 */
export function useActiveStudyPlan() {
  const studyPlanService = getServiceContainer().studyPlanService;

  return useQuery({
    queryKey: ['study-plans', 'active'],
    queryFn: () => studyPlanService.getActivePlan(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Use Study Plan Hook
 */
export function useStudyPlan(id: string) {
  const queryClient = useQueryClient();
  const studyPlanService = getServiceContainer().studyPlanService;

  const query = useQuery({
    queryKey: ['study-plans', id],
    queryFn: () => studyPlanService.getPlan(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  const updateMutation = useMutation({
    mutationFn: (updates: Partial<StudyPlan>) => studyPlanService.updatePlan(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans', id] });
      queryClient.invalidateQueries({ queryKey: ['study-plans'] });
    },
  });

  const archiveMutation = useMutation({
    mutationFn: () => studyPlanService.archivePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans', id] });
      queryClient.invalidateQueries({ queryKey: ['study-plans'] });
    },
  });

  const completeMutation = useMutation({
    mutationFn: () => studyPlanService.completePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans', id] });
      queryClient.invalidateQueries({ queryKey: ['study-plans'] });
    },
  });

  const toggleTaskMutation = useMutation({
    mutationFn: ({ taskId, completed }: { taskId: string; completed: boolean }) =>
      studyPlanService.toggleTask(id, taskId, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans', id] });
    },
  });

  return {
    ...query,
    updatePlan: updateMutation.mutateAsync,
    archivePlan: archiveMutation.mutateAsync,
    completePlan: completeMutation.mutateAsync,
    toggleTask: toggleTaskMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
    isArchiving: archiveMutation.isPending,
    isCompleting: completeMutation.isPending,
    isTogglingTask: toggleTaskMutation.isPending,
  };
}

/**
 * Use Generate Study Plan Hook
 */
export function useGenerateStudyPlan() {
  const queryClient = useQueryClient();
  const studyPlanService = getServiceContainer().studyPlanService;

  const mutation = useMutation({
    mutationFn: () => studyPlanService.generatePlan(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-plans'] });
      queryClient.invalidateQueries({ queryKey: ['study-plans', 'active'] });
    },
  });

  return {
    generatePlan: mutation.mutateAsync,
    isGenerating: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Today's Tasks Hook
 */
export function useTodaysTasks() {
  const studyPlanService = getServiceContainer().studyPlanService;

  return useQuery({
    queryKey: ['study-plans', 'tasks', 'today'],
    queryFn: () => studyPlanService.getTodaysTasks(),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
}

/**
 * Use Upcoming Tasks Hook
 */
export function useUpcomingTasks() {
  const studyPlanService = getServiceContainer().studyPlanService;

  return useQuery({
    queryKey: ['study-plans', 'tasks', 'upcoming'],
    queryFn: () => studyPlanService.getUpcomingTasks(),
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
}

/**
 * Use Study Stats Hook
 */
export function useStudyStats() {
  const studyPlanService = getServiceContainer().studyPlanService;

  return useQuery({
    queryKey: ['study-plans', 'stats'],
    queryFn: () => studyPlanService.getStudyStats(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

import { getServiceContainer } from '../../infrastructure/service-container';
