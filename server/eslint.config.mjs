import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node, // 👈 THIS FIXES 'process' error
      },
    },
  },

  js.configs.recommended,

  // App code
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": isProd ? "warn" : "off",
    },
  },

  // Test files
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);