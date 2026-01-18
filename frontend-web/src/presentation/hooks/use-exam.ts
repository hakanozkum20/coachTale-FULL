import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ExamResult, ExamType, type AddExamResultRequest } from '../../core/entities';

/**
 * Use Exam Results Hook
 */
export function useExamResults() {
  const queryClient = useQueryClient();
  const examService = getServiceContainer().examService;

  const query = useQuery({
    queryKey: ['exams', 'results'],
    queryFn: () => examService.getResults(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const addMutation = useMutation({
    mutationFn: (request: AddExamResultRequest) => examService.addResult(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exams', 'results'] });
      queryClient.invalidateQueries({ queryKey: ['exams', 'analysis'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => examService.deleteResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exams', 'results'] });
      queryClient.invalidateQueries({ queryKey: ['exams', 'analysis'] });
    },
  });

  return {
    ...query,
    addResult: addMutation.mutateAsync,
    deleteResult: deleteMutation.mutateAsync,
    isAdding: addMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}

/**
 * Use Exam Result Hook
 */
export function useExamResult(id: string) {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'result', id],
    queryFn: () => examService.getResult(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Use Exam Results by Type Hook
 */
export function useExamResultsByType(examType: ExamType) {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'results', 'type', examType],
    queryFn: () => examService.getResultsByExamType(examType),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Use Exam Analysis Hook
 */
export function useExamAnalysis(examType?: string) {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'analysis', examType],
    queryFn: () => examService.analyzeResults(examType),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Use Latest Results by Type Hook
 */
export function useLatestResultsByType() {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'latest', 'by-type'],
    queryFn: () => examService.getLatestResultsByType(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Use Average Scores Hook
 */
export function useAverageScores() {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'averages'],
    queryFn: () => examService.getAverageScores(),
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
}

/**
 * Use Lesson Trend Hook
 */
export function useLessonTrend(lesson: string) {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'trend', lesson],
    queryFn: () => examService.getLessonTrend(lesson),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

/**
 * Use Lesson Performance Hook
 */
export function useLessonPerformance() {
  const examService = getServiceContainer().examService;

  return useQuery({
    queryKey: ['exams', 'performance', 'lessons'],
    queryFn: () => examService.getLessonPerformance(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

import { getServiceContainer } from '../../infrastructure/service-container';
