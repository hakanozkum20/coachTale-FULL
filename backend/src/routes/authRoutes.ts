import express from 'express';
import { googleAuth, refreshToken, logout, getMe, initiateOAuth, handleOAuthCallback, syncUserWithAppwrite } from '../controllers/authController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   get:
 *     summary: Initiate Google OAuth flow
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Redirect URL
 */
router.get('/login', initiateOAuth);

/**
 * @swagger
 * /auth/callback:
 *   get:
 *     summary: Handle OAuth callback
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: secret
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Login successful
 */
router.get('/callback', handleOAuthCallback);

router.get('/fail', (req, res) => {
    res.status(400).json({ message: "OAuth Login Failed" });
});

/**
 * @swagger
 * /auth/sync:
 *   post:
 *     summary: Bridge (Köprü) üzerinden gelen Appwrite session ile kullanıcıyı kaydet/güncelle
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - secret
 *             properties:
 *               userId:
 *                 type: string
 *               secret:
 *                 type: string
 *     responses:
 *       200:
 *         description: Senkronizasyon başarılı
 */
router.post('/sync', syncUserWithAppwrite);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Kimlik doğrulama işlemleri
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Geçerli kullanıcının bilgilerini getir
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kullanıcı bilgileri
 *       401:
 *         description: Yetkisiz erişim
 */
router.get('/me', authenticateToken, getMe);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Kullanıcı profilini getir (Kendi, Öğrencisi veya Admin her kullanıcı)
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         description: Hedef kullanıcı ID (Admin/Veli için)
 *     responses:
 *       200:
 *         description: Kullanıcı bilgileri
 */
router.get('/profile', authenticateToken, (require('../middlewares/authMiddleware')).authorizeAccess, getMe);

/**
 * @swagger
 * /auth/google:
 *   post:
 *     summary: Google ile giriş yap veya kayıt ol
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - googleId
 *             properties:
 *               email:
 *                 type: string
 *               googleId:
 *                 type: string
 *               name:
 *                 type: string
 *               avatarUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Başarılı giriş
 *       400:
 *         description: Eksik bilgi
 */
router.post('/google', googleAuth);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Access token yenileme
 *     tags: [Auth]
 *     responses:
 *       501:
 *         description: Henüz implement edilmedi
 */
router.post('/refresh', refreshToken);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Çıkış yap
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Başarılı çıkış
 */
router.post('/logout', logout);

export default router;
