import { Response } from 'express';
import { SolutionService } from '../services/solutionService';

const solutionService = new SolutionService();

export const handlePhotoSolution = async (req: any, res: Response) => {
    try {
        const solution = await solutionService.solveAndSave(req.user.effectiveId, req.user.plan || 'FREE', req.body);
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getMySolutions = async (req: any, res: Response) => {
    try {
        const solutions = await solutionService.getHistory(req.user.effectiveId);
        res.status(200).json(solutions);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
