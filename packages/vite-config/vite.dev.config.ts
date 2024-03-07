import { defineConfig, mergeConfig } from "vite";

import baseConfig from "./vite.base.config.ts";

export default defineConfig(
  mergeConfig(baseConfig, {
    mode: "development",
    server: {
      host: "localhost",
      port: "8080",
    },
  })
);
