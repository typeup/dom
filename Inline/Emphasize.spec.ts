import { dom } from "../index"

const node = new dom.Inline.Emphasize([new dom.Inline.Text("TypeUp")])

describe("dom.Inline.Emphasize", () => {
	it("create", () =>
		expect(
			dom.Node.create({ class: "inline.emphasize", content: [{ class: "inline.text", value: "TypeUp" }] })
		).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.emphasize")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "inline.emphasize",
			content: [{ class: "inline.text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
