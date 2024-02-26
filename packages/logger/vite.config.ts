import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

import sharedConfig from '../../vite.shared';

export default defineConfig(
  mergeConfig(sharedConfig, {
    plugins: [dts()],
    build: {
      assetsDir: '',
      minify: true,
      sourcemap: true,
    },
  }),
);
