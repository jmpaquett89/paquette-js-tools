import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';

import baseConfig from '../vite-config/vite.dev.config';

export default defineConfig(
  mergeConfig(baseConfig, {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'Logger',
        fileName: 'index',
      },
    },
  }),
);
