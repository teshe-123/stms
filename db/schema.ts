import { pgTable, serial, smallint, varchar } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  score: smallint("score"),
  name: varchar("name"),
});
