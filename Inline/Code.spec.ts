import { dom } from "../index"

const node = new dom.Inline.Code("const pi = 3.1415")

describe("code", () => {
	it("create", () => expect(dom.Node.create({ class: "code", value: "const pi = 3.1415" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("code")
		expect(node.value).toBe("const pi = 3.1415")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "code",
			value: "const pi = 3.1415",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("%const pi = 3.1415%")
	})
})
