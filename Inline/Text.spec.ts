import { dom } from "../index"

describe("Text", () => {
	const node = new dom.Inline.Text("value")
	it("create", () => expect(dom.Node.create({ class: "Text", value: "value" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("Text")
		expect(node.value).toBe("value")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Text",
			value: "value",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("value")
	})
})
