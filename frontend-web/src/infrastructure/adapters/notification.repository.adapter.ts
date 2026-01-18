import {
  NotificationSettings,
  type RegisterPushTokenRequest,
  type TestNotificationRequest,
  type NotificationSettingsDTO,
} from '../../core/entities';
import { INotificationRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Notification Repository Adapter
 */
export class NotificationRepositoryAdapter implements INotificationRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Register push notification token
   */
  async registerPushToken(request: RegisterPushTokenRequest): Promise<void> {
    await this.apiService.post<void>('/notifications/register', request);
  }

  /**
   * Unregister push notification token
   */
  async unregisterPushToken(token: string): Promise<void> {
    await this.apiService.post<void>('/notifications/unregister', { token });
  }

  /**
   * Send test notification
   */
  async testNotification(request: TestNotificationRequest = {}): Promise<void> {
    await this.apiService.post<void>('/notifications/test', request);
  }

  /**
   * Get notification settings
   */
  async getSettings(userId: string): Promise<NotificationSettings> {
    const settings = await this.apiService.get<NotificationSettingsDTO>('/notifications/settings', {
      userId,
    });
    return NotificationSettings.fromDTO(settings);
  }

  /**
   * Update notification settings
   */
  async updateSettings(
    userId: string,
    settings: Partial<Omit<NotificationSettings, 'userId'>>,
  ): Promise<NotificationSettings> {
    const updated = await this.apiService.post<NotificationSettingsDTO>(
      '/notifications/settings',
      {
        userId,
        ...settings,
      },
    );
    return NotificationSettings.fromDTO(updated);
  }
}
