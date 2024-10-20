import { ObjectId } from "bson";
import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => new ObjectId().toHexString()),
  name: varchar("name", { length: 255 }),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
});

export const postsTable = pgTable("posts", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => new ObjectId().toHexString()),
  name: varchar("name", { length: 255 }),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  updated_at: integer(),
  deleted_at: integer(),
  usersId: integer("users_id").references(() => usersTable.id),
});
