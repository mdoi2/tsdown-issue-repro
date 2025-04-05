import { defineConfig, type UserConfig } from 'tsdown';

const config: UserConfig = defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  clean: true,
  sourcemap: true,
  treeshake: true,
  dts: true,
});

export default config;
