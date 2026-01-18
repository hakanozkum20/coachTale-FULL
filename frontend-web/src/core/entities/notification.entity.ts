/**
 * Notification Settings Entity
 */
export class NotificationSettings {
  constructor(
    public readonly userId: string,
    public readonly pushEnabled: boolean,
    public readonly emailEnabled: boolean,
    public readonly studyReminders: boolean,
    public readonly pomodoroReminders: boolean,
    public readonly achievementAlerts: boolean,
  ) {}

  static fromDTO(dto: NotificationSettingsDTO): NotificationSettings {
    return new NotificationSettings(
      dto.userId,
      dto.pushEnabled,
      dto.emailEnabled,
      dto.studyReminders,
      dto.pomodoroReminders,
      dto.achievementAlerts,
    );
  }

  toDTO(): NotificationSettingsDTO {
    return {
      userId: this.userId,
      pushEnabled: this.pushEnabled,
      emailEnabled: this.emailEnabled,
      studyReminders: this.studyReminders,
      pomodoroReminders: this.pomodoroReminders,
      achievementAlerts: this.achievementAlerts,
    };
  }

  static createDefault(userId: string): NotificationSettings {
    return new NotificationSettings(userId, true, true, true, true, true);
  }
}

export interface NotificationSettingsDTO {
  userId: string;
  pushEnabled: boolean;
  emailEnabled: boolean;
  studyReminders: boolean;
  pomodoroReminders: boolean;
  achievementAlerts: boolean;
}

/**
 * Push Token Entity
 */
export class PushToken {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly token: string,
    public readonly platform: 'ios' | 'android' | 'web',
    public readonly createdAt: Date,
  ) {}

  static fromDTO(dto: PushTokenDTO): PushToken {
    return new PushToken(dto.id, dto.userId, dto.token, dto.platform, new Date(dto.createdAt));
  }

  toDTO(): PushTokenDTO {
    return {
      id: this.id,
      userId: this.userId,
      token: this.token,
      platform: this.platform,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export interface PushTokenDTO {
  id: string;
  userId: string;
  token: string;
  platform: 'ios' | 'android' | 'web';
  createdAt: string;
}

/**
 * Register Push Token Request
 */
export interface RegisterPushTokenRequest {
  token: string;
  platform: 'ios' | 'android' | 'web';
}

/**
 * Test Notification Request
 */
export interface TestNotificationRequest {
  title?: string;
  body?: string;
}
