import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@rendering": path.resolve("rendering"),
      "@objects": path.resolve("objects"),
      "@animation": path.resolve("animation"),
    },
  },
});
