import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.render(
    <div>
      <h1>Hello, World!!!</h1>
    </div>
  );
});

export default app;
