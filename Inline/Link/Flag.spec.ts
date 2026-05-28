import { Flag } from "./Flag.js"

describe("Flag", () => {
	it.each([
		{ input: "blank", expected: true },
		{ input: "download", expected: true },
		{ input: "invalid", expected: false },
		{ input: "", expected: false },
		{ input: 123, expected: false },
		{ input: null, expected: false },
		{ input: undefined, expected: false },
		{ input: {}, expected: false },
		{ input: [], expected: false }
	])("is $input", ({ input, expected }) => expect(Flag.is(input)).toBe(expected))
})
