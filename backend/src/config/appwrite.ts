import { Client, Account, Databases, Users, Storage } from "node-appwrite";
import { debugLog } from "../utils/logger";

/**
 * Appwrite Client Factory
 * SaaS standartlarına uygun, farklı yetki seviyelerinde istemci üretir.
 */
const createAppwriteClient = async (type: "admin" | "session" | "public", token?: string) => {
    const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } = process.env;

    const client = new Client()
        .setEndpoint(APPWRITE_ENDPOINT || "")
        .setProject(APPWRITE_PROJECT_ID || "");

    if (type === "admin") {
        if (!APPWRITE_API_KEY) {
            debugLog("[AppwriteConfig] WARNING: Missing API Key for admin operations.");
        } else {
            client.setKey(APPWRITE_API_KEY);
        }
    } else if (type === "session" && token) {
        // OAuth2 secret veya session ID'sini bağlar
        client.setSession(token);
    }

    return {
        sdk: client,
        account: new Account(client),
        databases: new Databases(client),
        users: new Users(client),
        storage: new Storage(client)
    };
};

export default createAppwriteClient;
