import * as users_services from "./users/services";
import * as posts_services from "./posts/services";
import { db } from "./db";
import { postsTable, usersTable } from "./db/schema/schema";

const one = async () => {
  // const bodyy = { name: "name1" };
  // const user = await users_services.create(bodyy);

  // await db.delete(postsTable);
  // await db.delete(usersTable);

  /* let user: any;

  for (let i = 0; i < 10; i++) {
    const bodyy = {
      name: `name-test-${i}`,
    };
    user = await users_services.create(bodyy);
  } */

  const bodyy = { name: "name11111" };
  const user = await users_services.create(bodyy);
  console.log(user);
  for (let i = 0; i < 10; i++) {
    const bodyy = {
      title: `title-test-${i}`,
      users_id: user.id,
    };
    await posts_services.create(bodyy);
  }
};

one();
