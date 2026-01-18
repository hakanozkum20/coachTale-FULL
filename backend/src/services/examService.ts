import { ExamRepository, ExamResultWithDetails } from '../repositories/examRepository';
import { AIRepository } from '../repositories/aiRepository';
import { BadgeService } from './badgeService';
import { getAIResponse } from './aiService';
import { ExamResult, StudyPlan, ExamDetail } from '../generated/prisma';

export class ExamService {
    private examRepository: ExamRepository;
    private aiRepository: AIRepository;
    private badgeService: BadgeService;

    constructor() {
        this.examRepository = new ExamRepository();
        this.aiRepository = new AIRepository();
        this.badgeService = new BadgeService();
    }

    async addExamResult(userId: string, data: any): Promise<ExamResultWithDetails> {
        const result = await this.examRepository.createResult(userId, data);

        // Badge check
        await this.badgeService.checkAndAward(userId, 'EXAM');

        return result;
    }

    async getResults(userId: string): Promise<ExamResultWithDetails[]> {
        return await this.examRepository.getResultsByUser(userId);
    }

    async analyzePerformance(userId: string) {
        const results = await this.examRepository.getRecentResults(userId, 5);
        if (results.length === 0) return { message: 'No data' };

        const topicStats: Record<string, { correct: number, total: number }> = {};
        results.forEach(exam => {
            exam.details.forEach((detail: ExamDetail) => {
                const key = `${detail.lesson} - ${detail.topic || 'Genel'}`;
                if (!topicStats[key]) topicStats[key] = { correct: 0, total: 0 };
                topicStats[key].correct += detail.correct;
                topicStats[key].total += (detail.correct + detail.incorrect + detail.empty);
            });
        });

        const analysis = Object.entries(topicStats).map(([topic, stats]) => ({
            topic,
            accuracy: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0
        })).sort((a, b) => a.accuracy - b.accuracy);

        return { darkestTopics: analysis.slice(0, 5), fullAnalysis: analysis };
    }

    async generateWeeklyPlan(userId: string, planType: string): Promise<StudyPlan> {
        const results = await this.examRepository.getRecentResults(userId, 3);
        const studentProfile = results.map(r => ({
            type: r.examType,
            details: r.details.map(d => ({ lesson: d.lesson, topic: d.topic, success: d.net }))
        }));

        const aiResponse = await getAIResponse({
            plan: planType as any,
            messages: [{
                role: 'user',
                content: `Build a weekly study plan based on: ${JSON.stringify(studentProfile)}`
            }],
            systemPrompt: 'You are a career coach. Return markdown.'
        });

        return await this.examRepository.createStudyPlan(userId, {
            startDate: new Date(),
            endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            content: (aiResponse as any).content || '',
            status: 'ACTIVE'
        });
    }

    async getStudyPlans(userId: string): Promise<StudyPlan[]> {
        return await this.examRepository.getPlansByUser(userId);
    }
}
