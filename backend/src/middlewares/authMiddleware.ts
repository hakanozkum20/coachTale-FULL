import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface AuthRequest extends Request {
    user?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    if (!token) {
        return res.status(401).json({ message: 'Erişim engellendi. Token bulunamadı.' });
    }

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: 'Token geçersiz veya süresi dolmuş.' });
        }
        req.user = user;
        next();
    });
};

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === 'ADMIN') {
        next();
    } else {
        res.status(403).json({ message: 'Bu işlem için yetkiniz yok. Sadece yöneticiler erişebilir.' });
    }
};

/**
 * Bu middleware hem sahiplik (Ownership) hem de yetki (RBAC) kontrolü yapar.
 * Akış:
 * 1. Admin ise her şeye erişebilir.
 * 2. Kullanıcı kendisi ise erişebilir.
 * 3. Veli ise ve hedef kullanıcı onun öğrencisi ise erişebilir.
 */
export const authorizeAccess = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const requester = req.user;
    if (!requester) return res.status(401).json({ message: 'Unauthorized' });

    // Hedef kullanıcı ID'sini parametreden, query'den veya varsayılan olarak kendisinden al
    const targetUserId = req.params.userId || req.query.userId || requester.userId;

    // 1. Admin her zaman geçer
    if (requester.role === 'ADMIN') {
        req.user.effectiveId = targetUserId;
        return next();
    }

    // 2. Kendi verisi ise geçer
    if (requester.userId === targetUserId) {
        req.user.effectiveId = requester.userId;
        return next();
    }

    // 3. Veli kontrolü
    if (requester.role === 'PARENT') {
        const prisma = (await import('../config/database')).default;
        const student = await prisma.user.findFirst({
            where: {
                id: targetUserId,
                parentId: requester.userId
            }
        });

        if (student) {
            req.user.effectiveId = targetUserId;
            return next();
        }
    }

    return res.status(403).json({
        message: 'Bu veriye erişim yetkiniz yok. Sadece kendi verilerinize, öğrencilerinize veya yönetici olarak tüm verilere erişebilirsiniz.'
    });
};
