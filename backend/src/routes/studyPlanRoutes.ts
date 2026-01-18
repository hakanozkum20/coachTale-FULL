import express from 'express';
import { generateStudyPlan, getMyPlans } from '../controllers/studyPlanController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';
import { checkPlanLimits } from '../middlewares/planMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.post('/generate', authorizeAccess, checkPlanLimits('plan'), generateStudyPlan);
router.get('/', authorizeAccess, getMyPlans);

export default router;
