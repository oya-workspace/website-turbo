import { config as baseConfig } from "./base.js";

/**
 * ESLint configuration for Storybook applications.
 *
 * Features:
 * - Relaxed rules for story files
 * - Allows `any` types for story examples
 * - No console warnings for documentation code
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const storybookConfig = [
	...baseConfig,
	{
		files: ["**/*.stories.{ts,tsx,js,jsx}", "**/*.story.{ts,tsx,js,jsx}"],
		rules: {
			// Allow `any` type in stories for demonstration purposes
			"@typescript-eslint/no-explicit-any": "off",
			// Allow console in stories for debugging examples
			"no-console": "off",
			// Allow unused vars in story examples
			"@typescript-eslint/no-unused-vars": "off",
			// Allow require imports for compatibility
			"@typescript-eslint/no-var-requires": "off",
		},
	},
	{
		files: [".storybook/**/*.{ts,tsx,js,jsx}"],
		rules: {
			// Storybook config files may have specific patterns
			"@typescript-eslint/no-explicit-any": "off",
			"no-console": "off",
		},
	},
];
