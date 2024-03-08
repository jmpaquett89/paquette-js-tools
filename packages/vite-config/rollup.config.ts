export default {
  input: {
    "vite.base.config": "./vite.base.config.ts",
    "vite.dev.config": "./vite.dev.config.ts",
    "vite.prod.config": "./vite.prod.config.ts",
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      exports: "auto",
      entryFileNames: "[name].cjs",
    },
    {
      dir: "dist",
      format: "es",
      entryFileNames: "[name].mjs",
    },
  ],
};
