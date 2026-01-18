import { PrismaClient } from './src/generated/prisma';
import dotenv from 'dotenv';
dotenv.config();

async function checkUsers() {
    console.log('--- DB DIAGNOSTICS ---');
    console.log('Env DATABASE_URL:', process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 20) + '...' : 'MISSING');

    const prisma = new PrismaClient();
    try {
        const users = await prisma.user.findMany();
        console.log(`Total Users Found: ${users.length}`);
        if (users.length > 0) {
            users.forEach(u => console.log(`[USER] ${u.email} (${u.id})`));
        }
    } catch (e: any) {
        console.error('Query Failed:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkUsers();
