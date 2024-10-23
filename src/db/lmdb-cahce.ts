import { open } from "lmdb";
const kvLMDB = open({ path: "kvLMDB", compression: true });

export const setCacheLMDB = async (key: string, value: any) => {
  return kvLMDB.put(key, value);
};

export const getCacheLMDB = async (key: string) => {
  const value = await kvLMDB.get(key);
  return value;
};