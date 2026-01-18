import 'dotenv/config'
import app from './app';
import { debugLog } from './utils/logger';

debugLog('>>> SERVER STARTING / RESTARTING <<<');
const PORT = process.env.PORT || 3000;

async function main() {
    try {
        // Database connection check could go here
        // await prisma.$connect();
        // console.log('Database connected');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

main();
