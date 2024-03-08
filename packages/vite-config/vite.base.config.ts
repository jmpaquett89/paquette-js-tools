import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  build: {
    assetsDir: "",
    minify: true,
    outDir: "dist",
    sourcemap: true,
  },
  plugins: [dts(), externalizeDeps()],
});
