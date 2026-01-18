import prisma from '../config/database';
import { QuestionSolution } from '../generated/prisma';

export class SolutionRepository {
    async create(userId: string, data: any): Promise<QuestionSolution> {
        return await prisma.questionSolution.create({
            data: { userId, ...data }
        });
    }

    async getByUser(userId: string): Promise<QuestionSolution[]> {
        return await prisma.questionSolution.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async countInLastWeek(userId: string): Promise<number> {
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        return await prisma.questionSolution.count({
            where: {
                userId,
                createdAt: { gte: oneWeekAgo }
            }
        });
    }

    async countTotal(userId: string): Promise<number> {
        return await prisma.questionSolution.count({
            where: { userId }
        });
    }
}
