import { desc, eq } from "drizzle-orm";
import { db } from "../db";
import { postsTable } from "../db/schema/schema";

// read
export async function findAll(limit: number, skip: number) {
  return db.select().from(postsTable).limit(limit).offset(skip).orderBy(desc(postsTable.id));
}

// read by id
export async function findOne(id: number) {
  return db.select().from(postsTable).where(eq(postsTable.id, id));
}

// create
export async function create(body: any) {
  console.log(body);
  return db.insert(postsTable).values(body).returning();
}

// update
export async function update(id: number, body: any) {
  return db.update(postsTable).set(body).where(eq(postsTable.id, id)).returning();
}

// delete
export async function remove(id: number) {
  return db.delete(postsTable).where(eq(postsTable.id, id)).returning();
}
