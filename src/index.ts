import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import * as users_services from "./users/services";

const app = new Elysia()
  .use(swagger())
  .get("/users", ({ query }) => {
    return users_services.findAll(Number(query.page));
  })
  .get("/users/:id", ({ params: { id } }) => users_services.findOne(id), {
    params: t.Object({ id: t.String() }),
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
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
