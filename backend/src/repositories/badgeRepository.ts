import prisma from '../config/database';
import { Badge, UserBadge } from '../generated/prisma';

export class BadgeRepository {
    async findAll(): Promise<Badge[]> {
        return await prisma.badge.findMany();
    }

    async findById(id: string): Promise<Badge | null> {
        return await prisma.badge.findUnique({ where: { id } });
    }

    async findByCriteriaKey(criteriaKey: string): Promise<Badge | null> {
        return await prisma.badge.findUnique({ where: { criteriaKey } });
    }

    async create(data: { name: string; description: string; imageUrl?: string; criteriaKey?: string }): Promise<Badge> {
        return await prisma.badge.create({ data });
    }

    async delete(id: string): Promise<Badge> {
        return await prisma.badge.delete({ where: { id } });
    }

    async getUserBadges(userId: string): Promise<(UserBadge & { badge: Badge })[]> {
        return await prisma.userBadge.findMany({
            where: { userId },
            include: { badge: true }
        });
    }

    async findUserBadge(userId: string, badgeId: string): Promise<UserBadge | null> {
        return await prisma.userBadge.findFirst({
            where: { userId, badgeId }
        });
    }

    async awardBadge(userId: string, badgeId: string): Promise<UserBadge> {
        return await prisma.userBadge.create({
            data: {
                userId,
                badgeId
            }
        });
    }
}
