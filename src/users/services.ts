import * as usersrepository from "./repository";

// read
export const findAll = (page: number) => {
  const limit = 2;
  const skip = (page - 1) * limit;
  const user = usersrepository.findAll(limit, skip);
  return user;
};

// read by id
export const findOne = async (id: string) => {
  const user = await usersrepository.findOne(id);
  return user[0];
};

// create
export const create = async (body: any) => {
  const { name } = body;
  const user = await usersrepository.create(name);
  return user[0];
};

// update
export const update = async (id: string, body: any) => {
  const { name } = body;
  const user = await usersrepository.update(id, name);
  return user[0];
};

// delete
export const remove = async (id: string) => {
  const user = await usersrepository.remove(id);
  return user[0];
};
