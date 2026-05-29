import { dom } from "../../index.js"

const node = new dom.Inline.Code("const pi = 3.1415")

describe("dom.Inline.Code", () => {
	it("create", () => expect(dom.Node.hydrate({ class: "inline.code", value: "const pi = 3.1415" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.code")
		expect(node.value).toBe("const pi = 3.1415")
	})
	it("toObject", () => {
		expect(node.dehydrate()).toEqual({ class: "inline.code", value: "const pi = 3.1415" })
	})
	it("toString", () => {
		expect(node.toString()).toEqual("%const pi = 3.1415%")
	})
})
