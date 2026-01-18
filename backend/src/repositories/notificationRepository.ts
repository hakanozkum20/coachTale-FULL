import prisma from '../config/database';
import { NotificationSettings, PushToken } from '../generated/prisma';

export class NotificationRepository {
    async getSettings(userId: string): Promise<NotificationSettings | null> {
        return await prisma.notificationSettings.findUnique({ where: { userId } });
    }

    async upsertSettings(userId: string, data: any): Promise<NotificationSettings> {
        return await prisma.notificationSettings.upsert({
            where: { userId },
            update: data,
            create: { userId, ...data }
        });
    }

    async findToken(userId: string, token: string): Promise<PushToken | null> {
        return await prisma.pushToken.findFirst({
            where: { userId, token }
        });
    }

    async createToken(userId: string, token: string, platform: string): Promise<PushToken> {
        return await prisma.pushToken.create({
            data: { userId, token, platform }
        });
    }

    async deleteToken(userId: string, token: string): Promise<any> {
        return await prisma.pushToken.deleteMany({
            where: { userId, token }
        });
    }

    async getTokensByUser(userId: string): Promise<PushToken[]> {
        return await prisma.pushToken.findMany({
            where: { userId }
        });
    }
}
