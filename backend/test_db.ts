import prisma from './src/config/database';

async function testDb() {
    console.log('Testing database connection...');
    try {
        const user = await prisma.user.create({
            data: {
                email: 'test-direct@example.com',
                name: 'Test Direct',
                plan: 'FREE'
            }
        });
        console.log('CREATED:', user);

        const all = await prisma.user.findMany();
        console.log('ALL USERS:', all);
    } catch (e: any) {
        console.error('ERROR:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

testDb();
