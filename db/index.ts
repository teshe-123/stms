import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { sql } from "@vercel/postgres";

// this is the way you access your db using the db
export const db = drizzle(sql, { schema: schema });
