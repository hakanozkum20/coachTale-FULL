import { Response } from 'express';
import { ExamService } from '../services/examService';

const examService = new ExamService();

export const createExamResult = async (req: any, res: Response) => {
    try {
        const result = await examService.addExamResult(req.user.effectiveId, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getMyExamResults = async (req: any, res: Response) => {
    try {
        const results = await examService.getResults(req.user.effectiveId);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const analyzeExamPerformance = async (req: any, res: Response) => {
    try {
        const analysis = await examService.analyzePerformance(req.user.effectiveId);
        res.status(200).json(analysis);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
