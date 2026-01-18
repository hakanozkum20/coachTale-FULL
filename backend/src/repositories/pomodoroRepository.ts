import prisma from '../config/database';
import { PomodoroSession, PomodoroSettings, DailyFocusStats } from '../generated/prisma';

export class PomodoroRepository {
    async getSettings(userId: string): Promise<PomodoroSettings | null> {
        return await prisma.pomodoroSettings.findUnique({ where: { userId } });
    }

    async upsertSettings(userId: string, data: any): Promise<PomodoroSettings> {
        return await prisma.pomodoroSettings.upsert({
            where: { userId },
            update: data,
            create: { userId, ...data }
        });
    }

    async createSession(userId: string, data: any): Promise<PomodoroSession> {
        return await prisma.pomodoroSession.create({
            data: { userId, ...data }
        });
    }

    async completeSession(sessionId: string, userId: string): Promise<PomodoroSession> {
        return await prisma.pomodoroSession.update({
            where: { id: sessionId, userId },
            data: { completed: true, endedAt: new Date() }
        });
    }

    async upsertDailyStats(userId: string, date: Date, duration: number): Promise<DailyFocusStats> {
        return await prisma.dailyFocusStats.upsert({
            where: { userId_date: { userId, date } },
            update: {
                totalFocusMinutes: { increment: duration },
                sessionsCompleted: { increment: 1 }
            },
            create: {
                userId,
                date,
                totalFocusMinutes: duration,
                sessionsCompleted: 1
            }
        });
    }

    async getDailyStats(userId: string, date: Date): Promise<DailyFocusStats | null> {
        return await prisma.dailyFocusStats.findUnique({
            where: { userId_date: { userId, date } }
        });
    }

    async countTotalCompletedSessions(userId: string): Promise<number> {
        return await prisma.pomodoroSession.count({
            where: { userId, completed: true }
        });
    }

    async hasSessionBefore(userId: string, hour: number): Promise<boolean> {
        const morningSession = await prisma.pomodoroSession.findFirst({
            where: {
                userId,
                completed: true,
                startedAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0))
                }
            }
        });
        if (!morningSession) return false;
        return morningSession.startedAt.getHours() < hour;
    }

    async getActiveSession(userId: string): Promise<PomodoroSession | null> {
        return await prisma.pomodoroSession.findFirst({
            where: {
                userId,
                completed: false
            },
            orderBy: {
                startedAt: 'desc'
            }
        });
    }
}
