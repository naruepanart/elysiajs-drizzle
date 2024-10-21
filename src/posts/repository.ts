import { desc, eq } from "drizzle-orm";
import { db } from "../db/postgres";
import { postsTable, usersTable } from "../db/schema/schema";

// read
export async function findAll(limit: number, skip: number) {
  return db
    .select({
      id: postsTable.id,
      title: postsTable.title,
      users_id: postsTable.users_id,
      name: usersTable.name,
    })
    .from(postsTable)
    .leftJoin(usersTable, eq(postsTable.users_id, usersTable.id))
    .limit(limit)
    .offset(skip)
    .orderBy(desc(postsTable.id));
}

// read by id
export async function findOne(id: number) {
  return db.select().from(postsTable).where(eq(postsTable.id, id));
}

// create
export async function create(body: any) {
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
