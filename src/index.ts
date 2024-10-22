import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import * as usersServices from "./users/services";
import * as postsServices from "./posts/services";

const app = new Elysia()
  .use(swagger())
  .get("/users", ({ query: { page } }) => usersServices.findAll(+page), {
    query: t.Object({
      page: t.String(),
    }),
  })
  .get("/users/:id", ({ params: { id } }) => usersServices.findOne(+id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .post("/users", ({ body }) => usersServices.create(body), {
    body: t.Object({
      name: t.String(),
    }),
  })
  .put("/users/:id", ({ params: { id }, body }) => usersServices.update(+id, body), {
    params: t.Object({ id: t.String() }),
    body: t.Object({
      name: t.String(),
    }),
  })
  .delete("/users/:id", ({ params: { id } }) => usersServices.remove(+id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/posts", ({ query: { page } }) => postsServices.findAll(+page), {
    query: t.Object({
      page: t.String(),
    }),
  })
  .get("/posts/:id", ({ params: { id } }) => postsServices.findOne(+id), {
    params: t.Object({ id: t.String() }),
  })
  .post("/posts", ({ body }) => postsServices.create(body), {
    body: t.Object({
      title: t.String(),
      users_id: t.String(),
    }),
  })
  .put("/posts/:id", ({ params: { id }, body }) => postsServices.update(+id, body), {
    params: t.Object({ id: t.String() }),
    body: t.Object({
      name: t.String(),
    }),
  })
  .delete("/posts/:id", ({ params: { id } }) => postsServices.remove(+id), {
    params: t.Object({ id: t.String() }),
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
