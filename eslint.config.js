import globals from 'globals';
import pluginJs from '@eslint/js';

/**
 * @type {import('eslint').Linter.Config[]}
 * */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js', 'webpack.config.js'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    ignores: ['build/'],
  },
];
