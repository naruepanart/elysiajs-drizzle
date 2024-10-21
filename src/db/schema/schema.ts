import {  } from "drizzle-orm/pg-core";
import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
});

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
  users_id: serial("users_id").references(() => usersTable.id),
});
