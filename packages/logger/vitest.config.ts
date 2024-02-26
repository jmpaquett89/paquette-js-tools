import { resolve } from 'path';
import { defineProject, mergeConfig } from 'vitest/config';

import sharedConfig from '../../vitest.shared';

export default mergeConfig(
  sharedConfig,
  defineProject({
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
