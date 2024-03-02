import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    assetsDir: "",
    minify: true,
    outDir: "dist",
    sourcemap: true,
  },
  plugins: [dts()],
});
