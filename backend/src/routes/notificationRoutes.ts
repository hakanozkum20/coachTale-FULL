import express from 'express';
import { handleRegisterToken, handleUnregisterToken, testNotification } from '../controllers/notificationController';
import { authenticateToken, authorizeAccess } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.post('/register', authorizeAccess, handleRegisterToken);
router.post('/unregister', authorizeAccess, handleUnregisterToken);
router.post('/test', authorizeAccess, testNotification);

export default router;
