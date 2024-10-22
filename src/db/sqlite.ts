import Keyv from "keyv";
import KeyvSqlite from "@keyv/sqlite";

const kvStore = new KeyvSqlite("kvSqlite/kvSqlite.sqlite");

const kvPosts = new Keyv({ store: kvStore, namespace: "posts" });

export { kvPosts };

