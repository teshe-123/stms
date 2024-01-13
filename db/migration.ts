import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import "dotenv/config";

// we must use this b/c using the db import doesn't read .env.developemnt.local enviroment
// variable and it says the connection string is not specified
const db = drizzle(sql);
async function main() {
  console.log("migration stated");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migration ended");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
