import { defineConfig, mergeConfig } from "vite";

import baseConfig from "./vite.base.config";

export default defineConfig(
  mergeConfig(baseConfig, {
    mode: "production",
  })
);
