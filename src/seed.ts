import * as usersrepository from "./users/repository";
import * as postsrepository from "./posts/repository";

const one = async () => {
  const bodyy = { name: "name-9999999" };
  const user = await usersrepository.create(bodyy);
  for (let i = 0; i < 5; i++) {
    const bodyy = {
      title: `ttttt-${i}`,
      users_id: user[0].id,
    };
    await postsrepository.create(bodyy);
    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

one();
