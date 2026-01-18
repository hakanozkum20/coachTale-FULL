import express from 'express';
import { handleAIChat, getChatSessions, getChatHistory } from '../controllers/aiController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';
import { checkPlanLimits } from '../middlewares/planMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.post('/chat', authorizeAccess, checkPlanLimits('chat'), handleAIChat);
router.get('/sessions', authorizeAccess, getChatSessions);
router.get('/sessions/:sessionId/history', authorizeAccess, getChatHistory);

export default router;
