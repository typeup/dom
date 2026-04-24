import { dom } from "../index"

describe("dom.Variables", () => {
	it.each([
		{ input: [], expected: {} },
		{ input: [{ key1: "value1" }], expected: { key1: "value1" } },
		{ input: [{ key1: "value1" }, { key2: "value2" }], expected: { key1: "value1", key2: "value2" } },
		{ input: [{ key1: "value1" }, { key1: "override" }], expected: { key1: "override" } },
		{
			input: [
				{ key1: "value1", key2: "value2" },
				{ key2: "newValue2", key3: "value3" }
			],
			expected: { key1: "value1", key2: "newValue2", key3: "value3" }
		},
		{
			input: [
				{ key1: "value1", shared: "first" },
				{ key2: "value2", shared: "second" },
				{ key3: "value3", shared: "third" }
			],
			expected: { key1: "value1", key2: "value2", key3: "value3", shared: "third" }
		},
		// Deep merge test cases
		{
			input: [{ config: { debug: true } }, { config: { timeout: 5000 } }],
			expected: { config: { debug: true, timeout: 5000 } }
		},
		{
			input: [{ api: { url: "localhost", port: 3000 } }, { api: { port: 8080, ssl: true } }],
			expected: { api: { url: "localhost", port: 8080, ssl: true } }
		},
		{
			input: [
				{ settings: { ui: { theme: "dark" }, cache: { enabled: true } } },
				{ settings: { ui: { fontSize: 14 }, performance: { fast: true } } }
			],
			expected: {
				settings: { ui: { theme: "dark", fontSize: 14 }, cache: { enabled: true }, performance: { fast: true } }
			}
		},
		{
			input: [{ deep: { nested: { level: { value: "original" } } } }, { deep: { nested: { level: { count: 42 } } } }],
			expected: { deep: { nested: { level: { value: "original", count: 42 } } } }
		},
		{
			input: [
				{ mixed: { obj: { key: "value" }, primitive: "old", arr: [1, 2] } },
				{ mixed: { obj: { newKey: "newValue" }, primitive: "new", arr: [3, 4] } }
			],
			expected: { mixed: { obj: { key: "value", newKey: "newValue" }, primitive: "new", arr: [3, 4] } }
		},
		{
			input: [{ data: { items: ["a"], config: { verbose: true } } }, { data: { items: ["b"], status: "ok" } }],
			expected: { data: { items: ["b"], config: { verbose: true }, status: "ok" } }
		},
		{
			input: [{ user: { name: "John", prefs: null } }, { user: { age: 30, prefs: { theme: "light" } } }],
			expected: { user: { name: "John", age: 30, prefs: { theme: "light" } } }
		},
		{ input: [{ user: { prefs: { theme: "dark" } } }, { user: { prefs: null } }], expected: { user: { prefs: null } } },
		{ input: [{ config: {} }, { config: { debug: true } }], expected: { config: { debug: true } } },
		{ input: [{ config: { debug: true } }, { config: {} }], expected: { config: { debug: true } } },
		{
			input: [
				{ app: { name: "test", config: { dev: true } } },
				{ app: { version: "1.0" } },
				{ app: { config: { prod: false } } }
			],
			expected: { app: { name: "test", version: "1.0", config: { dev: true, prod: false } } }
		}
	])("merge($input) == $expected", ({ input, expected }) =>
		expect(dom.Variables.merge(...(input as dom.Variables[]))).toEqual(expected))
	it.each([
		{ variables: {}, keys: ["key1"], expected: [{}, {}] },
		{ variables: { key1: "value1" }, keys: [], expected: [{}, { key1: "value1" }] },
		{
			variables: { key1: "value1", key2: "value2" },
			keys: ["key1"],
			expected: [{ key1: "value1" }, { key2: "value2" }]
		},
		{
			variables: { key1: "value1", key2: "value2" },
			keys: ["key1", "key2"],
			expected: [{ key1: "value1", key2: "value2" }, {}]
		},
		{
			variables: { key1: "value1", key2: "value2" },
			keys: ["key3"],
			expected: [{}, { key1: "value1", key2: "value2" }]
		},
		{ variables: { key1: "", key2: "value2", key3: "" }, keys: ["key1"], expected: [{}, { key2: "value2" }] },
		{
			variables: { key1: "value1", key2: "", key3: "value3" },
			keys: ["key1", "key2", "key3"],
			expected: [{ key1: "value1", key3: "value3" }, {}]
		},
		{
			variables: { key1: "value1", key2: "value2" },
			keys: ["key1", "key1", "key2"],
			expected: [{ key1: "value1", key2: "value2" }, {}]
		}
	])("split($variables, $keys) == $expected", ({ variables, keys, expected }) =>
		expect(dom.Variables.split(variables, ...keys)).toEqual(expected))
	it.each([
		{ variables: {}, path: ["key"], expected: undefined },
		{ variables: { key: "value" }, path: ["key"], expected: "value" },
		{ variables: { key: 42 }, path: ["key"], expected: 42 },
		{ variables: { key: true }, path: ["key"], expected: true },
		{ variables: { key: ["array"] }, path: ["key"], expected: ["array"] },
		{ variables: { nested: { key: "value" } }, path: ["nested", "key"], expected: "value" },
		{ variables: { nested: { key: 42 } }, path: ["nested", "key"], expected: 42 },
		{ variables: { deep: { nested: { path: "value" } } }, path: ["deep", "nested", "path"], expected: "value" },
		{ variables: { key: "value" }, path: ["nonexistent"], expected: undefined },
		{ variables: { nested: { key: "value" } }, path: ["nested", "nonexistent"], expected: undefined }
	])("get($variables, $path) == $expected", ({ variables, path, expected }) =>
		expect(dom.Variables.get(variables, ...path)).toEqual(expected))
	it.each([
		{ variables: {}, value: "value", path: ["key"], expected: { key: "value" } },
		{ variables: { existing: "data" }, value: "value", path: ["key"], expected: { existing: "data", key: "value" } },
		{ variables: { key: "old" }, value: "new", path: ["key"], expected: { key: "new" } }
	])("set($variables, $value, $path) == $expected", ({ variables, value, path, expected }) => {
		expect(dom.Variables.set(variables, value, ...path)).toEqual(expected)
	})
	it.each([
		{ variables: {}, path: ["key"], expected: {} },
		{ variables: { key: "value" }, path: ["key"], expected: {} },
		{ variables: { key1: "value1", key2: "value2" }, path: ["key1"], expected: { key2: "value2" } },
		{ variables: { key1: "value1", key2: "value2" }, path: ["key2"], expected: { key1: "value1" } },
		{ variables: { key: "value" }, path: ["nonexistent"], expected: { key: "value" } },
		{ variables: { nested: { key: "value" } }, path: ["nested", "key"], expected: { nested: {} } },
		{
			variables: { nested: { key1: "value1", key2: "value2" } },
			path: ["nested", "key1"],
			expected: { nested: { key2: "value2" } }
		},
		{
			variables: { deep: { nested: { key: "value" } } },
			path: ["deep", "nested", "key"],
			expected: { deep: { nested: {} } }
		},
		{
			variables: { deep: { nested: { key1: "value1", key2: "value2" } } },
			path: ["deep", "nested", "key1"],
			expected: { deep: { nested: { key2: "value2" } } }
		},
		{ variables: { key: "value", nested: { inner: "data" } }, path: ["key"], expected: { nested: { inner: "data" } } },
		{
			variables: { key: "value", nested: { inner: "data" } },
			path: ["nested", "inner"],
			expected: { key: "value", nested: {} }
		},
		{
			variables: { a: { b: { c: "value" } } },
			path: ["a", "b", "nonexistent"],
			expected: { a: { b: { c: "value" } } }
		},
		{ variables: { key: 42 }, path: ["key"], expected: {} },
		{ variables: { key: true }, path: ["key"], expected: {} },
		{ variables: { key: ["array"] }, path: ["key"], expected: {} },
		{ variables: { key: { nested: "object" } }, path: ["key"], expected: {} }
	])("remove($variables, $path) == $expected", ({ variables, path, expected }) => {
		expect(dom.Variables.remove(variables, ...path)).toEqual(expected)
	})
	it.each([
		{ variables: {}, expected: {} },
		{ variables: { key: "value" }, expected: { key: "value" } },
		{ variables: { "a.b": "value" }, expected: { a: { b: "value" } } },
		{ variables: { "nested.key": "value" }, expected: { nested: { key: "value" } } },
		{ variables: { "a.b": "value1", "a.c": "value2" }, expected: { a: { b: "value1", c: "value2" } } },
		{ variables: { key: "simple", "nested.key": "dotted" }, expected: { key: "simple", nested: { key: "dotted" } } },
		{ variables: { "a.b": 42, "a.c": true, "a.d": ["array"] }, expected: { a: { b: 42, c: true, d: ["array"] } } }
	])("deepen($variables) == $expected", ({ variables, expected }) =>
		expect(dom.Variables.deepen(variables)).toEqual(expected))
	it.each([
		{ variables: {}, expected: {} },
		{ variables: { key: "value" }, expected: { key: "value" } },
		{ variables: { a: { b: "value" } }, expected: { "a.b": "value" } },
		{ variables: { nested: { key: "value" } }, expected: { "nested.key": "value" } },
		{ variables: { a: { b: "value1", c: "value2" } }, expected: { "a.b": "value1", "a.c": "value2" } },
		{ variables: { key: "simple", nested: { key: "dotted" } }, expected: { key: "simple", "nested.key": "dotted" } },
		{ variables: { a: { b: 42, c: true, d: ["array"] } }, expected: { "a.b": 42, "a.c": true, "a.d": ["array"] } },
		{ variables: { deep: { nested: { path: "value" } } }, expected: { "deep.nested.path": "value" } },
		{ variables: { a: { b: { c: { d: "deep" } } } }, expected: { "a.b.c.d": "deep" } },
		{
			variables: { nullValue: null, undefinedValue: undefined },
			expected: { nullValue: null, undefinedValue: undefined }
		},
		{
			variables: { array: [1, 2, 3], nested: { array: ["a", "b"] } },
			expected: { array: [1, 2, 3], "nested.array": ["a", "b"] }
		},
		{
			variables: { mixed: { string: "text", number: 42, boolean: true, array: [1] } },
			expected: { "mixed.string": "text", "mixed.number": 42, "mixed.boolean": true, "mixed.array": [1] }
		},
		{ variables: { a: { b: { c: "value" } }, x: { y: "other" } }, expected: { "a.b.c": "value", "x.y": "other" } },
		{ variables: { key: "value" }, prefix: "root", expected: { "root.key": "value" } },
		{ variables: { a: { b: "value" } }, prefix: "prefix", expected: { "prefix.a.b": "value" } },
		{
			variables: { nested: { deep: { path: "value" } } },
			prefix: "start",
			expected: { "start.nested.deep.path": "value" }
		},
		{ variables: {}, prefix: "empty", expected: {} }
	])("flatten($variables, $prefix) == $expected", ({ variables, prefix, expected }) =>
		expect(dom.Variables.flatten(variables as dom.Variables, prefix)).toEqual(expected))
	it.each([
		// Basic cases
		{ variables: {}, reducer: (accumulator: string[], value: any) => [...accumulator, value], start: [], expected: [] },
		{
			variables: { key1: "value1", key2: "value2" },
			reducer: (accumulator: string[], value: any) => [...accumulator, value],
			start: [],
			expected: ["value1", "value2"]
		},
		{
			variables: { a: 1, b: 2, c: 3 },
			reducer: (accumulator: number, value: any) => accumulator + (typeof value == "number" ? value : 0),
			start: 0,
			expected: 6
		},
		// Nested cases
		{
			variables: { level1: { level2: { value: "deep" } } },
			reducer: (accumulator: string[], value: any) => [...accumulator, value],
			start: [],
			expected: ["deep"]
		},
		{
			variables: { a: { x: 1, y: 2 }, b: { z: 3 } },
			reducer: (accumulator: number, value: any) => accumulator + (typeof value == "number" ? value : 0),
			start: 0,
			expected: 6
		},
		// Path tracking
		{
			variables: { a: "x", b: { c: "y" } },
			reducer: (accumulator: string[], value: any, path: string[]) => [...accumulator, path.join(".")],
			start: [],
			expected: ["a", "b.c"]
		},
		{
			variables: { level1: { level2: { level3: "value" } } },
			reducer: (accumulator: string[], value: any, path: string[]) => [...accumulator, `${path.join(".")}: ${value}`],
			start: [],
			expected: ["level1.level2.level3: value"]
		},
		// Mixed types
		{
			variables: { str: "text", num: 42, bool: true, arr: [1, 2], obj: { nested: "value" } },
			reducer: (accumulator: string[], value: any) => [...accumulator, typeof value],
			start: [],
			expected: ["string", "number", "boolean", "object", "string"]
		},
		// Object creation
		{
			variables: { user: { name: "John", age: 30 }, config: { debug: true } },
			reducer: (accumulator: Record<string, any>, value: any, path: string[]) => ({
				...accumulator,
				[path.join(".")]: value
			}),
			start: {},
			expected: { "user.name": "John", "user.age": 30, "config.debug": true }
		},
		// Count by type
		{
			variables: { a: "text", b: 42, c: { d: "nested", e: 100 }, f: true },
			reducer: (accumulator: Record<string, number>, value: any) => {
				const type = typeof value
				return { ...accumulator, [type]: (accumulator[type] || 0) + 1 }
			},
			start: {},
			expected: { string: 2, number: 2, boolean: 1 }
		},
		// Filter and collect
		{
			variables: { config: { timeout: 5000, retries: 3, debug: false, url: "localhost" } },
			reducer: (accumulator: any[], value: any) => (typeof value === "number" ? [...accumulator, value] : accumulator),
			start: [],
			expected: [5000, 3]
		},
		// Array handling (should not recurse into arrays)
		{
			variables: { numbers: [1, 2, 3], strings: ["a", "b"] },
			reducer: (accumulator: any[], value: any) => [...accumulator, value],
			start: [],
			expected: [
				[1, 2, 3],
				["a", "b"]
			]
		},
		// Undefined handling
		{
			variables: { a: undefined, b: undefined, c: "value" },
			reducer: (accumulator: any[], value: any) => [...accumulator, value],
			start: [],
			expected: [undefined, undefined, "value"]
		},
		// Empty nested objects
		{
			variables: { empty: {}, filled: { key: "value" } },
			reducer: (accumulator: string[], value: any, path: string[]) => [...accumulator, path.join(".")],
			start: [],
			expected: ["filled.key"]
		},
		// Complex nesting
		{
			variables: {
				app: { name: "MyApp", config: { env: "prod", features: { auth: true, cache: { enabled: true, ttl: 300 } } } }
			},
			reducer: (accumulator: any[], value: any, path: string[]) =>
				path.length > 2 ? [...accumulator, { path: path.join("."), value: value }] : accumulator,
			start: [],
			expected: [
				{ path: "app.config.env", value: "prod" },
				{ path: "app.config.features.auth", value: true },
				{ path: "app.config.features.cache.enabled", value: true },
				{ path: "app.config.features.cache.ttl", value: 300 }
			]
		}
	])("reduce($variables, reducer) == $expected", ({ variables, reducer, expected, start }) =>
		expect(dom.Variables.reduce(variables, reducer as Parameters<typeof dom.Variables.reduce>[1], start)).toEqual(
			expected
		))
	it.each([
		// Basic transformation
		{
			variables: { key1: "value1", key2: "value2" },
			mapper: (value: any) => (typeof value == "string" ? value.toUpperCase() : value),
			expected: { key1: "VALUE1", key2: "VALUE2" }
		},
		{
			variables: { a: 1, b: 2, c: 3 },
			mapper: (value: any) => (typeof value == "number" ? value * 2 : value),
			expected: { a: 2, b: 4, c: 6 }
		},
		// Nested transformation
		{
			variables: { user: { name: "john", age: 25 }, config: { debug: true } },
			mapper: (value: any) => (typeof value == "string" ? value.toUpperCase() : value),
			expected: { user: { name: "JOHN", age: 25 }, config: { debug: true } }
		},
		{
			variables: { level1: { level2: { value: "deep" } } },
			mapper: (value: any) => (typeof value == "string" ? `transformed-${value}` : value),
			expected: { level1: { level2: { value: "transformed-deep" } } }
		},
		// Path-based transformation
		{
			variables: { user: { name: "John", age: 30 }, config: { timeout: 5000 } },
			mapper: (value: any, path: string[]) =>
				path.includes("timeout") && typeof value == "number" ? value / 1000 : value,
			expected: { user: { name: "John", age: 30 }, config: { timeout: 5 } }
		},
		{
			variables: { app: { name: "MyApp" }, api: { url: "localhost", port: 3000 } },
			mapper: (value: any, path: string[]) =>
				path[0] === "api" && typeof value == "string" ? `https://${value}` : value,
			expected: { app: { name: "MyApp" }, api: { url: "https://localhost", port: 3000 } }
		},
		// Mixed types
		{
			variables: { str: "text", num: 42, bool: true, arr: [1, 2], nested: { key: "value" } },
			mapper: (value: any) => {
				if (typeof value === "string") return value.toUpperCase()
				if (typeof value === "number") return value + 1
				return value
			},
			expected: { str: "TEXT", num: 43, bool: true, arr: [1, 2], nested: { key: "VALUE" } }
		},
		// Identity transformation (no changes)
		{
			variables: { a: "unchanged", b: { c: "also unchanged" } },
			mapper: (value: any) => value,
			expected: { a: "unchanged", b: { c: "also unchanged" } }
		},
		// Undefined handling
		{
			variables: { a: undefined, b: undefined, c: "value" },
			mapper: (value: any) => (value === undefined ? "was-undefined" : value),
			expected: { a: "was-undefined", b: "was-undefined", c: "value" }
		},
		// Array values (should not recurse into arrays)
		{
			variables: { numbers: [1, 2, 3], config: { items: ["a", "b"] } },
			mapper: (value: any) => (Array.isArray(value) ? [...value, "added"] : value),
			expected: { numbers: [1, 2, 3, "added"], config: { items: ["a", "b", "added"] } }
		},
		// Empty objects
		{
			variables: { empty: {}, filled: { key: "value" } },
			mapper: (value: any) => (typeof value === "string" ? value.toUpperCase() : value),
			expected: { empty: {}, filled: { key: "VALUE" } }
		},
		// Complex path-based logic
		{
			variables: {
				user: { profile: { name: "john", email: "john@example.com" } },
				settings: { theme: "dark", notifications: { email: true } }
			},
			mapper: (value: any, path: string[]) => {
				if (path.includes("profile") && typeof value === "string") return value.toUpperCase()
				if (path.includes("notifications") && typeof value === "boolean") return !value
				return value
			},
			expected: {
				user: { profile: { name: "JOHN", email: "JOHN@EXAMPLE.COM" } },
				settings: { theme: "dark", notifications: { email: false } }
			}
		}
	])("map($variables, mapper) == $expected", ({ variables, mapper, expected }) =>
		expect(dom.Variables.map(variables, mapper)).toEqual(expected))
	describe("parse", () => {
		it.each([
			// string[] cases
			{ variables: { key: "a,b,c" }, path: ["key"], type: "string[]" as const, expected: ["a", "b", "c"] },
			{ variables: { key: "a, b, c" }, path: ["key"], type: "string[]" as const, expected: ["a", "b", "c"] },
			{ variables: { key: "a , b , c " }, path: ["key"], type: "string[]" as const, expected: ["a", "b", "c"] },
			{ variables: { key: "single" }, path: ["key"], type: "string[]" as const, expected: ["single"] },
			{
				variables: { key: "  spaced  " },
				path: ["key"],
				type: "string[]" as const,
				expected: ["", "", "spaced", "", ""]
			},
			{ variables: { key: "a b c" }, path: ["key"], type: "string[]" as const, expected: ["a", "b", "c"] },
			{ variables: { key: "a  b  c" }, path: ["key"], type: "string[]" as const, expected: ["a", "", "b", "", "c"] },
			{
				variables: { key: ["array", "of", "strings"] },
				path: ["key"],
				type: "string[]" as const,
				expected: ["array", "of", "strings"]
			},
			{
				variables: { nested: { key: "x,y,z" } },
				path: ["nested", "key"],
				type: "string[]" as const,
				expected: ["x", "y", "z"]
			},
			{ variables: { key: 42 }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: { key: true }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: { key: [1, 2, 3] }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: { key: ["mixed", 123] }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: { key: null }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: { key: undefined }, path: ["key"], type: "string[]" as const, expected: undefined },
			{ variables: {}, path: ["missing"], type: "string[]" as const, expected: undefined },
			// integer cases
			{ variables: { key: 42 }, path: ["key"], type: "integer" as const, expected: 42 },
			{ variables: { key: 0 }, path: ["key"], type: "integer" as const, expected: 0 },
			{ variables: { key: -10 }, path: ["key"], type: "integer" as const, expected: -10 },
			{ variables: { key: "42" }, path: ["key"], type: "integer" as const, expected: 42 },
			{ variables: { key: "0" }, path: ["key"], type: "integer" as const, expected: 0 },
			{ variables: { key: "-10" }, path: ["key"], type: "integer" as const, expected: -10 },
			{ variables: { key: "42.5" }, path: ["key"], type: "integer" as const, expected: 42 },
			{ variables: { key: "42abc" }, path: ["key"], type: "integer" as const, expected: 42 },
			{ variables: { nested: { key: 100 } }, path: ["nested", "key"], type: "integer" as const, expected: 100 },
			{ variables: { key: 42.5 }, path: ["key"], type: "integer" as const, expected: undefined },
			{ variables: { key: "abc" }, path: ["key"], type: "integer" as const, expected: undefined },
			{ variables: { key: true }, path: ["key"], type: "integer" as const, expected: undefined },
			{ variables: { key: null }, path: ["key"], type: "integer" as const, expected: undefined },
			{ variables: { key: undefined }, path: ["key"], type: "integer" as const, expected: undefined },
			{ variables: {}, path: ["missing"], type: "integer" as const, expected: undefined },
			// float cases
			{ variables: { key: 42.5 }, path: ["key"], type: "float" as const, expected: 42.5 },
			{ variables: { key: 42 }, path: ["key"], type: "float" as const, expected: 42 },
			{ variables: { key: 0 }, path: ["key"], type: "float" as const, expected: 0 },
			{ variables: { key: -10.5 }, path: ["key"], type: "float" as const, expected: -10.5 },
			{ variables: { key: "42.5" }, path: ["key"], type: "float" as const, expected: 42.5 },
			{ variables: { key: "42" }, path: ["key"], type: "float" as const, expected: 42 },
			{ variables: { key: "0.0" }, path: ["key"], type: "float" as const, expected: 0 },
			{ variables: { key: "-10.5" }, path: ["key"], type: "float" as const, expected: -10.5 },
			{ variables: { key: "42.5abc" }, path: ["key"], type: "float" as const, expected: 42.5 },
			{ variables: { nested: { key: 3.14 } }, path: ["nested", "key"], type: "float" as const, expected: 3.14 },
			{ variables: { key: "abc" }, path: ["key"], type: "float" as const, expected: undefined },
			{ variables: { key: true }, path: ["key"], type: "float" as const, expected: undefined },
			{ variables: { key: null }, path: ["key"], type: "float" as const, expected: undefined },
			{ variables: { key: undefined }, path: ["key"], type: "float" as const, expected: undefined },
			{ variables: {}, path: ["missing"], type: "float" as const, expected: undefined },
			// boolean cases
			{ variables: { key: true }, path: ["key"], type: "boolean" as const, expected: true },
			{ variables: { key: false }, path: ["key"], type: "boolean" as const, expected: false },
			{ variables: { key: "true" }, path: ["key"], type: "boolean" as const, expected: true },
			{ variables: { key: "false" }, path: ["key"], type: "boolean" as const, expected: false },
			{ variables: { key: "TRUE" }, path: ["key"], type: "boolean" as const, expected: true },
			{ variables: { key: "FALSE" }, path: ["key"], type: "boolean" as const, expected: false },
			{ variables: { key: "True" }, path: ["key"], type: "boolean" as const, expected: true },
			{ variables: { key: "False" }, path: ["key"], type: "boolean" as const, expected: false },
			{ variables: { nested: { key: "true" } }, path: ["nested", "key"], type: "boolean" as const, expected: true },
			{ variables: { key: "yes" }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: "no" }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: "1" }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: "0" }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: 1 }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: 0 }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: null }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: { key: undefined }, path: ["key"], type: "boolean" as const, expected: undefined },
			{ variables: {}, path: ["missing"], type: "boolean" as const, expected: undefined },
			// string cases
			{ variables: { key: "hello" }, path: ["key"], type: "string" as const, expected: "hello" },
			{ variables: { key: "" }, path: ["key"], type: "string" as const, expected: "" },
			{ variables: { key: 42 }, path: ["key"], type: "string" as const, expected: "42" },
			{ variables: { key: 0 }, path: ["key"], type: "string" as const, expected: "0" },
			{ variables: { key: true }, path: ["key"], type: "string" as const, expected: "true" },
			{ variables: { key: false }, path: ["key"], type: "string" as const, expected: "false" },
			{
				variables: { nested: { key: "nested value" } },
				path: ["nested", "key"],
				type: "string" as const,
				expected: "nested value"
			},
			{ variables: { key: null }, path: ["key"], type: "string" as const, expected: undefined },
			{ variables: { key: undefined }, path: ["key"], type: "string" as const, expected: undefined },
			{ variables: { key: [] }, path: ["key"], type: "string" as const, expected: undefined },
			{ variables: { key: {} }, path: ["key"], type: "string" as const, expected: undefined },
			{ variables: {}, path: ["missing"], type: "string" as const, expected: undefined }
		])("parse %s: $variables at $path → $expected", ({ variables, path, type, expected }) =>
			expect(dom.Variables.parse(type, variables as dom.Variables, ...path)).toEqual(expected))
	})
	describe("keys", () => {
		it.each([
			// Empty and simple cases
			{ variables: {}, expected: [] },
			{ variables: { key: "value" }, expected: [["key"]] },
			{ variables: { a: "x", b: "y" }, expected: [["a"], ["b"]] },
			// Nested cases
			{ variables: { user: { name: "John" } }, expected: [["user", "name"]] },
			{
				variables: { config: { debug: true, timeout: 5000 } },
				expected: [
					["config", "debug"],
					["config", "timeout"]
				]
			},
			{ variables: { deep: { nested: { path: "value" } } }, expected: [["deep", "nested", "path"]] },
			// Mixed types
			{
				variables: { str: "text", num: 42, bool: true, arr: [1, 2], obj: { key: "value" } },
				expected: [["str"], ["num"], ["bool"], ["arr"], ["obj", "key"]]
			},
			// Arrays (not traversed)
			{ variables: { items: ["a", "b"], nested: { list: [1, 2] } }, expected: [["items"], ["nested", "list"]] },
			// Undefined values
			{
				variables: { undefinedVal: undefined, obj: { inner: "value" } },
				expected: [["undefinedVal"], ["obj", "inner"]]
			},
			// Complex nesting
			{
				variables: { app: { config: { env: "prod", cache: { enabled: true, ttl: 300 } }, name: "MyApp" } },
				expected: [
					["app", "config", "env"],
					["app", "config", "cache", "enabled"],
					["app", "config", "cache", "ttl"],
					["app", "name"]
				]
			}
		])("keys($variables) yields $expected", ({ variables, expected }) => {
			const result = Array.from(dom.Variables.keys(variables))
			expect(result).toEqual(expected)
		})
	})
	describe("values", () => {
		it.each([
			// Empty and simple cases
			{ variables: {}, expected: [] },
			{ variables: { key: "value" }, expected: ["value"] },
			{ variables: { a: "x", b: "y" }, expected: ["x", "y"] },
			// Different types
			{ variables: { str: "text", num: 42, bool: true }, expected: ["text", 42, true] },
			// Nested cases
			{ variables: { user: { name: "John" } }, expected: ["John"] },
			{ variables: { config: { debug: true, timeout: 5000 } }, expected: [true, 5000] },
			{ variables: { deep: { nested: { path: "value" } } }, expected: ["value"] },
			// Arrays (not traversed)
			{ variables: { items: ["a", "b"], nested: { single: "value" } }, expected: [["a", "b"], "value"] },
			// Undefined values
			{ variables: { undefinedVal: undefined, obj: { inner: "value" } }, expected: [undefined, "value"] },
			// Complex structure
			{
				variables: { app: { name: "MyApp", config: { env: "prod", features: { auth: true } } } },
				expected: ["MyApp", "prod", true]
			}
		])("values($variables) yields $expected", ({ variables, expected }) => {
			const result = Array.from(dom.Variables.values(variables))
			expect(result).toEqual(expected)
		})
	})
	describe("entries", () => {
		it.each([
			// Empty and simple cases
			{ variables: {}, expected: [] },
			{ variables: { key: "value" }, expected: [[["key"], "value"]] },
			{
				variables: { a: "x", b: "y" },
				expected: [
					[["a"], "x"],
					[["b"], "y"]
				]
			},
			// Nested cases
			{ variables: { user: { name: "John" } }, expected: [[["user", "name"], "John"]] },
			{
				variables: { config: { debug: true, timeout: 5000 } },
				expected: [
					[["config", "debug"], true],
					[["config", "timeout"], 5000]
				]
			},
			{ variables: { deep: { nested: { path: "value" } } }, expected: [[["deep", "nested", "path"], "value"]] },
			// Mixed types
			{
				variables: { str: "text", num: 42, obj: { key: "value" } },
				expected: [
					[["str"], "text"],
					[["num"], 42],
					[["obj", "key"], "value"]
				]
			},
			// Arrays (not traversed)
			{
				variables: { items: ["a", "b"], nested: { single: "value" } },
				expected: [
					[["items"], ["a", "b"]],
					[["nested", "single"], "value"]
				]
			},
			// Undefined values
			{
				variables: { undefinedVal: undefined, obj: { inner: "value" } },
				expected: [
					[["undefinedVal"], undefined],
					[["obj", "inner"], "value"]
				]
			},
			// Complex structure
			{
				variables: { app: { config: { env: "prod", cache: { enabled: true } }, name: "MyApp" } },
				expected: [
					[["app", "config", "env"], "prod"],
					[["app", "config", "cache", "enabled"], true],
					[["app", "name"], "MyApp"]
				]
			}
		])("entries($variables) yields $expected", ({ variables, expected }) => {
			const result = Array.from(dom.Variables.entries(variables))
			expect(result).toEqual(expected)
		})
	})
	describe("from", () => {
		it.each([
			// Empty case
			{ entries: [], expected: {} },
			// Simple cases
			{ entries: [[["key"], "value"]], expected: { key: "value" } },
			{
				entries: [
					[["a"], "x"],
					[["b"], "y"]
				],
				expected: { a: "x", b: "y" }
			},
			// Nested cases
			{ entries: [[["user", "name"], "John"]], expected: { user: { name: "John" } } },
			{
				entries: [
					[["config", "debug"], true],
					[["config", "timeout"], 5000]
				],
				expected: { config: { debug: true, timeout: 5000 } }
			},
			{ entries: [[["deep", "nested", "path"], "value"]], expected: { deep: { nested: { path: "value" } } } },
			// Mixed types
			{
				entries: [
					[["str"], "text"],
					[["num"], 42],
					[["obj", "key"], "value"]
				],
				expected: { str: "text", num: 42, obj: { key: "value" } }
			},
			// Arrays
			{
				entries: [
					[["items"], ["a", "b"]],
					[["nested", "single"], "value"]
				],
				expected: { items: ["a", "b"], nested: { single: "value" } }
			},
			// Undefined values
			{
				entries: [
					[["undefinedVal"], undefined],
					[["obj", "inner"], "value"]
				],
				expected: { undefinedVal: undefined, obj: { inner: "value" } }
			},
			// Complex structure
			{
				entries: [
					[["app", "config", "env"], "prod"],
					[["app", "config", "cache", "enabled"], true],
					[["app", "name"], "MyApp"]
				],
				expected: { app: { config: { env: "prod", cache: { enabled: true } }, name: "MyApp" } }
			},
			// Overriding paths (later entries win)
			{
				entries: [
					[["key"], "first"],
					[["key"], "second"]
				],
				expected: { key: "second" }
			},
			{
				entries: [
					[["config", "debug"], true],
					[["config", "debug"], false],
					[["config", "timeout"], 5000]
				],
				expected: { config: { debug: false, timeout: 5000 } }
			},
			// Different value types
			{
				entries: [
					[["boolean"], true],
					[["number"], 42],
					[["string"], "text"],
					[["array"], [1, 2, 3]],
					[["null"], null],
					[["undefined"], undefined]
				],
				expected: { boolean: true, number: 42, string: "text", array: [1, 2, 3], null: null, undefined: undefined }
			}
		])("from($entries) == $expected", ({ entries, expected }) => {
			expect(dom.Variables.from(entries as Iterable<[string[], dom.Variables.Value]>)).toEqual(expected)
		})

		// Round-trip test: entries(variables) -> from() should yield original
		it.each([
			{ variables: {} },
			{ variables: { key: "value" } },
			{ variables: { a: "x", b: "y" } },
			{ variables: { user: { name: "John", age: 30 } } },
			{ variables: { config: { debug: true, timeout: 5000, features: { auth: true } } } },
			{ variables: { str: "text", num: 42, bool: true, arr: [1, 2], obj: { nested: "value" } } },
			{ variables: { deep: { nested: { path: { to: { value: "here" } } } } } },
			{ variables: { mixed: { types: { string: "text", number: 42, boolean: true, array: ["a", "b"] } } } }
		])("from(entries($variables)) should equal $variables", ({ variables }) => {
			const reconstructed = dom.Variables.from(dom.Variables.entries(variables))
			expect(reconstructed).toEqual(variables)
		})
	})
})
