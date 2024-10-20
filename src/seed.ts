import { db } from "./db";
import { postsTable, usersTable } from "./db/schema";
import * as usersrepository from "./users/repository";

const two = async () => {
  await db.delete(usersTable);
  await db.delete(postsTable);
  /* for (let i = 0; i < 50; i++) {
    const name = `name-${i}`;
    await usersrepository.create(name);
    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } */
};

two();
