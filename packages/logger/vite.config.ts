import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';

import sharedConfig from '../../vite.shared';

export default defineConfig(
  mergeConfig(sharedConfig, {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'Logger',
        fileName: 'index',
      },
    },
  }),
);
