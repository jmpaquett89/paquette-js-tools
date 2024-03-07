import baseConfig from '@paquette/vite-config/base';
import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';

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
