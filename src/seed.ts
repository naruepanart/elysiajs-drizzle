import * as usersServices from "./users/services";
import * as postsServices from "./posts/services";
import { db } from "./db/postgres";
import { postsTable, usersTable } from "./db/schema/schema";

const one = async () => {
  // const bodyy = { name: "name1" };
  // const user = await usersServices.create(bodyy);

  // await db.delete(postsTable);
  // await db.delete(usersTable);

  /* let user: any;

  for (let i = 0; i < 10; i++) {
    const bodyy = {
      name: `name-test-${i}`,
    };
    user = await usersServices.create(bodyy);
  } */

  const bodyy = { name: "name-test" };
  const user = await usersServices.create(bodyy);
  for (let i = 0; i <= 100; i++) {
    const bodyy = {
      title: `title-test-${i}`,
      users_id: user.id,
    };
    await postsServices.create(bodyy);
  }
};

one();
