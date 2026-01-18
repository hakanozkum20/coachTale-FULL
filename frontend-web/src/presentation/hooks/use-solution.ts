import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QuestionSolution, type SolveQuestionRequest } from '../../core/entities';

/**
 * Use Solutions Hook
 */
export function useSolutions() {
  const queryClient = useQueryClient();
  const solutionService = getServiceContainer().solutionService;

  const query = useQuery({
    queryKey: ['solutions'],
    queryFn: () => solutionService.getHistory(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const solveMutation = useMutation({
    mutationFn: (request: SolveQuestionRequest) => solutionService.solveQuestion(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['solutions'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => solutionService.deleteSolution(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['solutions'] });
    },
  });

  return {
    ...query,
    solveQuestion: solveMutation.mutateAsync,
    deleteSolution: deleteMutation.mutateAsync,
    isSolving: solveMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}

/**
 * Use Solution Hook
 */
export function useSolution(id: string) {
  const solutionService = getServiceContainer().solutionService;

  return useQuery({
    queryKey: ['solutions', id],
    queryFn: () => solutionService.getSolution(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Use Solutions by Lesson Hook
 */
export function useSolutionsByLesson(lesson: string) {
  const solutionService = getServiceContainer().solutionService;

  return useQuery({
    queryKey: ['solutions', 'lesson', lesson],
    queryFn: () => solutionService.getSolutionsByLesson(lesson),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Use Recent Solutions Hook
 */
export function useRecentSolutions(days: number = 30) {
  const solutionService = getServiceContainer().solutionService;

  return useQuery({
    queryKey: ['solutions', 'recent', days],
    queryFn: () => solutionService.getRecentSolutions(days),
    staleTime: 10 * 60 * 1000,
  });
}

/**
 * Use Lesson Stats Hook (from solutions)
 */
export function useSolutionLessonStats() {
  const solutionService = getServiceContainer().solutionService;

  return useQuery({
    queryKey: ['solutions', 'stats', 'lessons'],
    queryFn: () => solutionService.getLessonStats(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

import { getServiceContainer } from '../../infrastructure/service-container';
