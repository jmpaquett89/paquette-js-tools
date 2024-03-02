import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    assetsDir: "",
    minify: true,
    sourcemap: true,
  },
});
