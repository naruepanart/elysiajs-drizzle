import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import * as users_services from "./users/services";
import * as posts_services from "./posts/services";

const app = new Elysia()
  .use(swagger())
  .get("/users", ({ query: { page } }) => users_services.findAll(+page), {
    query: t.Object({
      page: t.String(),
    }),
  })
  .get("/users/:id", ({ params: { id } }) => users_services.findOne(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .post("/users", ({ body }) => users_services.create(body), {
    body: t.Object({
      name: t.String(),
    }),
  })
  .put("/users/:id", ({ params: { id }, body }) => users_services.update(id, body), {
    params: t.Object({ id: t.String() }),
    body: t.Object({
      name: t.String(),
    }),
  })
  .delete("/users/:id", ({ params: { id } }) => users_services.remove(id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/posts", ({ query: { page } }) => posts_services.findAll(+page), {
    query: t.Object({
      page: t.String(),
    }),
  })
  .get("/posts/:id", ({ params: { id } }) => posts_services.findOne(id), {
    params: t.Object({ id: t.String() }),
  })
  .post("/posts", ({ body }) => posts_services.create(body), {
    body: t.Object({
      title: t.String(),
      users_id: t.String(),
    }),
  })
  .put("/posts/:id", ({ params: { id }, body }) => posts_services.update(id, body), {
    params: t.Object({ id: t.String() }),
    body: t.Object({
      name: t.String(),
    }),
  })
  .delete("/posts/:id", ({ params: { id } }) => posts_services.remove(id), {
    params: t.Object({ id: t.String() }),
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
