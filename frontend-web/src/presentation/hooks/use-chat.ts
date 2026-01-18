import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ChatSession, type SendMessageRequest } from '../../core/entities';

/**
 * Use Chat Sessions Hook
 */
export function useChatSessions() {
  const queryClient = useQueryClient();
  const chatService = getServiceContainer().chatService;

  const query = useQuery({
    queryKey: ['chat', 'sessions'],
    queryFn: () => chatService.getSessions(),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });

  const deleteMutation = useMutation({
    mutationFn: (sessionId: string) => chatService.deleteSession(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', 'sessions'] });
    },
  });

  return {
    ...query,
    deleteSession: deleteMutation.mutateAsync,
    isDeleting: deleteMutation.isPending,
  };
}

/**
 * Use Chat Session Hook
 */
export function useChatSession(sessionId: string) {
  const queryClient = useQueryClient();
  const chatService = getServiceContainer().chatService;

  const query = useQuery({
    queryKey: ['chat', 'session', sessionId],
    queryFn: () => chatService.getSession(sessionId),
    enabled: !!sessionId,
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  const clearMutation = useMutation({
    mutationFn: () => chatService.clearHistory(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', 'session', sessionId] });
    },
  });

  return {
    ...query,
    clearHistory: clearMutation.mutateAsync,
    isClearing: clearMutation.isPending,
  };
}

/**
 * Use Send Message Hook
 */
export function useSendMessage() {
  const queryClient = useQueryClient();
  const chatService = getServiceContainer().chatService;

  const mutation = useMutation({
    mutationFn: (request: SendMessageRequest) => chatService.sendMessage(request),
    onSuccess: (data, variables) => {
      // Invalidate the session query
      if (variables.sessionId) {
        queryClient.invalidateQueries({ queryKey: ['chat', 'session', variables.sessionId] });
      }
      // Invalidate sessions list to update order
      queryClient.invalidateQueries({ queryKey: ['chat', 'sessions'] });
    },
  });

  return {
    sendMessage: mutation.mutateAsync,
    isSending: mutation.isPending,
    error: mutation.error,
  };
}

/**
 * Use Recent Sessions Hook
 */
export function useRecentSessions(days: number = 7) {
  const chatService = getServiceContainer().chatService;

  return useQuery({
    queryKey: ['chat', 'sessions', 'recent', days],
    queryFn: () => chatService.getRecentSessions(days),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Use Search Sessions Hook
 */
export function useSearchSessions(query: string) {
  const chatService = getServiceContainer().chatService;

  return useQuery({
    queryKey: ['chat', 'sessions', 'search', query],
    queryFn: () => chatService.searchSessions(query),
    enabled: query.length > 2, // Only search when query has more than 2 chars
    staleTime: 5 * 60 * 1000,
  });
}

import { getServiceContainer } from '../../infrastructure/service-container';
