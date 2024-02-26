import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

import sharedConfig from '../../vite.shared';

export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [dts()],
    build: {
      assetsDir: '',
      minify: true,
      sourcemap: true,
    },
  }),
);
