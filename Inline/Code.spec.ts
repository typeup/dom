import { dom } from "../index"

const node = new dom.Inline.Code("const pi = 3.1415")

describe("Code", () => {
	it("create", () => expect(dom.Node.create({ class: "Code", value: "const pi = 3.1415" })).toEqual(node))
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
