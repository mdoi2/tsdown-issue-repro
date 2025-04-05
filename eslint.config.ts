import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  stylistic.configs.customize({
    semi: true,
  }),
  js.configs.recommended,
  {
    rules: {
      'eqeqeq': ['error', 'smart'],
      'object-shorthand': ['error', 'properties'],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...tseslint.config(tseslint.configs.recommended) as any,
  {
    ignores: ['node_modules', 'dist'],
  },
]);
