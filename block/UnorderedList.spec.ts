import * as dom from "../index"

describe("block.UnorderedList", () => {
	const node = new dom.block.UnorderedList([new dom.block.ListItem([new dom.block.Paragraph([new dom.inline.Text("Item 0")])])])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.UnorderedList"))
	it("content", () => expect(node.content).toEqual([new dom.block.ListItem([new dom.block.Paragraph([new dom.inline.Text("Item 0")])])]))
	it("toObject", () => expect(node.toObject()).toEqual({ content: [{ content: [{ content: [{ value: "Item 0", class: "Inline.Text" }], class: "Block.Paragraph" }], class: "Block.ListItem" }], class: "Block.UnorderedList" }))
	it("toString", () => expect(node.toString()).toEqual("- Item 0"))
})
