import * as posts_repository from "./repository";
import * as users_repository from "../users/repository";

// read
export const findAll = (page: number) => {
  const limit = 5;
  const skip = (page - 1) * limit;
  const posts = posts_repository.findAll(limit, skip);
  return posts;
};

// read by id
export const findOne = async (id: string) => {
  const posts = await posts_repository.findOne(id);
  return posts[0];
};

// create
export const create = async (req: any) => {
  const users_id = req.users_id;
  const users_exists = await users_repository.findOne(users_id);
  if (!users_exists[0]) {
    return { message: `User with id ${users_id} does not exist` };
  }

  const body = { title: req.title, users_id };
  const posts = await posts_repository.create(body);
  return posts[0];
};

// update
export const update = async (id: string, req: any) => {
  const body = { name: req.name };
  const posts = await posts_repository.update(id, body);
  return posts[0];
};

// delete
export const remove = async (id: string) => {
  const posts = await posts_repository.remove(id);
  return posts[0];
};
