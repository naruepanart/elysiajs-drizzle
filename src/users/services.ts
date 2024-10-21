import * as users_repository from "./repository";

// read
export const findAll = (page: number) => {
  const limit = 2;
  const skip = (+page - 1) * limit;
  const user = users_repository.findAll(limit, skip);
  return user;
};

// read by id
export const findOne = async (id: string) => {
  const user = await users_repository.findOne(id);
  return user[0];
};

// create
export const create = async (req: any) => {
  const body = { name: req.name };
  const user = await users_repository.create(body);
  return user[0];
};

// update
export const update = async (id: string, req: any) => {
  const body = { name: req.name };
  const user = await users_repository.update(id, body);
  return user[0];
};

// delete
export const remove = async (id: string) => {
  const user = await users_repository.remove(id);
  return user[0];
};
