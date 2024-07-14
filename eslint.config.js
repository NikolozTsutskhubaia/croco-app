// @ts-check
const { ESLint } = require("eslint");

module.exports = {
  overrides: [
    {
      files: ["**/*.ts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "prettier/prettier": [
          "error",
          {
            singleQuote: true,
            semi: true,
            printWidth: 80,
            tabWidth: 2,
            trailingComma: "es5",
          },
        ],
      },
    },
    {
      files: ["**/*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
      ],
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: true,
            semi: true,
            printWidth: 80,
            tabWidth: 2,
            trailingComma: "es5",
          },
        ],
      },
    },
  ],
};
