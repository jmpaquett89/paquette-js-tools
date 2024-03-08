import { defineConfig, mergeConfig } from "vite";

import baseConfig from "./vite.base.config.ts";

export default defineConfig(
  mergeConfig(baseConfig, {
    mode: "production",
  })
);
