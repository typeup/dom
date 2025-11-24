import { dom } from "../index"

const node = new dom.Inline.Emphasize([new dom.Inline.Text("TypeUp")])

describe("Emphasize", () => {
	it("create", () =>
		expect(dom.Node.create({ class: "Emphasize", content: [{ class: "Text", value: "TypeUp" }] })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("Emphasize")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Emphasize",
			content: [{ class: "Text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
