import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "simple-import-sort": importSort,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": "error",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
]);
