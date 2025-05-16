import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

/**
 * @type {import('eslint').Linter.Config[]}
 * */
export default defineConfig([
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...eslintPluginReact.configs.flat.recommended,
    ...eslintPluginReact.configs.flat["jsx-runtime"],
  },
  {
    name: "my",
    files: ["src/**/*.js", "webpack.config.js", "eslint.config.js"],
    ignores: [],
    rules: {
      ...pluginJs.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-use-before-define": "error",
      "no-console": "warn",
      "array-callback-return": [
        "warn",
        {
          checkForEach: true,
        },
      ],
    },
  },
  // Global ignores. Остальные объекты конфигурации eslint используют их
  {
    ignores: ["build", "public"],
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]);
