import { defineConfig } from "astro/config";

// Static output: `npm run build` writes plain HTML/CSS/JS into ./dist,
// which can be served by any web server (nginx, Apache, Caddy, shared hosting).
export default defineConfig({
  site: "https://nahawandi.com",
  output: "static",
  build: { format: "directory" },
});
