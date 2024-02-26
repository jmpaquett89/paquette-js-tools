import { resolve } from 'path';
import { defineConfig } from 'vite';
import { mergeConfig } from 'vitest/config';

import sharedConfig from '../../vitest.shared';

export default mergeConfig(
  sharedConfig,
  defineConfig({
    build: {
      assetsDir: '',
      sourcemap: true,
      minify: true,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'Logger',
        fileName: 'index',
      },
    },
  }),
);
