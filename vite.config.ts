import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(),
      "@rendering": path.resolve("rendering"),
      "@objects": path.resolve("objects"),
      "@animation": path.resolve("animation"),
    },
  },
});
