import { Request, Response } from 'express';
import { BadgeService } from '../services/badgeService';

const badgeService = new BadgeService();

export const getAllBadges = async (req: Request, res: Response) => {
    try {
        const badges = await badgeService.getAllBadges();
        res.status(200).json(badges);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getMyBadges = async (req: any, res: Response) => {
    try {
        const userId = req.user.id;
        const badges = await badgeService.getUserBadges(userId);
        res.status(200).json(badges);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createBadge = async (req: Request, res: Response) => {
    try {
        // Validation could be added here (e.g., Zod)
        const badge = await badgeService.createBadge(req.body);
        res.status(201).json(badge);
    } catch (error) {
        res.status(500).json({ message: 'Error creating badge' });
    }
};

export const deleteBadge = async (req: Request, res: Response) => {
    try {
        await badgeService.deleteBadge(req.params.id);
        res.status(200).json({ message: 'Badge deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting badge' });
    }
};
