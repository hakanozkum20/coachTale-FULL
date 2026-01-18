import { Request, Response } from 'express';
import { NotificationService } from '../services/notificationService';

const notificationService = new NotificationService();

export const handleRegisterToken = async (req: any, res: Response) => {
    const { token, platform } = req.body;
    try {
        const pushToken = await notificationService.registerToken(req.user.effectiveId, token, platform);
        res.status(201).json(pushToken);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const handleUnregisterToken = async (req: any, res: Response) => {
    const { token } = req.body;
    try {
        await notificationService.unregisterToken(req.user.effectiveId, token);
        res.status(200).json({ message: 'Token unregistered' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const testNotification = async (req: any, res: Response) => {
    try {
        await notificationService.sendPush(
            req.user.effectiveId,
            'Test Bildirimi',
            'Sisteminiz başarıyla çalışıyor! 🚀'
        );
        res.status(200).json({ message: 'Test notification sent' });
    } catch (error) {
        res.status(500).json({ message: 'Notification failed' });
    }
};
