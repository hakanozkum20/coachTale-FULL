import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Badge, UserBadge, type CreateBadgeRequest } from '../../core/entities';

/**
 * Use All Badges Hook
 */
export function useAllBadges() {
  const badgeService = getServiceContainer().badgeService;

  return useQuery({
    queryKey: ['badges', 'all'],
    queryFn: () => badgeService.getAllBadges(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

/**
 * Use User Badges Hook
 */
export function useUserBadges(userId: string) {
  const queryClient = useQueryClient();
  const badgeService = getServiceContainer().badgeService;

  const query = useQuery({
    queryKey: ['badges', 'user', userId],
    queryFn: () => badgeService.getUserBadges(userId),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const checkMutation = useMutation({
    mutationFn: () => badgeService.checkAndAwardBadges(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['badges', 'user', userId] });
    },
  });

  return {
    ...query,
    checkBadges: checkMutation.mutateAsync,
    isChecking: checkMutation.isPending,
  };
}

/**
 * Use Badge Progress Hook
 */
export function useBadgeProgress(userId: string) {
  const badgeService = getServiceContainer().badgeService;

  return useQuery({
    queryKey: ['badges', 'progress', userId],
    queryFn: () => badgeService.getBadgeProgress(userId),
    staleTime: 10 * 60 * 1000,
  });
}

/**
 * Use Badge Count Hook
 */
export function useBadgeCount(userId: string) {
  const badgeService = getServiceContainer().badgeService;

  return useQuery({
    queryKey: ['badges', 'count', userId],
    queryFn: () => badgeService.getBadgeCount(userId),
    staleTime: 10 * 60 * 1000,
  });
}

/**
 * Use Recent Badges Hook
 */
export function useRecentBadges(userId: string, days: number = 30) {
  const badgeService = getServiceContainer().badgeService;

  return useQuery({
    queryKey: ['badges', 'recent', userId, days],
    queryFn: () => badgeService.getRecentBadges(userId, days),
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
}

/**
 * Use Create Badge Hook (Admin only)
 */
export function useCreateBadge() {
  const queryClient = useQueryClient();
  const badgeService = getServiceContainer().badgeService;

  const mutation = useMutation({
    mutationFn: (request: CreateBadgeRequest) => badgeService.createBadge(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['badges', 'all'] });
    },
  });

  return {
    createBadge: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Delete Badge Hook (Admin only)
 */
export function useDeleteBadge() {
  const queryClient = useQueryClient();
  const badgeService = getServiceContainer().badgeService;

  const mutation = useMutation({
    mutationFn: (id: string) => badgeService.deleteBadge(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['badges', 'all'] });
    },
  });

  return {
    deleteBadge: mutation.mutateAsync,
    isDeleting: mutation.isPending,
    error: mutation.error,
  };
}

import { getServiceContainer } from '../../infrastructure/service-container';
