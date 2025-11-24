import { dom } from "../index"

const node = new dom.Inline.Emphasize([new dom.Inline.Text("TypeUp")])

describe("Inline.Emphasize", () => {
	it("create", () =>
		expect(
			dom.Node.create({ class: "Inline.Emphasize", content: [{ class: "Inline.Text", value: "TypeUp" }] })
		).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("Inline.Emphasize")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Inline.Emphasize",
			content: [{ class: "Inline.Text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
