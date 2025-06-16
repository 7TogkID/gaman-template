import { defineBlock, Response } from "gaman";

export default defineBlock({
  path: "/",
  all: (ctx, next) => {
    console.log("middleware ALL");
    next();
  },
  routes: {
    "/": (ctx) => {
      Response.json({ message: "❤️ Welcome to GamanJS" });
    },

    "/article/:id": {
      GET: (ctx) => {
        Response.json({ message: "Article ID" });
      },
      POST: [
        (ctx) => {
          Response.json(ctx.request.json /**return JSON */, { status: 200 });
        },
      ],
      "/detail": {
        GET: (ctx) => {
          Response.json({
            message: ctx.request.pathname /** $ID from "/user/:id" */,
          });
        },
      },
    },
  },
});
