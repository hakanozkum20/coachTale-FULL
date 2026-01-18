import prisma from '../config/database';
import { ExamResult, ExamType, StudyPlan, ExamDetail } from '../generated/prisma';

export type ExamResultWithDetails = ExamResult & { details: ExamDetail[] };

export class ExamRepository {
    async createResult(userId: string, data: any): Promise<ExamResultWithDetails> {
        const { examType, name, date, score, details } = data;
        return await prisma.examResult.create({
            data: {
                userId,
                examType: examType as ExamType,
                name,
                date: date ? new Date(date) : new Date(),
                score,
                details: { create: details }
            },
            include: { details: true }
        }) as ExamResultWithDetails;
    }

    async getResultsByUser(userId: string): Promise<ExamResultWithDetails[]> {
        return await prisma.examResult.findMany({
            where: { userId },
            include: { details: true },
            orderBy: { date: 'desc' }
        }) as ExamResultWithDetails[];
    }

    async getRecentResults(userId: string, take: number = 5): Promise<ExamResultWithDetails[]> {
        return await prisma.examResult.findMany({
            where: { userId },
            include: { details: true },
            orderBy: { date: 'desc' },
            take
        }) as ExamResultWithDetails[];
    }

    async createStudyPlan(userId: string, data: any): Promise<StudyPlan> {
        return await prisma.studyPlan.create({
            data: { userId, ...data }
        });
    }

    async getPlansByUser(userId: string): Promise<StudyPlan[]> {
        return await prisma.studyPlan.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async countPlansInLastWeek(userId: string): Promise<number> {
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        return await prisma.studyPlan.count({
            where: {
                userId,
                createdAt: { gte: oneWeekAgo }
            }
        });
    }

    async countTotalResults(userId: string): Promise<number> {
        return await prisma.examResult.count({
            where: { userId }
        });
    }
}
