import { SolutionRepository } from '../repositories/solutionRepository';
import { BadgeService } from './badgeService';
import { solveQuestionFromImage } from './aiService';
import { QuestionSolution, PlanType } from '../generated/prisma';

export class SolutionService {
    private solutionRepository: SolutionRepository;
    private badgeService: BadgeService;

    constructor() {
        this.solutionRepository = new SolutionRepository();
        this.badgeService = new BadgeService();
    }

    async solveAndSave(userId: string, plan: PlanType, data: any): Promise<QuestionSolution> {
        const { imageUrl, imageBase64, lesson } = data;

        const aiResponse = await solveQuestionFromImage({
            plan,
            imageUrl,
            imageBuffer: imageBase64
        });

        const solutionText = (aiResponse as any).content || '';

        const solution = await this.solutionRepository.create(userId, {
            imageUrl: imageUrl || 'base64_stored',
            ocrText: 'Extracted via Vision',
            solution: solutionText,
            lesson: lesson || 'General'
        });

        // Badge check
        await this.badgeService.checkAndAward(userId, 'SOLUTION');

        return solution;
    }

    async getHistory(userId: string): Promise<QuestionSolution[]> {
        return await this.solutionRepository.getByUser(userId);
    }
}
