import prisma from '../config/database';
import { User, PlanType } from '../generated/prisma';
import { debugLog } from '../utils/logger';

export class UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { email } });
    }

    async findById(id: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id } });
    }

    async create(data: any): Promise<User> {
        return await prisma.user.create({ data });
    }

    /**
     * Kullanıcıyı günceller veya yoksa oluşturur.
     * Google OAuth ve Appwrite senkronizasyonu için kritik metottur.
     */
    async upsertUser(email: string, data: { name?: string; avatarUrl?: string; plan?: PlanType, googleId?: string }): Promise<User> {
        debugLog(`[UserRepository] Upserting user: ${email}`);
        try {
            const user = await prisma.user.upsert({
                where: { email },
                update: {
                    name: data.name,
                    avatarUrl: data.avatarUrl,
                    googleId: data.googleId,
                    updatedAt: new Date()
                },
                create: {
                    email,
                    name: data.name || email.split('@')[0],
                    avatarUrl: data.avatarUrl,
                    plan: data.plan || 'FREE',
                    googleId: data.googleId,
                },
            });
            debugLog(`[UserRepository] Upsert SUCCESS for ${email} -> PrismaID: ${user.id}`);
            return user;
        } catch (error: any) {
            debugLog(`[UserRepository] Upsert ERROR for ${email}: ${error.message}`);
            throw new Error(`Database upsert failed: ${error.message}`);
        }
    }
}
