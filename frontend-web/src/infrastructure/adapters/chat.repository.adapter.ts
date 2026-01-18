import {
  ChatSession,
  type SendMessageRequest,
  type SendMessageResponse,
  type ChatSessionDTO,
  type ChatMessageDTO,
} from '../../core/entities';
import { IChatRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Chat Repository Adapter
 */
export class ChatRepositoryAdapter implements IChatRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Send message to AI
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    const response = await this.apiService.post<{
      sessionId: string;
      message: ChatMessageDTO;
    }>('/ai/chat', request);

    return {
      sessionId: response.sessionId,
      message: response.message,
    };
  }

  /**
   * Get all chat sessions
   */
  async getSessions(): Promise<ChatSession[]> {
    const sessions = await this.apiService.get<ChatSessionDTO[]>('/ai/sessions');
    return sessions.map((s) => ChatSession.fromDTO(s));
  }

  /**
   * Get specific chat session
   */
  async getSession(sessionId: string): Promise<ChatSession> {
    const session = await this.apiService.get<ChatSessionDTO>(`/ai/sessions/${sessionId}/history`);
    return ChatSession.fromDTO(session);
  }

  /**
   * Delete chat session
   */
  async deleteSession(sessionId: string): Promise<void> {
    await this.apiService.delete<void>(`/ai/sessions/${sessionId}`);
  }

  /**
   * Clear chat history
   */
  async clearHistory(sessionId: string): Promise<void> {
    await this.apiService.delete<void>(`/ai/sessions/${sessionId}/messages`);
  }
}
