import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  clean: true,
  sourcemap: true,
  treeshake: true,
  dts: true,
});
