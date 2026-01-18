import { Response } from 'express';
import { AIService } from '../services/aiService';

const aiService = new AIService();

export const handleAIChat = async (req: any, res: Response) => {
    const { sessionId, message } = req.body;
    const userId = req.user.effectiveId;
    const plan = req.user.plan || 'FREE';

    if (!message) return res.status(400).json({ message: 'Message is required' });

    try {
        const intent = await aiService.classifyIntent(message);
        if (!intent.isEducational) {
            return res.status(400).json({
                message: 'Non-educational content detected.',
                reasoning: intent.reasoning
            });
        }

        const session = await aiService.getOrCreateSession(userId, sessionId, message.substring(0, 30));
        const history = await aiService.getHistory(session.id);

        const messages = [
            ...history.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: message }
        ];

        const aiResponse = await aiService.getChatResponse({ plan, messages });

        await aiService.saveMessage(session.id, 'user', message);
        const assistantMessage = await aiService.saveMessage(session.id, 'assistant', (aiResponse as any).content || '');

        res.status(200).json({ sessionId: session.id, message: assistantMessage });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getChatSessions = async (req: any, res: Response) => {
    try {
        const sessions = await aiService.getSessions(req.user.effectiveId);
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getChatHistory = async (req: any, res: Response) => {
    try {
        const history = await aiService.getHistory(req.params.sessionId);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
