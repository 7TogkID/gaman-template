import { defineBlock, Response } from "gaman";

export default defineBlock({
  path: "/",
  routes: {
    "/": () => Response.json({ message: "❤️ Welcome to GamanJS" }),
  },
});