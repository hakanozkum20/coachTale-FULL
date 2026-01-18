import { PomodoroSession, PomodoroSettings, DailyFocusStats } from '../../core/entities';
import { IPomodoroRepository } from '../ports/repository.port';

/**
 * Pomodoro Service
 * Handles pomodoro timer business logic
 */
export class PomodoroService {
  constructor(private readonly pomodoroRepository: IPomodoroRepository) {}

  /**
   * Get pomodoro settings for user
   */
  async getSettings(userId: string): Promise<PomodoroSettings> {
    return await this.pomodoroRepository.getSettings(userId);
  }

  /**
   * Update pomodoro settings
   */
  async updateSettings(
    userId: string,
    settings: Partial<Omit<PomodoroSettings, 'userId'>>,
  ): Promise<PomodoroSettings> {
    return await this.pomodoroRepository.updateSettings(userId, settings);
  }

  /**
   * Start a new pomodoro session
   */
  async startSession(
    userId: string,
    duration?: number,
    lesson?: string,
    topic?: string,
  ): Promise<PomodoroSession> {
    // If no duration provided, use default from settings
    let sessionDuration = duration;
    if (!sessionDuration) {
      const settings = await this.getSettings(userId);
      sessionDuration = settings.workDuration;
    }

    return await this.pomodoroRepository.startSession(userId, sessionDuration, lesson, topic);
  }

  /**
   * Complete current pomodoro session
   */
  async completeSession(sessionId: string): Promise<PomodoroSession> {
    return await this.pomodoroRepository.completeSession(sessionId);
  }

  /**
   * Get daily focus statistics
   */
  async getDailyStats(userId: string, date: Date = new Date()): Promise<DailyFocusStats> {
    return await this.pomodoroRepository.getDailyStats(userId, date);
  }

  /**
   * Get active session for user
   */
  async getActiveSession(userId: string): Promise<PomodoroSession | null> {
    return await this.pomodoroRepository.getActiveSession(userId);
  }

  /**
   * Calculate daily goal progress
   */
  async getDailyGoalProgress(userId: string): Promise<{ completed: number; goal: number; percentage: number }> {
    const [settings, stats] = await Promise.all([
      this.getSettings(userId),
      this.getDailyStats(userId, new Date()),
    ]);

    const completed = stats.sessionsCompleted;
    const goal = settings.dailyGoal;
    const percentage = goal > 0 ? (completed / goal) * 100 : 0;

    return { completed, goal, percentage };
  }

  /**
   * Get weekly focus statistics
   */
  async getWeeklyStats(userId: string): Promise<DailyFocusStats[]> {
    const stats: DailyFocusStats[] = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      stats.push(await this.pomodoroRepository.getDailyStats(userId, date));
    }

    return stats;
  }

  /**
   * Get most productive lesson
   */
  async getMostProductiveLesson(userId: string): Promise<{ lesson: string; minutes: number } | null> {
    const weeklyStats = await this.getWeeklyStats(userId);
    const lessonMinutes: Record<string, number> = {};

    for (const stats of weeklyStats) {
      for (const [lesson, minutes] of Object.entries(stats.lessons)) {
        lessonMinutes[lesson] = (lessonMinutes[lesson] || 0) + minutes;
      }
    }

    const entries = Object.entries(lessonMinutes);
    if (entries.length === 0) return null;

    const [lesson, minutes] = entries.sort((a, b) => b[1] - a[1])[0];
    return { lesson, minutes };
  }
}
