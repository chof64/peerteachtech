// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  bracketSpacing: true,
  endOfLine: "lf",
  importOrderBuiltinModulesToTop: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  printWidth: 100,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/registry/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
};
