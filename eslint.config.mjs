import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Base ESLint configuration with Prettier integration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Base ESLint rules
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Prettier plugin configuration
  ...compat.extends("plugin:prettier/recommended"),

  // Next.js specific files configuration
  {
    files: ["next.config.js", "app/**/*"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];

export default eslintConfig;
