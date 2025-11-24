import { dom } from "../index"

describe("text", () => {
	const node = new dom.Inline.Text("value")
	it("create", () => expect(dom.Node.create({ class: "text", value: "value" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("text")
		expect(node.value).toBe("value")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "text",
			value: "value",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("value")
	})
})
