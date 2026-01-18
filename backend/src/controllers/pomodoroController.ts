import { Response } from 'express';
import { PomodoroService } from '../services/pomodoroService';

const pomodoroService = new PomodoroService();

export const getPomodoroSettings = async (req: any, res: Response) => {
    try {
        const settings = await pomodoroService.getSettings(req.user.effectiveId);
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updatePomodoroSettings = async (req: any, res: Response) => {
    try {
        const settings = await pomodoroService.updateSettings(req.user.effectiveId, req.body);
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const startPomodoroSession = async (req: any, res: Response) => {
    try {
        const session = await pomodoroService.startSession(req.user.effectiveId, req.body);
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const completePomodoroSession = async (req: any, res: Response) => {
    const { sessionId } = req.params;
    try {
        const session = await pomodoroService.completeSession(sessionId, req.user.effectiveId);
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getDailyStats = async (req: any, res: Response) => {
    try {
        const stats = await pomodoroService.getDailyStats(req.user.effectiveId);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        res.status(200).json({
            userId: req.user.effectiveId,
            date: today.toISOString().split('T')[0],
            totalMinutes: stats.totalFocusMinutes || 0,
            sessionsCompleted: stats.sessionsCompleted || 0,
            lessons: {} // Track lesson breakdown in future
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getActiveSession = async (req: any, res: Response) => {
    try {
        const session = await pomodoroService.getActiveSession(req.user.effectiveId);
        if (!session) {
            return res.status(404).json({ message: 'No active session found' });
        }
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
