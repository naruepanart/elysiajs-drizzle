import { desc, eq } from "drizzle-orm";
import { db } from "../db";
import { usersTable } from "../db/schema";

// read
export async function findAll(limit: number, skip: number) {
  return await db.select().from(usersTable).limit(limit).offset(skip).orderBy(desc(usersTable.name));
}

// read by id
export async function findOne(id: string) {
  return await db.select().from(usersTable).where(eq(usersTable.id, id))
}

// create
export async function create(name: string) {
  return await db.insert(usersTable).values({ name }).returning();
}

// update
export async function update(id: string, name: string) {
  return await db.update(usersTable).set({ name }).where(eq(usersTable.id, id)).returning();
}

// delete
export async function remove(id: string) {
  return await db.delete(usersTable).where(eq(usersTable.id, id)).returning();
}
