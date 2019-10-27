import * as dom from "./index"

describe("Document", () => {
	const node = new dom.Document([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Document"))

	it("content", () => expect(node.content).toEqual([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])]))
	it("toObject", () => expect(node.toObject()).toEqual({ class: "Document", content: [{ class: "Block.Paragraph", content: [{ value: "Paragraph.", class: "Inline.Text" }] }] }))
	it("toString", () => expect(node.toString()).toEqual("Paragraph."))
})
