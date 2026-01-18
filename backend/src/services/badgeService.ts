import { BadgeRepository } from '../repositories/badgeRepository';
import { PomodoroRepository } from '../repositories/pomodoroRepository';
import { SolutionRepository } from '../repositories/solutionRepository';
import { ExamRepository } from '../repositories/examRepository';
import { Badge, UserBadge } from '../generated/prisma';

export class BadgeService {
    private badgeRepository: BadgeRepository;
    private pomodoroRepository: PomodoroRepository;
    private solutionRepository: SolutionRepository;
    private examRepository: ExamRepository;

    constructor() {
        this.badgeRepository = new BadgeRepository();
        this.pomodoroRepository = new PomodoroRepository();
        this.solutionRepository = new SolutionRepository();
        this.examRepository = new ExamRepository();
    }

    async getAllBadges(): Promise<Badge[]> {
        return await this.badgeRepository.findAll();
    }

    async getUserBadges(userId: string): Promise<(UserBadge & { badge: Badge })[]> {
        return await this.badgeRepository.getUserBadges(userId);
    }

    async createBadge(data: { name: string; description: string; imageUrl?: string; criteriaKey?: string }): Promise<Badge> {
        return await this.badgeRepository.create(data);
    }

    async deleteBadge(id: string): Promise<Badge> {
        return await this.badgeRepository.delete(id);
    }

    async checkAndAward(userId: string, eventType: 'POMODORO' | 'SOLUTION' | 'EXAM'): Promise<UserBadge[]> {
        const newlyAwarded: UserBadge[] = [];
        const earnedBadges = await this.badgeRepository.getUserBadges(userId);
        const earnedCriteriaKeys = new Set(earnedBadges.map(ub => ub.badge.criteriaKey).filter(k => k !== null));

        if (eventType === 'POMODORO') {
            const count = await this.pomodoroRepository.countTotalCompletedSessions(userId);

            const pomodoroMilestones = [
                { key: 'POMODORO_1', threshold: 1 },
                { key: 'POMODORO_10', threshold: 10 },
                { key: 'POMODORO_50', threshold: 50 }
            ];

            for (const milestone of pomodoroMilestones) {
                if (count >= milestone.threshold && !earnedCriteriaKeys.has(milestone.key)) {
                    const ub = await this.awardByCriteria(userId, milestone.key);
                    if (ub) newlyAwarded.push(ub);
                }
            }

            // Early Bird check
            if (!earnedCriteriaKeys.has('MORNING_FOCUS')) {
                const isEarlyBird = await this.pomodoroRepository.hasSessionBefore(userId, 8);
                if (isEarlyBird) {
                    const ub = await this.awardByCriteria(userId, 'MORNING_FOCUS');
                    if (ub) newlyAwarded.push(ub);
                }
            }
        }

        if (eventType === 'SOLUTION') {
            const count = await this.solutionRepository.countTotal(userId);
            if (count >= 5 && !earnedCriteriaKeys.has('SOLUTION_5')) {
                const ub = await this.awardByCriteria(userId, 'SOLUTION_5');
                if (ub) newlyAwarded.push(ub);
            }
        }

        if (eventType === 'EXAM') {
            const count = await this.examRepository.countTotalResults(userId);
            if (count >= 1 && !earnedCriteriaKeys.has('EXAM_1')) {
                const ub = await this.awardByCriteria(userId, 'EXAM_1');
                if (ub) newlyAwarded.push(ub);
            }
        }

        return newlyAwarded;
    }

    private async awardByCriteria(userId: string, criteriaKey: string): Promise<UserBadge | null> {
        const badge = await this.badgeRepository.findByCriteriaKey(criteriaKey);
        if (!badge) return null;

        // Check again to be safe
        const existing = await this.badgeRepository.findUserBadge(userId, badge.id);
        if (existing) return null;

        return await this.badgeRepository.awardBadge(userId, badge.id);
    }
}
