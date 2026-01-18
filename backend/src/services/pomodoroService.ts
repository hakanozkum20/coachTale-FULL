import { PomodoroRepository } from '../repositories/pomodoroRepository';
import { BadgeService } from './badgeService';
import { PomodoroSettings, PomodoroSession } from '../generated/prisma';

export class PomodoroService {
    private pomodoroRepository: PomodoroRepository;
    private badgeService: BadgeService;

    constructor() {
        this.pomodoroRepository = new PomodoroRepository();
        this.badgeService = new BadgeService();
    }

    async getSettings(userId: string): Promise<PomodoroSettings> {
        let settings = await this.pomodoroRepository.getSettings(userId);
        if (!settings) {
            settings = await this.pomodoroRepository.upsertSettings(userId, {});
        }
        return settings;
    }

    async updateSettings(userId: string, data: any): Promise<PomodoroSettings> {
        return await this.pomodoroRepository.upsertSettings(userId, data);
    }

    async startSession(userId: string, data: any): Promise<PomodoroSession> {
        return await this.pomodoroRepository.createSession(userId, {
            ...data,
            startedAt: new Date(),
            endedAt: null, // Will be set on completion
            completed: false
        });
    }

    async completeSession(sessionId: string, userId: string): Promise<PomodoroSession> {
        const session = await this.pomodoroRepository.completeSession(sessionId, userId);

        // Update daily stats upon completion
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        await this.pomodoroRepository.upsertDailyStats(userId, today, session.duration);

        // Badge check
        await this.badgeService.checkAndAward(userId, 'POMODORO');

        return session;
    }

    async getDailyStats(userId: string) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const stats = await this.pomodoroRepository.getDailyStats(userId, today);
        return stats || { totalFocusMinutes: 0, sessionsCompleted: 0 };
    }

    async getActiveSession(userId: string): Promise<PomodoroSession | null> {
        return await this.pomodoroRepository.getActiveSession(userId);
    }
}
