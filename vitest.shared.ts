import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.shared";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {},
  })
);
