import OpenAI from 'openai';
import { PlanType } from '../generated/prisma';
import { AIRepository } from '../repositories/aiRepository';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'fake_key',
});

const MODELS = {
    ECONOMY: 'gpt-4o-mini',
    STRONG: 'gpt-4o',
};

export class AIService {
    private aiRepository: AIRepository;

    constructor() {
        this.aiRepository = new AIRepository();
    }

    async classifyIntent(message: string): Promise<{ isEducational: boolean; reasoning: string }> {
        try {
            const response = await openai.chat.completions.create({
                model: MODELS.ECONOMY,
                messages: [
                    {
                        role: 'system',
                        content: `You are an intent classifier for an educational AI coach. JSON: { "isEducational": boolean, "reasoning": "string" }`
                    },
                    { role: 'user', content: message }
                ],
                response_format: { type: 'json_object' }
            });
            return JSON.parse(response.choices[0].message.content || '{}');
        } catch (error) {
            return { isEducational: true, reasoning: 'Fallback' };
        }
    }

    async getChatResponse(params: { plan: PlanType; messages: any[] }) {
        const { plan, messages } = params;
        const model = (plan === 'PREMIUM') ? MODELS.STRONG : MODELS.ECONOMY;
        const response = await openai.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: 'You are an education coach.' },
                ...messages
            ]
        });
        return response.choices[0].message;
    }

    async getSessions(userId: string) {
        return await this.aiRepository.getSessionsByUser(userId);
    }

    async getHistory(sessionId: string) {
        return await this.aiRepository.getMessagesBySession(sessionId);
    }

    async saveMessage(sessionId: string, role: string, content: string) {
        return await this.aiRepository.createMessage(sessionId, role, content);
    }

    async getOrCreateSession(userId: string, sessionId?: string, initialTitle?: string) {
        if (sessionId) {
            const session = await this.aiRepository.findSessionById(sessionId, userId);
            if (session) return session;
        }
        return await this.aiRepository.createSession(userId, initialTitle || 'New Chat');
    }
}

/**
 * Static helpers for vision logic (to keep solveQuestionFromImage accessible if needed)
 */
export const solveQuestionFromImage = async (params: {
    plan: PlanType;
    imageUrl?: string;
    imageBuffer?: string;
}) => {
    const { imageUrl, imageBuffer } = params;
    const response = await openai.chat.completions.create({
        model: MODELS.STRONG,
        messages: [
            {
                role: 'user',
                content: [
                    { type: 'text', text: 'Solve this question.' },
                    imageUrl ? { type: 'image_url', image_url: { url: imageUrl } } : { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBuffer}` } }
                ] as any
            }
        ],
        max_tokens: 1000
    });
    return response.choices[0].message;
};

// For backward compatibility during migration
export const getAIResponse = async (p: any) => {
    const service = new AIService();
    return await service.getChatResponse(p);
};
