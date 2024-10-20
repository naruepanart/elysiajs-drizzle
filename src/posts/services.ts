import * as postsrepository from "./repository";

// read
export const findAll = (page: number) => {
  const limit = 2;
  const skip = (page - 1) * limit;
  const posts = postsrepository.findAll(limit, skip);
  return posts;
};

// read by id
export const findOne = async (id: string) => {
  const posts = await postsrepository.findOne(id);
  return posts[0];
};

// create
export const create = async (body: any) => {
  const { name } = body;
  const posts = await postsrepository.create(name);
  return posts[0];
};

// update
export const update = async (id: string, body: any) => {
  const { name } = body;
  const posts = await postsrepository.update(id, name);
  return posts[0];
};

// delete
export const remove = async (id: string) => {
  const posts = await postsrepository.remove(id);
  return posts[0];
};
