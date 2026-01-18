import express from 'express';
import {
    getPomodoroSettings,
    updatePomodoroSettings,
    startPomodoroSession,
    completePomodoroSession,
    getDailyStats,
    getActiveSession
} from '../controllers/pomodoroController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';

const router = express.Router();

// Tüm rotalar öncelikle kimlik doğrulaması gerektirir
router.use(authenticateToken);

/**
 * @swagger
 * tags:
 *   name: Pomodoro
 *   description: Pomodoro ve odak takibi işlemleri
 */

router.get('/settings', authorizeAccess, getPomodoroSettings);
router.post('/settings', authorizeAccess, updatePomodoroSettings);
router.post('/session/start', authorizeAccess, startPomodoroSession);
router.post('/session/:sessionId/complete', authorizeAccess, completePomodoroSession);
router.get('/session/active', authorizeAccess, getActiveSession);
router.get('/stats/daily', authorizeAccess, getDailyStats);

export default router;
