import { defineBlock, Logger, Response } from "gaman";

export default defineBlock({
  path: "/",
  all: (ctx) => {
    Logger.log("middleware ALL");
  },
  routes: {
    "/": (ctx) => {
      return Response.json({ message: "❤️ Welcome to GamanJS" });
    },
    // Middleware with path
    "/article/*": (ctx) => {
      ctx.locals.userName = "Angga7Togk"; // set data locals
    },
    "/article": {
      POST: [
        async (ctx) => {
          const json = await ctx.json();
          return Response.json(json /**return JSON */, { status: 200 });
        },
      ],
      "/json": {
        GET: (ctx) => {
          const userName = ctx.locals.userName;

          // return like Response.json()
          return {
            user_name_from_local: userName,
          };
        },
      },

      "/text": {
        GET: (ctx) => {
          const userName = ctx.locals.userName;

          // return like Response.text()
          return userName;
        },
      },
    },
  },
});
