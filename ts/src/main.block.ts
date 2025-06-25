import { defineBlock, Response } from "gaman";

export default defineBlock({
  path: "/",
  routes: {
    "/": () => {
      return Response.json({ message: "❤️ Welcome to GamanJS" });
    },
  },
});
