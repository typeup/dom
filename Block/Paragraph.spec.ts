import { dom } from "../index"

describe("block.Paragraph", () => {
	const node = new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({ class: "Block.Paragraph", content: [{ class: "Inline.Text", value: "paragraph" }] })
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Paragraph"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("paragraph")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [{ value: "paragraph", class: "Inline.Text" }],
			class: "Block.Paragraph",
		}))
	it("toString", () => expect(node.toString()).toEqual("paragraph"))
})
