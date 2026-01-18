import express from 'express';
import { getAllBadges, getMyBadges, createBadge, deleteBadge } from '../controllers/badgeController';
import { authenticateToken, isAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /badges:
 *   get:
 *     summary: Tüm badge'leri listele
 *     tags: [Badges]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Badge listesi
 */
router.get('/', authenticateToken, getAllBadges);

/**
 * @swagger
 * /badges/me:
 *   get:
 *     summary: Kullanıcının kazandığı badge'leri listele
 *     tags: [Badges]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kullanıcının badge listesi
 */
router.get('/me', authenticateToken, getMyBadges);

/**
 * @swagger
 * /badges:
 *   post:
 *     summary: Yeni bir badge oluştur (Admin)
 *     tags: [Badges]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Pomodoro Starter"
 *               description:
 *                 type: string
 *                 example: "İlk Pomodoro seansını tamamla!"
 *               imageUrl:
 *                 type: string
 *                 example: "https://example.com/badge.png"
 *               criteriaKey:
 *                 type: string
 *                 example: "POMODORO_1"
 *                 description: "Otomatik kazanım için anahtar (Örn: POMODORO_1, SOLUTION_5)"
 *     responses:
 *       201:
 *         description: Badge başarıyla oluşturuldu
 */
router.post('/', authenticateToken, isAdmin, createBadge);

/**
 * @swagger
 * /badges/{id}:
 *   delete:
 *     summary: Bir badge'i sil (Admin)
 *     tags: [Badges]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Silinecek badge ID'si
 *     responses:
 *       200:
 *         description: Badge başarıyla silindi
 */
router.delete('/:id', authenticateToken, isAdmin, deleteBadge);

export default router;
