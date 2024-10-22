import { kvPosts } from "./sqlite";

export const getCacheSqlite = (key: string) => {
  return kvPosts.get(key);
};

export const setCacheSqlite = (key: string, value: unknown) => {
  return kvPosts.set(key, value);
};

export const setCacheSqliteWithTTL = (key: string, value: unknown, ttlSeconds: number) => {
  return kvPosts.set(key, value, ttlSeconds * 1000);
};
