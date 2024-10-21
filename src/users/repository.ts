import { desc, eq } from "drizzle-orm";
import { db } from "../db/postgres";
import { usersTable } from "../db/schema/schema";

// read
export async function findAll(limit: number, skip: number) {
  return db.select().from(usersTable).limit(limit).offset(skip).orderBy(desc(usersTable.id));
}

// read by id
export async function findOne(id: number) {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

// create
export async function create(body: any) {
  return db.insert(usersTable).values(body).returning();
}

// update
export async function update(id: number, body: any) {
  return db.update(usersTable).set(body).where(eq(usersTable.id, id)).returning();
}

// delete
export async function remove(id: number) {
  return db.delete(usersTable).where(eq(usersTable.id, id)).returning();
}
