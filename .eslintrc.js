module.exports = {
  overrides: [
    {
      files: ["*.mjs", "*.cjs"],
      extends: ["plugin:prettier/recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off", // mjs is only used by Astro for configuration, false positive
        "import/no-unresolved": "off" // Also false positive with mjs file
      }
    },
    // Configuration for TypeScript files
    {
      parser: "@typescript-eslint/parser",
      files: ["*.ts", "*.tsx"],

      plugins: ["@typescript-eslint", "react", "unused-imports", "tailwindcss", "simple-import-sort"],
      extends: ["plugin:tailwindcss/recommended", "airbnb-typescript", "plugin:prettier/recommended"],
      parserOptions: {
        project: "./tsconfig.json"
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
            "": "never"
          }
        ], // Avoid missing file extension errors when using '@/' alias
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "tailwindcss/classnames-order": [
          "warn",
          {
            officialSorting: true
          }
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/no-misused-promises": [
          "warn",
          {
            checksVoidReturn: false
          }
        ],
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/consistent-type-imports": "error"
      }
    },
    // Configuration for Astro
    {
      files: ["*.astro"],
      plugins: ["@typescript-eslint", "react", "unused-imports", "tailwindcss", "simple-import-sort"],
      extends: ["plugin:tailwindcss/recommended", "airbnb-typescript", "plugin:prettier/recommended"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        // The script of Astro components uses ESM.
        sourceType: "module",
      },
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
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
            "": "never"
          }
        ], // Avoid missing file extension errors in .astro files
        "import/no-unresolved": [
          "error",
          {
            ignore: ["@/*"]
          }
        ], // Disable no-unresolved rule for .astro files
        "react/jsx-filename-extension": [1, { extensions: [".astro"] }], // Accept jsx in astro files
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "tailwindcss/classnames-order": [
          "warn",
          {
            officialSorting: true
          }
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
      globals: {
        Astro: "readonly"
      }
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
  ],
}