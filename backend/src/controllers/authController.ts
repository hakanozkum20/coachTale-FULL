import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { debugLog } from '../utils/logger';
import { Client, Account, Users, OAuthProvider } from 'node-appwrite';

const authService = new AuthService();

/**
 * Appwrite OAuth2Token ile login başlatır.
 */
export const initiateOAuth = async (req: Request, res: Response) => {
    debugLog('[AuthController] initiateOAuth');
    const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, BACKEND_URL } = process.env;

    const client = new Client()
        .setEndpoint(APPWRITE_ENDPOINT || '')
        .setProject(APPWRITE_PROJECT_ID || '');

    const account = new Account(client);
    const callbackUrl = `${BACKEND_URL || 'http://localhost:3000'}/api/auth/callback`;

    try {
        const redirectUrl = await account.createOAuth2Token(OAuthProvider.Google, callbackUrl, callbackUrl);
        res.redirect(redirectUrl as unknown as string);
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

/**
 * OAuth Callback - Admin SDK ile kullanıcı bilgilerini alır.
 */
export const handleOAuthCallback = async (req: Request, res: Response) => {
    debugLog('[AuthController] handleOAuthCallback');
    const { userId, secret } = req.query;

    if (!userId || !secret) {
        return res.send('<script>const h=window.location.hash.substring(1);if(h)window.location.href=window.location.pathname+"?"+h;else document.write("<h2>Hata: Oturum bilgisi alinamadi.</h2>");</script>');
    }

    try {
        const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } = process.env;

        // Admin SDK ile kullanıcı bilgilerini al
        const adminClient = new Client()
            .setEndpoint(APPWRITE_ENDPOINT || '')
            .setProject(APPWRITE_PROJECT_ID || '')
            .setKey(APPWRITE_API_KEY || '');

        const users = new Users(adminClient);
        const userInfo = await users.get(userId as string);

        const result = await authService.syncUserToDatabase(userInfo);

        res.cookie('refreshToken', result.tokens.refreshToken, { httpOnly: true, secure: false, sameSite: 'strict', maxAge: 604800000 });

        const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
        const userJson = encodeURIComponent(JSON.stringify(result.user));
        return res.redirect(`${FRONTEND_URL}/callback?accessToken=${result.tokens.accessToken}&user=${userJson}`);
    } catch (e: any) {
        debugLog('[AuthController] Error: ' + e.message);
        return res.status(500).json({ success: false, message: e.message });
    }
};

export const logout = (req: Request, res: Response) => { res.clearCookie('refreshToken'); res.json({ success: true }); };
export const getMe = async (req: any, res: Response) => { const u = await authService.findUserById(req.user.userId); res.json(u); };
export const refreshToken = async (req: Request, res: Response) => { try { const r = await authService.refreshSession(req.cookies.refreshToken); res.json(r); } catch { res.status(401).json({ message: 'Invalid' }); } };
export const googleAuth = (req: Request, res: Response) => res.status(501).json({ message: 'Use /login' });
export const syncUserWithAppwrite = (req: Request, res: Response) => res.status(501).json({ message: 'Deprecated' });
