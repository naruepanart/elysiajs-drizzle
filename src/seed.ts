import * as users_services from "./users/services";
import * as posts_services from "./posts/services";

const one = async () => {
  const bodyy = { name: "name9999999" };
  const user = await users_services.create(bodyy);
  for (let i = 0; i < 2; i++) {
    const bodyy = {
      title: `title-test-${i}`,
      users_id: user.id,
    };
    await posts_services.create(bodyy);
  }
};

one();