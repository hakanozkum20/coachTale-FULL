import prisma from '../config/database';
import { ChatSession, ChatMessage } from '../generated/prisma';

export class AIRepository {
    async findSessionById(sessionId: string, userId: string): Promise<ChatSession | null> {
        return await prisma.chatSession.findUnique({
            where: { id: sessionId, userId }
        });
    }

    async createSession(userId: string, title: string): Promise<ChatSession> {
        return await prisma.chatSession.create({
            data: { userId, title }
        });
    }

    async getSessionsByUser(userId: string): Promise<ChatSession[]> {
        return await prisma.chatSession.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async getMessagesBySession(sessionId: string): Promise<ChatMessage[]> {
        return await prisma.chatMessage.findMany({
            where: { sessionId },
            orderBy: { createdAt: 'asc' }
        });
    }

    async createMessage(sessionId: string, role: string, content: string): Promise<ChatMessage> {
        return await prisma.chatMessage.create({
            data: { sessionId, role, content }
        });
    }

    async countMessagesInLastWeek(userId: string): Promise<number> {
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        return await prisma.chatMessage.count({
            where: {
                session: { userId },
                role: 'assistant',
                createdAt: { gte: oneWeekAgo }
            }
        });
    }
}
