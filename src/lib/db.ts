import { Pool } from "pg";

const pool = new Pool({
  host: process.env.SUPABASE_DB_HOST || "aws-0-eu-west-1.pooler.supabase.com",
  port: parseInt(process.env.SUPABASE_DB_PORT || "6543", 10),
  database: process.env.SUPABASE_DB_NAME || "postgres",
  user: process.env.SUPABASE_DB_USER || "postgres.nkjsmhfpcijjvkebsror",
  password: process.env.SUPABASE_DB_PASSWORD || "$Ebus1billion$",
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

export async function query(text: string, params?: unknown[]) {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

export default pool;
