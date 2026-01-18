import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import authRoutes from './routes/authRoutes';
import pomodoroRoutes from './routes/pomodoroRoutes';
import notificationRoutes from './routes/notificationRoutes';
import aiRoutes from './routes/aiRoutes';
import solutionRoutes from './routes/solutionRoutes';
import examRoutes from './routes/examRoutes';
import studyPlanRoutes from './routes/studyPlanRoutes';
import badgeRoutes from './routes/badgeRoutes';
import { Request, Response } from 'express';

const app = express();


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true
}));

// Request Logger (Terminal ve debug.log için)
import { debugLog } from './utils/logger';
app.use((req, res, next) => {
    debugLog(`[REQUEST] ${req.method} ${req.url}`);
    next();
});

// Helmet CSP ayarı: Inline scriptlere (Bridge için) ve Google fontlarına izin ver
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"], // Köprü scripti için gerekli
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https:", "https://ui-avatars.com"],
            connectSrc: ["'self'", "https://api.estatech.dev"]
        },
    },
}));

app.use(morgan('dev'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pomodoro', pomodoroRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/study-plans', studyPlanRoutes);
app.use('/api/badges', badgeRoutes);


// Health Check with Database verification
import prisma from './config/database';
app.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.status(200).json({ status: 'OK', database: 'Connected', message: 'Backend is running' });
    } catch (error: any) {
        res.status(500).json({ status: 'ERROR', database: 'Disconnected', error: error.message });
    }
});


export default app;
