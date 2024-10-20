import * as usersrepository from "./users/repository";

const two = async () => {
  for (let i = 0; i < 50; i++) {
    const name = `${Math.floor(Date.now() / 1000)}`;
    await usersrepository.create(name);
    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

two();
