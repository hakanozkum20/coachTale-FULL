/**
 * Chat Message Entity
 */
export class ChatMessage {
  constructor(
    public readonly id: string,
    public readonly sessionId: string,
    public readonly role: 'user' | 'assistant' | 'system',
    public readonly content: string,
    public readonly createdAt: Date,
  ) {}

  static fromDTO(dto: ChatMessageDTO): ChatMessage {
    return new ChatMessage(
      dto.id,
      dto.sessionId,
      dto.role,
      dto.content,
      new Date(dto.createdAt),
    );
  }

  toDTO(): ChatMessageDTO {
    return {
      id: this.id,
      sessionId: this.sessionId,
      role: this.role,
      content: this.content,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export interface ChatMessageDTO {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: string;
}

/**
 * Chat Session Entity
 */
export class ChatSession {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly title: string | null,
    public readonly messages: ChatMessage[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  /**
   * Get session title (generate from first message if not set)
   */
  getTitle(): string {
    if (this.title) return this.title;
    if (this.messages.length > 0) {
      const firstUserMessage = this.messages.find((m) => m.role === 'user');
      if (firstUserMessage) {
        return firstUserMessage.content.slice(0, 50) + (firstUserMessage.content.length > 50 ? '...' : '');
      }
    }
    return 'Yeni Sohbet';
  }

  /**
   * Get last message
   */
  getLastMessage(): ChatMessage | null {
    return this.messages[this.messages.length - 1] ?? null;
  }

  /**
   * Get message count
   */
  getMessageCount(): number {
    return this.messages.length;
  }

  static fromDTO(dto: ChatSessionDTO): ChatSession {
    return new ChatSession(
      dto.id,
      dto.userId,
      dto.title ?? null,
      dto.messages.map((m) => ChatMessage.fromDTO(m)),
      new Date(dto.createdAt),
      new Date(dto.updatedAt),
    );
  }

  toDTO(): ChatSessionDTO {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title ?? undefined,
      messages: this.messages.map((m) => m.toDTO()),
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}

export interface ChatSessionDTO {
  id: string;
  userId: string;
  title?: string;
  messages: ChatMessageDTO[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Send Message Request
 */
export interface SendMessageRequest {
  sessionId?: string;
  message: string;
}

/**
 * Send Message Response
 */
export interface SendMessageResponse {
  sessionId: string;
  message: ChatMessageDTO;
}
