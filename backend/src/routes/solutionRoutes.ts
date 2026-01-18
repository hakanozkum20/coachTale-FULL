import express from 'express';
import { handlePhotoSolution, getMySolutions } from '../controllers/solutionController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';
import { checkPlanLimits } from '../middlewares/planMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.post('/solve', authorizeAccess, checkPlanLimits('photo'), handlePhotoSolution);
router.get('/history', authorizeAccess, getMySolutions);

export default router;
