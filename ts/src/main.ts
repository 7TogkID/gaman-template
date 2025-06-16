import mainBlock from "main.block";
import gaman from "gaman";

gaman.serv({
  blocks: [mainBlock],
  server: {
    port: 3431,
  },
});
