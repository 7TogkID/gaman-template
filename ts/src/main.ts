import mainBlock from "main.block";
import gaman from "gaman";

gaman.serv({
  blocks: [mainBlock], // your blocks
  server: {
    port: 3431, // opsional
    host: '0.0.0.0' // opsional
  },
});
