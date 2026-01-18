import jwt from 'jsonwebtoken';
import { User, Role } from '../generated/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
// Extended expiry for mobile-friendly experience (30 days)
const ACCESS_TOKEN_EXPIRY = '30d';
const REFRESH_TOKEN_EXPIRY = '30d';

export const generateTokens = (user: User) => {
    const accessToken = jwt.sign(
        { userId: user.id, role: user.role, plan: user.plan },
        JWT_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        JWT_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRY }
    );

    return { accessToken, refreshToken };
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};
