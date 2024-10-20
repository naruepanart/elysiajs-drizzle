import { pgTable, integer, varchar, smallserial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: smallserial("id").primaryKey(),
  name: varchar({ length: 255 }),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
});

export const postsTable = pgTable("posts", {
  id: smallserial("id").primaryKey(),
  title: varchar({ length: 255 }),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
  users_id: smallserial("users_id").references(() => usersTable.id),
});
