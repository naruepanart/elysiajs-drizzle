 import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import * as usersservices from "./users/services";

const app = new Elysia()
  .use(swagger())
  .get("/", async ({ query }: any) => {
    const { page } = query;
    const users = await usersservices.findAll(page);
    return users
  })
  .get("/id/:id", async ({ params: { id } }) => {
    const user = await usersservices.findOne(id);
    return user[0]
  })
  .post("/", async ({ body }: any) => {
    const { name } = body;
    const newUser = await usersservices.create(name);
    return { newUser };
  })
  .put("/id/:id", async({ params: { id }, body }: any) => {
    const { name } = body;
    const updatedUser =  await usersservices.update(id, name);
    return { updatedUser };
  })
  .delete("/id/:id", async ({ params: { id } }) => {
    const deletedUser = await usersservices.remove(id);
    return { deletedUser };
  })

  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
