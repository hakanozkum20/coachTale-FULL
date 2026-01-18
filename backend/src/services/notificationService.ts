import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { NotificationRepository } from '../repositories/notificationRepository';

export class NotificationService {
    private notificationRepository: NotificationRepository;
    private expo: Expo;

    constructor() {
        this.notificationRepository = new NotificationRepository();
        this.expo = new Expo();
    }

    async sendPush(userId: string, title: string, body: string, data?: any) {
        const settings = await this.notificationRepository.getSettings(userId);
        if (settings && settings.pomodoroNotifications === "DISABLED") return;

        const pushTokens = await this.notificationRepository.getTokensByUser(userId);
        if (pushTokens.length === 0) return;

        const messages: ExpoPushMessage[] = pushTokens
            .filter(pt => Expo.isExpoPushToken(pt.token))
            .map(pt => ({ to: pt.token, sound: 'default', title, body, data }));

        const chunks = this.expo.chunkPushNotifications(messages);
        for (const chunk of chunks) {
            try {
                await this.expo.sendPushNotificationsAsync(chunk);
            } catch (error) {
                console.error('Expo sendPush error:', error);
            }
        }
    }

    async registerToken(userId: string, token: string, platform: string) {
        const existing = await this.notificationRepository.findToken(userId, token);
        if (existing) return existing;
        return await this.notificationRepository.createToken(userId, token, platform);
    }

    async unregisterToken(userId: string, token: string) {
        return await this.notificationRepository.deleteToken(userId, token);
    }
}
