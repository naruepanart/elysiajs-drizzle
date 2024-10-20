import { pgTable, integer, text, varchar } from "drizzle-orm/pg-core";
import { ObjectId } from "bson";

export const usersTable = pgTable("users", {
  id: varchar("id")
  .primaryKey()
  .$defaultFn(() => new ObjectId().toHexString()),
  name: text("name").notNull(),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
});

export const postsTable = pgTable("posts", {
  id: varchar("id")
  .primaryKey()
  .$defaultFn(() => new ObjectId().toHexString()),
  title: text("title").notNull(),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
  users_id: varchar("users_id").references(() => usersTable.id),
});
