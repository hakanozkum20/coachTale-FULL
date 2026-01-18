import express from 'express';
import { createExamResult, getMyExamResults, analyzeExamPerformance } from '../controllers/examController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.post('/results', authorizeAccess, createExamResult);
router.get('/results', authorizeAccess, getMyExamResults);
router.get('/analysis', authorizeAccess, analyzeExamPerformance);

export default router;
