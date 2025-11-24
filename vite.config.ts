/// <reference types="vitest/config" />
import { defineConfig } from "vite"

export default defineConfig({
	test: {
		typecheck: {
			tsconfig: "./tsconfig.json",
		},
		coverage: {
			reporter: ["text", "json", "html"],
			enabled: true,
			cleanOnRerun: true,
			thresholds: {
				statements: 100,
				branches: 90,
				functions: 100,
				lines: 100,
			},
		},
		globals: true,
		include: ["**/*.spec.[tj]s"],
		testTimeout: 20000,
		isolate: false,
		exclude: ["node_modules", "dist"],
		server: {
			deps: {
				inline: [
					"authly",
					"cloudly-analytics",
					"cloudly-http",
					"cloudly-rest",
					"cloudly-router",
					"cloudly-storage",
					"cryptly",
					"flagly",
					"gracely",
					"isoly",
					"isly",
					"langly",
					"mendly",
					"selectively",
					"sessionly",
					"tidily",
					"typedly",
				],
			},
		},
	},
})
