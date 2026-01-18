/**
 * Pomodoro Session Entity
 */
export class PomodoroSession {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly duration: number,
    public readonly lesson: string | null,
    public readonly topic: string | null,
    public readonly startedAt: Date,
    public readonly endedAt: Date | null,
  ) {}

  /**
   * Check if session is active
   */
  isActive(): boolean {
    return !this.completed;
  }

  /**
   * Check if session is completed
   */
  get completed(): boolean {
    // If endedAt is in the past or completed flag is true
    if (!this.endedAt) return false;
    const now = new Date();
    return this.endedAt <= now;
  }

  /**
   * Get actual duration if completed, or planned duration if active
   */
  getActualDuration(): number {
    if (this.endedAt) {
      return Math.floor((this.endedAt.getTime() - this.startedAt.getTime()) / 1000 / 60);
    }
    return this.duration;
  }

  static fromDTO(dto: PomodoroSessionDTO): PomodoroSession {
    return new PomodoroSession(
      dto.id,
      dto.userId,
      dto.duration,
      dto.lesson ?? null,
      dto.topic ?? null,
      new Date(dto.startedAt),
      dto.endedAt ? new Date(dto.endedAt) : null,
    );
  }

  toDTO(): PomodoroSessionDTO {
    return {
      id: this.id,
      userId: this.userId,
      duration: this.duration,
      lesson: this.lesson ?? undefined,
      topic: this.topic ?? undefined,
      startedAt: this.startedAt.toISOString(),
      endedAt: this.endedAt?.toISOString(),
    };
  }
}

export interface PomodoroSessionDTO {
  id: string;
  userId: string;
  duration: number;
  lesson?: string;
  topic?: string;
  startedAt: string;
  endedAt?: string;
}

/**
 * Pomodoro Settings Entity
 */
export class PomodoroSettings {
  constructor(
    public readonly userId: string,
    public readonly workDuration: number,
    public readonly shortBreakDuration: number,
    public readonly longBreakDuration: number,
    public readonly longBreakInterval: number,
    public readonly dailyGoal: number,
    public readonly autoStartBreaks: boolean,
    public readonly autoStartPomodoros: boolean,
  ) {}

  static fromDTO(dto: PomodoroSettingsDTO): PomodoroSettings {
    return new PomodoroSettings(
      dto.userId,
      dto.workDuration,
      dto.shortBreakDuration,
      dto.longBreakDuration,
      dto.longBreakInterval,
      dto.dailyGoal,
      dto.autoStartBreaks ?? false,
      dto.autoStartPomodoros ?? false,
    );
  }

  toDTO(): PomodoroSettingsDTO {
    return {
      userId: this.userId,
      workDuration: this.workDuration,
      shortBreakDuration: this.shortBreakDuration,
      longBreakDuration: this.longBreakDuration,
      longBreakInterval: this.longBreakInterval,
      dailyGoal: this.dailyGoal,
      autoStartBreaks: this.autoStartBreaks,
      autoStartPomodoros: this.autoStartPomodoros,
    };
  }

  static createDefault(userId: string): PomodoroSettings {
    return new PomodoroSettings(userId, 25, 5, 15, 4, 8, false, false);
  }
}

export interface PomodoroSettingsDTO {
  userId: string;
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number;
  dailyGoal: number;
  autoStartBreaks?: boolean;
  autoStartPomodoros?: boolean;
}

/**
 * Daily Focus Stats Entity
 */
export class DailyFocusStats {
  constructor(
    public readonly userId: string,
    public readonly date: Date,
    public readonly totalMinutes: number,
    public readonly sessionsCompleted: number,
    public readonly lessons: Record<string, number>,
  ) {}

  static fromDTO(dto: DailyFocusStatsDTO): DailyFocusStats {
    return new DailyFocusStats(
      dto.userId,
      new Date(dto.date),
      dto.totalMinutes,
      dto.sessionsCompleted,
      dto.lessons,
    );
  }

  toDTO(): DailyFocusStatsDTO {
    return {
      userId: this.userId,
      date: this.date.toISOString().split('T')[0],
      totalMinutes: this.totalMinutes,
      sessionsCompleted: this.sessionsCompleted,
      lessons: this.lessons,
    };
  }
}

export interface DailyFocusStatsDTO {
  userId: string;
  date: string; // YYYY-MM-DD
  totalMinutes: number;
  sessionsCompleted: number;
  lessons: Record<string, number>;
}
