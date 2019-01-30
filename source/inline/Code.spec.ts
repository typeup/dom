import * as inline from "."

const node = new inline.Code("const pi = 3.1415")

describe("Code", () => {
	it("properties", () => {
		expect(node.class).toBe("Code")
		expect(node.value).toBe("const pi = 3.1415")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Code",
			value: "const pi = 3.1415",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("%const pi = 3.1415%")
	})
})
