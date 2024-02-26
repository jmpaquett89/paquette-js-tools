import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.shared";

export default defineConfig(
  mergeConfig(viteConfig, {
    test: {},
  })
);
