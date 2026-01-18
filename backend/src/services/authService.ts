import { UserRepository } from '../repositories/userRepository';
import { generateTokens, verifyToken } from '../utils/token';
import { User } from '../generated/prisma';
import { debugLog } from '../utils/logger';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findByEmail(email);
    }

    async findUserById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    /**
     * Appwrite'dan gelen kullanıcı bilgilerini DB'ye kaydeder.
     */
    async syncUserToDatabase(appwriteUser: any): Promise<{ tokens: any; user: User }> {
        debugLog(`[AuthService] Syncing user: ${appwriteUser.email}`);

        const avatarUrl = appwriteUser.prefs?.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(appwriteUser.name || appwriteUser.email)}&background=random&color=fff`;

        const user = await this.userRepository.upsertUser(appwriteUser.email, {
            name: appwriteUser.name,
            avatarUrl: avatarUrl,
            googleId: appwriteUser.$id
        });

        const tokens = generateTokens(user);
        return { tokens, user };
    }

    async refreshSession(incomingRefreshToken: string) {
        if (!incomingRefreshToken) throw new Error('Refresh Token missing');
        const decoded = verifyToken(incomingRefreshToken) as any;
        const user = await this.userRepository.findById(decoded.userId);
        if (!user) throw new Error('User not found');
        const tokens = generateTokens(user);
        return { tokens, user };
    }
}
