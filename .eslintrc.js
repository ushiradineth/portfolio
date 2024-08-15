module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.mjs", "*.cjs"],
      rules: {
        "import/no-extraneous-dependencies": "off", // mjs is only used by Astro for configuration, false positive
        "import/no-unresolved": "off", // Also false positive with mjs file
      },
    },
    // Configuration for TypeScript files
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint", "react", "tailwindcss", "simple-import-sort"],
      extends: ["plugin:import/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: ["*.ts", "*.tsx"],
        project: "./tsconfig.json",
      },
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            "": "never",
          },
        ], // Avoid missing file extension errors when using '@/' alias
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "tailwindcss/classnames-order": [
          "warn",
          {
            officialSorting: true,
          },
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-misused-promises": [
          "warn",
          {
            checksVoidReturn: false,
          },
        ],
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    // Configuration for Astro
    {
      files: ["*.astro"],
      plugins: ["@typescript-eslint", "react", "unused-imports", "simple-import-sort"],

      extends: ["plugin:tailwindcss/recommended", "plugin:astro/recommended"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json",
      },
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            "": "never",
          },
        ],
        "import/no-unresolved": [
          "error",
          {
            ignore: ["@/*"],
          },
        ],
        "react/jsx-filename-extension": [1, { extensions: [".astro"] }],
        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "import/prefer-default-export": "off",
        "tailwindcss/classnames-order": [
          "warn",
          {
            officialSorting: true,
          },
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",

        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
  ],
};
