import { dom } from "../index"

describe("dom.Variables", () => {
	it.each([
		[[], {}],
		[[{ key1: "value1" }], { key1: "value1" }],
		[[{ key1: "value1" }, { key2: "value2" }], { key1: "value1", key2: "value2" }],
		[[{ key1: "value1" }, { key1: "override" }], { key1: "override" }],
		[
			[
				{ key1: "value1", key2: "value2" },
				{ key2: "newValue2", key3: "value3" },
			],
			{ key1: "value1", key2: "newValue2", key3: "value3" },
		],
		[
			[
				{ key1: "value1", shared: "first" },
				{ key2: "value2", shared: "second" },
				{ key3: "value3", shared: "third" },
			],
			{ key1: "value1", key2: "value2", key3: "value3", shared: "third" },
		],
	] as const)("merge(%input) == %output", (input, expected) => expect(dom.Variables.merge(...input)).toEqual(expected))
	it.each([
		[{}, ["key1"], [{}, {}]],
		[{ key1: "value1" }, [], [{}, { key1: "value1" }]],
		[{ key1: "value1", key2: "value2" }, ["key1"], [{ key1: "value1" }, { key2: "value2" }]],
		[{ key1: "value1", key2: "value2" }, ["key1", "key2"], [{ key1: "value1", key2: "value2" }, {}]],
		[{ key1: "value1", key2: "value2" }, ["key3"], [{}, { key1: "value1", key2: "value2" }]],
		[{ key1: "", key2: "value2", key3: "" }, ["key1"], [{}, { key2: "value2" }]],
		[{ key1: "value1", key2: "", key3: "value3" }, ["key1", "key2", "key3"], [{ key1: "value1", key3: "value3" }, {}]],
		[{ key1: "value1", key2: "value2" }, ["key1", "key1", "key2"], [{ key1: "value1", key2: "value2" }, {}]],
	])("split(%variables, %keys) == %expected", (variables, keys, expected) =>
		expect(dom.Variables.split(variables, ...keys)).toEqual(expected)
	)
})
