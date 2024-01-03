// Example drizzle.config.ts
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./db/schema.ts", // path to your schema files
  out: "./drizzle", // directory for migrations
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL, // your database URL
  },
} satisfies Config;
