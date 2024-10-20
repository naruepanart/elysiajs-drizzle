import * as usersrepository from "./repo";

// read
export const findAll = (page: number) => {
  const limit = 10;
  const skip = (page - 1) * limit;
  const user = usersrepository.findAll(limit, skip);
  return user;
};

// read by id
export const findOne = (id: string) => {
  const user = usersrepository.findOne(id);
  return user;
};

// create
export const create = (name: string) => {
  const user = usersrepository.create(name);
  return user;
};

// update
export const update = (id: string, name: string) => {
  const user = usersrepository.update(id, name);
  return user;
};

// delete
export const remove = (id: string) => {
  const user = usersrepository.remove(id);
  return user;
};
