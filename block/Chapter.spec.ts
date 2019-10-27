import * as dom from "../index"

describe("block.Chapter", () => {
	const node = new dom.block.Chapter([new dom.block.Paragraph([ new dom.inline.Text("paragraph")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Chapter"))
	it("name", () => expect(node.content).toEqual([new dom.block.Paragraph([new dom.inline.Text("paragraph")])]))
	it("toObject", () => expect(node.toObject()).toEqual({ content: [{ content: [{ value: "paragraph", class: "Inline.Text" }], class: "Block.Paragraph" }], class: "Block.Chapter" }))
	it("toString", () => expect(node.toString()).toEqual("===\nparagraph"))
})
