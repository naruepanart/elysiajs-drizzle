import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { ObjectId } from "bson";

export const usersTable = pgTable("users", {
  id: varchar()
    .primaryKey()
    .$defaultFn(() => new ObjectId().toHexString()),
  name: varchar({ length: 255 }).notNull(),
  updated_at: integer(),
  created_at: integer().$defaultFn(() => Math.floor(Date.now() / 1000)),
  deleted_at: integer(),
});
