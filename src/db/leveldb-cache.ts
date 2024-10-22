import { Level } from "level";
const kvLevelDB = new Level("kvLevelDB", { valueEncoding: "json" });

export const setCacheLevelDB = async (key: string, value: any) => {
  return kvLevelDB.put(key, value);
};

export const getCacheLevelDB = async (key: string) => {
  try {
    const value = await kvLevelDB.get(key);
    return value;
  } catch (err) {
    return null;
  }
};
