import mainBlock from "./main.block.js";
import gaman from "gaman";

gaman.serv({
  blocks: [mainBlock],
  server: {
    port: 3431,
  },
});
