import {
  PomodoroSession,
  PomodoroSettings,
  DailyFocusStats,
  type PomodoroSessionDTO,
  type PomodoroSettingsDTO,
  type DailyFocusStatsDTO,
} from '../../core/entities';
import { IPomodoroRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Pomodoro Repository Adapter
 */
export class PomodoroRepositoryAdapter implements IPomodoroRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Get pomodoro settings
   */
  async getSettings(userId: string): Promise<PomodoroSettings> {
    const settings = await this.apiService.get<PomodoroSettingsDTO>('/pomodoro/settings');
    return PomodoroSettings.fromDTO(settings);
  }

  /**
   * Update pomodoro settings
   */
  async updateSettings(
    userId: string,
    settings: Partial<Omit<PomodoroSettings, 'userId'>>,
  ): Promise<PomodoroSettings> {
    const updated = await this.apiService.post<PomodoroSettingsDTO>('/pomodoro/settings', settings);
    return PomodoroSettings.fromDTO(updated);
  }

  /**
   * Start pomodoro session
   */
  async startSession(
    userId: string,
    duration: number,
    lesson?: string,
    topic?: string,
  ): Promise<PomodoroSession> {
    const session = await this.apiService.post<PomodoroSessionDTO>('/pomodoro/session/start', {
      duration,
      lesson,
      topic,
    });
    return PomodoroSession.fromDTO(session);
  }

  /**
   * Complete pomodoro session
   */
  async completeSession(sessionId: string): Promise<PomodoroSession> {
    const session = await this.apiService.post<PomodoroSessionDTO>(
      `/pomodoro/session/${sessionId}/complete`,
      {},
    );
    return PomodoroSession.fromDTO(session);
  }

  /**
   * Get daily focus stats
   */
  async getDailyStats(userId: string, date: Date): Promise<DailyFocusStats> {
    const stats = await this.apiService.get<DailyFocusStatsDTO>('/pomodoro/stats/daily');
    return DailyFocusStats.fromDTO(stats);
  }

  /**
   * Get active session
   */
  async getActiveSession(userId: string): Promise<PomodoroSession | null> {
    try {
      const session = await this.apiService.get<PomodoroSessionDTO>('/pomodoro/session/active');
      return PomodoroSession.fromDTO(session);
    } catch (error) {
      // Return null if no active session
      return null;
    }
  }
}
