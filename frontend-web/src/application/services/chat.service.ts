import { ChatSession, type SendMessageRequest, type SendMessageResponse } from '../../core/entities';
import { IChatRepository } from '../ports/repository.port';

/**
 * AI Chat Service
 * Handles AI chat business logic
 */
export class ChatService {
  constructor(private readonly chatRepository: IChatRepository) {}

  /**
   * Send a message to AI
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    return await this.chatRepository.sendMessage(request);
  }

  /**
   * Get all chat sessions for user
   */
  async getSessions(): Promise<ChatSession[]> {
    const sessions = await this.chatRepository.getSessions();
    // Sort by updated date descending
    return sessions.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  /**
   * Get a specific chat session
   */
  async getSession(sessionId: string): Promise<ChatSession> {
    return await this.chatRepository.getSession(sessionId);
  }

  /**
   * Delete a chat session
   */
  async deleteSession(sessionId: string): Promise<void> {
    await this.chatRepository.deleteSession(sessionId);
  }

  /**
   * Clear chat history for a session
   */
  async clearHistory(sessionId: string): Promise<void> {
    await this.chatRepository.clearHistory(sessionId);
  }

  /**
   * Start a new chat session
   */
  async startNewSession(): Promise<ChatSession> {
    const response = await this.sendMessage({ message: '' });
    return await this.getSession(response.sessionId);
  }

  /**
   * Get recent sessions (last 7 days)
   */
  async getRecentSessions(days: number = 7): Promise<ChatSession[]> {
    const sessions = await this.getSessions();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return sessions.filter((s) => s.updatedAt >= cutoffDate);
  }

  /**
   * Search sessions by content
   */
  async searchSessions(query: string): Promise<ChatSession[]> {
    const sessions = await this.getSessions();
    const lowerQuery = query.toLowerCase();

    return sessions.filter((session) => {
      // Search in title
      if (session.title?.toLowerCase().includes(lowerQuery)) return true;

      // Search in messages
      return session.messages.some((m) => m.content.toLowerCase().includes(lowerQuery));
    });
  }
}
