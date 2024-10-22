import { kvPosts } from "./sqlite";

export const getCache = (key: string) => {
  return kvPosts.get(key);
};

export const setCache = (key: string, value: unknown) => {
  return kvPosts.set(key, value);
};

export const setCacheWithTTL = (key: string, value: unknown, ttlSeconds: number) => {
  return kvPosts.set(key, value, ttlSeconds * 1000);
};
