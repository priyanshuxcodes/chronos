import 'dotenv/config';
import { Pool } from 'pg';
// import { PrismaClient } from '@prisma/client';
import { createCorsair } from 'corsair';
import { gmail } from '@corsair-dev/gmail';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const prisma = new PrismaClient();

export const corsair = createCorsair({
    plugins: [gmail(),],
    database: pool,
    kek: process.env.CORSAIR_KEK!,
    multiTenancy: false,
});


