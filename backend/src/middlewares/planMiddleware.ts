import { Response, NextFunction } from 'express';
import { AIRepository } from '../repositories/aiRepository';
import { SolutionRepository } from '../repositories/solutionRepository';
import { ExamRepository } from '../repositories/examRepository';

const aiRepo = new AIRepository();
const solutionRepo = new SolutionRepository();
const examRepo = new ExamRepository();

const LIMITS = {
    FREE: { chat: 10, photo: 5, plan: 1 },
    STANDARD: { chat: 25, photo: 15, plan: 3 },
    PREMIUM: { chat: Infinity, photo: Infinity, plan: Infinity }
};

export const checkPlanLimits = (type: 'chat' | 'photo' | 'plan') => {
    return async (req: any, res: Response, next: NextFunction) => {
        try {
            const userId = req.user.userId;
            const plan = req.user.plan || 'FREE';

            if (plan === 'PREMIUM') return next();

            let currentUsage = 0;
            if (type === 'chat') {
                currentUsage = await aiRepo.countMessagesInLastWeek(userId);
            } else if (type === 'photo') {
                currentUsage = await solutionRepo.countInLastWeek(userId);
            } else if (type === 'plan') {
                currentUsage = await examRepo.countPlansInLastWeek(userId);
            }

            const limit = LIMITS[plan as keyof typeof LIMITS][type];

            if (currentUsage >= limit) {
                return res.status(403).json({
                    message: `Weekly limit for ${type} reached (${limit}).`,
                    currentUsage,
                    limit,
                    plan
                });
            }

            next();
        } catch (error) {
            res.status(500).json({ message: 'Limit check failed' });
        }
    };
};
