import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
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
      "react/prop-types": "warn",
    },
  },
  pluginJs.configs.recommended,
  {
    ...eslintPluginReact.configs.flat.recommended,
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
  },
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    ignores: ["dist", "build", "node_modules"],
  },
  eslintConfigPrettier,
]);
