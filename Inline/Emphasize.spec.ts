import { dom } from "../index"

const node = new dom.Inline.Emphasize([new dom.Inline.Text("TypeUp")])

describe("emphasize", () => {
	it("create", () =>
		expect(dom.Node.create({ class: "emphasize", content: [{ class: "text", value: "TypeUp" }] })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("emphasize")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "emphasize",
			content: [{ class: "text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
