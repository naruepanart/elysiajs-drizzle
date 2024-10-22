import * as usersRepository from "./repository";

// read
export const findAll = (page: number) => {
  const limit = 2;
  const skip = (page - 1) * limit;
  const users = usersRepository.findAll(limit, skip);
  return users;
};

// read by id
export const findOne = async (id: number) => {
  const users = await usersRepository.findOne(id);
  return users[0];
};

// create
export const create = async (req: any) => {
  const body = { name: req.name };
  const users = await usersRepository.create(body);
  return users[0];
};

// update
export const update = async (id: number, req: any) => {
  const body = { name: req.name };
  const users = await usersRepository.update(id, body);
  return users[0];
};

// delete
export const remove = async (id: number) => {
  const users = await usersRepository.remove(id);
  return users[0];
};
