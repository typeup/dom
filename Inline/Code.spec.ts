import { dom } from "../index"

const node = new dom.Inline.Code("const pi = 3.1415")

describe("Inline.Code", () => {
	it("properties", () => {
		expect(node.class).toBe("Inline.Code")
		expect(node.value).toBe("const pi = 3.1415")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Inline.Code",
			value: "const pi = 3.1415",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("%const pi = 3.1415%")
	})
})
