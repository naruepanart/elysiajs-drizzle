import * as postsRepository from "./repository";
import * as usersRepository from "../users/repository";
import { getCacheSqlite, setCacheSqlite } from "../db/sqllite-cache";
import { getCacheLevelDB, setCacheLevelDB } from "../db/leveldb-cache";
import { getCacheLMDB, setCacheLMDB } from "../db/lmdb-cahce";

// read
export const findAll = async (page: number) => {
  const limit = 5;
  const skip = (page - 1) * limit;

  // Get from cache
  const cachedPosts = await getCacheLMDB(`${page}-${limit}-${skip}`);
  if (!cachedPosts) {
    // Read from db
    const posts = await postsRepository.findAll(limit, skip);
    if (!posts.length) {
      return { message: "No posts found" };
    }
    // Set cache
    await setCacheLMDB(`${page}-${limit}-${skip}`, posts);
    return posts;
  }
  return cachedPosts;
};

// read by id
export const findOne = async (id: number) => {
  const posts = await postsRepository.findOne(id);
  return posts[0];
};

// create
export const create = async (req: any) => {
  const users_id = req.users_id;
  const usersExists = await usersRepository.findOne(users_id);
  if (!usersExists[0]) return { message: `User with id ${users_id} does not exist` };

  const body = { title: req.title, users_id };
  const posts = await postsRepository.create(body);
  return posts[0];
};

// update
export const update = async (id: number, req: any) => {
  const body = { name: req.name };
  const posts = await postsRepository.update(id, body);
  return posts[0];
};

// delete
export const remove = async (id: number) => {
  const posts = await postsRepository.remove(id);
  return posts[0];
};
