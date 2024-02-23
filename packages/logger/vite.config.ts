import { resolve } from 'path';
import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    assetsDir: '',
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Logger',
      fileName: format => `index.${format}.js`,
    },
  },
});
