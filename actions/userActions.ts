"use server";

import { db } from "@/db";
import { students } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function queryNameOfUser() {
  const userName = await db
    .select()
    .from(students)
    .where(eq(students.name, "teshome"));
  return await userName;
}
