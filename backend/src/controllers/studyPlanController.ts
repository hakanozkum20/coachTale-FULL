import { Response } from 'express';
import { ExamService } from '../services/examService';

const examService = new ExamService();

export const generateStudyPlan = async (req: any, res: Response) => {
    try {
        const plan = await examService.generateWeeklyPlan(req.user.effectiveId, req.user.plan || 'FREE');
        res.status(201).json(plan);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getMyPlans = async (req: any, res: Response) => {
    try {
        const plans = await examService.getStudyPlans(req.user.effectiveId);
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
