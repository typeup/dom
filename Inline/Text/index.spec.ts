import { dom } from "../../index.js"

describe("dom.Inline.Text", () => {
	const node = new dom.Inline.Text("value")
	it("create", () => expect(dom.Node.hydrate({ class: "inline.text", value: "value" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.text")
		expect(node.value).toBe("value")
	})
	it("toObject", () => {
		expect(node.dehydrate()).toEqual({ class: "inline.text", value: "value" })
	})
	it("toString", () => {
		expect(node.toString()).toEqual("value")
	})
})
