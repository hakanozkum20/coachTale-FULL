import {
  NotificationSettings,
  type RegisterPushTokenRequest,
  type TestNotificationRequest,
} from '../../core/entities';
import { INotificationRepository } from '../ports/repository.port';

/**
 * Notification Service
 * Handles notification business logic
 */
export class NotificationService {
  constructor(private readonly notificationRepository: INotificationRepository) {}

  /**
   * Register push notification token
   */
  async registerPushToken(request: RegisterPushTokenRequest): Promise<void> {
    await this.notificationRepository.registerPushToken(request);
  }

  /**
   * Unregister push notification token
   */
  async unregisterPushToken(token: string): Promise<void> {
    await this.notificationRepository.unregisterPushToken(token);
  }

  /**
   * Send test notification
   */
  async testNotification(request: TestNotificationRequest = {}): Promise<void> {
    await this.notificationRepository.testNotification(request);
  }

  /**
   * Get notification settings for user
   */
  async getSettings(userId: string): Promise<NotificationSettings> {
    return await this.notificationRepository.getSettings(userId);
  }

  /**
   * Update notification settings
   */
  async updateSettings(
    userId: string,
    settings: Partial<Omit<NotificationSettings, 'userId'>>,
  ): Promise<NotificationSettings> {
    return await this.notificationRepository.updateSettings(userId, settings);
  }

  /**
   * Enable push notifications
   */
  async enablePushNotifications(userId: string): Promise<NotificationSettings> {
    return await this.updateSettings(userId, { pushEnabled: true });
  }

  /**
   * Disable push notifications
   */
  async disablePushNotifications(userId: string): Promise<NotificationSettings> {
    return await this.updateSettings(userId, { pushEnabled: false });
  }

  /**
   * Toggle study reminders
   */
  async toggleStudyReminders(userId: string): Promise<NotificationSettings> {
    const current = await this.getSettings(userId);
    return await this.updateSettings(userId, { studyReminders: !current.studyReminders });
  }

  /**
   * Toggle pomodoro reminders
   */
  async togglePomodoroReminders(userId: string): Promise<NotificationSettings> {
    const current = await this.getSettings(userId);
    return await this.updateSettings(userId, { pomodoroReminders: !current.pomodoroReminders });
  }

  /**
   * Toggle achievement alerts
   */
  async toggleAchievementAlerts(userId: string): Promise<NotificationSettings> {
    const current = await this.getSettings(userId);
    return await this.updateSettings(userId, { achievementAlerts: !current.achievementAlerts });
  }
}
