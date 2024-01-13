import { faker } from "@faker-js/faker";
import { db } from "@/db";
import { students } from "@/db/schema";
import { InferSelectModel, eq } from "drizzle-orm";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';
import "dotenv/config";

// const randomName = faker.person.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

// console.log(randomName, randomEmail);

// async function InsertUser() {
//   console.log("generation started");
//   const inserUser = await db.insert(students).values({
//     name: randomName,
//   });
//   console.log("name is generated");
// }
// the goal could be finished before doing anything stupid
// for the first time I guess
// InsertUser();

async function queryNameOfUser() {
  const userName = await db
    .select()
    .from(students)
    .where(eq(students.name, "teshome"));
  return userName;
}
