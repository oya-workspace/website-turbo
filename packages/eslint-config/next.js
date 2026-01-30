import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for Next.js applications.
 *
 * Enhanced with:
 * - TypeScript stylistic rules
 * - Storybook ignores
 * - Custom rules for project conventions
 * - Named config blocks for different file types
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Storybook
    "storybook-static/**",
    "**/*.stories.{ts,tsx}",
    "stories/**/*",
    ".storybook/**/*",
    // Config files
    "*.config.js",
    "*.config.mjs",
    "*.config.ts",
  ]),
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },
  // TypeScript/TSX specific rules
  {
    name: "typescript-react-files",
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Allow both type and interface (prefer type for DTOs as per project convention)
      "@typescript-eslint/consistent-type-definitions": "off",
      // Allow Array<T> syntax (project uses both T[] and Array<T>)
      "@typescript-eslint/array-type": "off",
      // Warn on unused vars instead of error
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  // JavaScript specific rules
  {
    name: "javascript-files",
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
    },
  },
  // Test file specific rules (relaxed)
  {
    name: "test-files",
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
