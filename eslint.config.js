import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/**
 * @type {import('eslint').Linter.Config[]}
 * */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
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
      "array-callback-return": [
        "warn",
        {
          checkForEach: true,
        },
      ],
    },
  },
  {
    ignores: ["build/", "public"],
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
