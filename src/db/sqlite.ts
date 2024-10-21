import Keyv from "keyv";
import KeyvSqlite from "@keyv/sqlite";

const keyvStore = new KeyvSqlite("./kvcache/db101.sqlite");

export { keyvStore };