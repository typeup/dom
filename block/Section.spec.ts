import * as dom from "../index"

describe("block.Section", () => {
	const node = new dom.block.Section([new dom.block.Paragraph([ new dom.inline.Text("paragraph")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Section"))
	it("name", () => expect(node.content).toEqual([new dom.block.Paragraph([new dom.inline.Text("paragraph")])]))
	it("toObject", () => expect(node.toObject()).toEqual({ content: [{ content: [{ value: "paragraph", class: "Inline.Text" }], class: "Block.Paragraph" }], class: "Block.Section" }))
	it("toString", () => expect(node.toString()).toEqual("---\nparagraph"))
})
