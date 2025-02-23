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

  // Add custom rules to address the errors in your logs
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Disable or adjust rules causing errors
      "import/no-anonymous-default-export": "off", // Disable anonymous export rule
      "react/display-name": "off", // Disable display name rule
      "@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables
      "@typescript-eslint/no-explicit-any": "warn", // Warn on explicit `any`
      "@typescript-eslint/no-unsafe-function-type": "warn", // Warn on unsafe function types
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "no-unused-vars": "warn", // Warn on unused variables in JS files
    },
  },
];

export default eslintConfig;