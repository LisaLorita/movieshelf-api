import globals from "globals";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  {
    ignores: ["dist/", "node_modules/"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
       "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    }
  },
];